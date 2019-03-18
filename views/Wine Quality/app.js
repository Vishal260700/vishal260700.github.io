/*
<!------------
There is still a need of a way to figure out a way to improve the accuracy of the model
!------------->

*/


// configuration data-->

let arrayX = [];
let arrayY = [];

// train data -->

let dataX = [];
let dataY = [];

// test data -->

let testarrayX = [];
let testarrayY = [];


// train data tensor format -->

let tfxs;
let tfys;

// test data x in tensor format -->

let ttfxs;

// model defination -->

let model = tf.sequential();

// functions-->

function preload(){
	data = loadJSON('data.json')
}

function setup(){

	for(let record of data.entries) {
		let col1 = [record['fixed acidity'] / 10 , record['volatile acidity'] , record['citric acid'] , record['residual sugar'] / 10 , record['chlorides']
		, record['free sulfur dioxide'] / 100 , record['total sulfur dioxide'] / 100 , record['density'] , record['pH'] / 10 , record['sulphates'] , record['alcohol'] / 10 ];
		let col2 = [record['quality'] / 10];
		arrayX.push(col1);
		arrayY.push(col2);
	}

	// console.log(arrayX);
	// console.log(arrayY);

	// arrayX is 2d array and arrayY is now 2d but will convert into 1d for easiness

	for(var i = 0 ; i < 1400 ; i++){
		dataY.push(arrayY[i][0]);
		dataX.push(arrayX[i]);
	}

	// console.log(dataX);
	// console.log(dataY);

	for( var j = 1400 ; j < 1599 ; j++ ){
		testarrayY.push(arrayY[j][0]);
		testarrayX.push(arrayX[j]);
	}
	// console.log(testarrayY);
	// console.log(testarrayX);

	// data in simple array format is constructed.....

	// tensor formation-->

	tfxs = tf.tensor2d(dataX);
	tfys = tf.tensor1d(dataY); // tidy them afterwards


	// model architecture

	let hidden = tf.layers.dense({
		units : 8,
		activation : "sigmoid",
		inputDim : 11
	});

	let hidden2 = tf.layers.dense({
		units : 8,
		activation : "sigmoid",
	});

	let output = tf.layers.dense({
		units : 1,
		activation : "sigmoid"
	});

	model.add(hidden);
	model.add(hidden2);
	model.add(output);

	const lr = 0.1;
	const optimizer = tf.train.adam(lr);

	model.compile({
		optimizer : optimizer,
		loss : "meanSquaredError",
    	metrics: ['accuracy'],
	});

	// model fitting-->

	const ep = 20;

	const options = {
		epochs : ep,
		validationSplit : 0.1,
		shuffle : true
	};


	ttfxs = tf.tensor2d(testarrayX);

	model.fit(tfxs , tfys , options).then(results => {
		// console.log(results);
		// model prediction for testing data is to be performed-->

		document.getElementById('model1').innerHTML = "Model is loaded";
		
		trainbestfit = model.predict(tfxs).dataSync();
		testbestfit = model.predict(ttfxs).dataSync();

		var ctx1 = document.getElementById("myChartTrain").getContext('2d'); // begin chart
		var ctx2 = document.getElementById("myChartTest").getContext('2d');

	            // Chart data and settings:
	            var myChart = new Chart(ctx1, {
	                type: 'line',
	                options: {scales:{yAxes: [{ticks: {beginAtZero: true}}]}},
	                data: {
	                    labels: dataX,
	                    datasets: [
	                    {
		                        label: 'Original training Data',
		                        data: dataY,
		                        borderWidth: 2,
		                        borderColor: '#E67E22'
	                    },{
	                            label: 'Best Fit line training data',
	                            data: trainbestfit,
	                            borderWidth: 2,
	                            borderColor: '#2E86C1'
	                      },
	                    ]
	                },
	            });
	            var myChart = new Chart(ctx2, {
	                type: 'line',
	                options: {scales:{yAxes: [{ticks: {beginAtZero: true}}]}},
	                data: {
	                    labels: testarrayX,
	                    datasets: [
	                    {
		                        label: 'Original test Data',
		                        data: testarrayY,
		                        borderWidth: 2,
		                        borderColor: '#F1C40F'
	                    },{
	                            label: 'Best Fit line Test data',
	                            data: testbestfit,
	                            borderWidth: 2,
	                            borderColor: '#76448A'
	                        },
	                    ]
	                },
	            });

	});

	// model is complete


}