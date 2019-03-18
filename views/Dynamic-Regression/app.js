let data;

let arrayX = [];
let arrayY = [];

let testarrayX = [];
let testarrayY = [];

let dataX = [];
let dataY = [];

function preload(){
	data = loadJSON('data.json')
}

function setup(){
	for(let record of data.entries) {
		let col1 = [record.x];
		let col2 = [record.y];
		arrayX.push(col1);
		arrayY.push(col2);
	}

	for(var i = 0 ; i < 250 ; i++){
		dataX.push(arrayX[i][0] / 100);
		dataY.push(arrayY[i][0] / 100);
	}

	for( var j = 250 ; j < 300 ; j++ ){
		testarrayX.push(arrayX[j][0] / 100);
		testarrayY.push(arrayY[j][0] / 100);

	}

// data is ready to be processed

// model architecture
const model = tf.sequential();

let hidden = tf.layers.dense({
	// activation : "sigmoid",
	units : 16,
	inputShape : [1]
});

let hidden2 = tf.layers.dense({
	// activation : "sigmoid",
	units : 16,
	inputShape : [16]
});

let output = tf.layers.dense({
	// activation : "sigmoid",
	units : 1,
	inputShape : [16]
});

model.add(hidden);
model.add(hidden2);
model.add(output);

const lr = 0.1;
const optimizer = tf.train.adam(lr);

model.compile({loss : "meanSquaredError" , optimizer : optimizer , metrics : ["accuracy"]});


// getting tensor for input

let tfxs = tf.tensor1d(dataX);
let tfys = tf.tensor1d(dataY);

// model training and fitting

const ep = 100;

 let options = {
 	epochs : ep,
 	shuffle : true
 }

 tfxs.print();

model.fit(tfxs , tfys , options).then( results => {
	// console.log(results);
	document.getElementById('model1').innerHTML = "Model is loaded";

	bestfit = model.predict(tf.tensor(dataX, [dataX.length, 1])).dataSync();
	bestfit2 = model.predict(tf.tensor(testarrayX, [testarrayX.length, 1])).dataSync();

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
	                            data: bestfit,
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
	                            data: bestfit2,
	                            borderWidth: 2,
	                            borderColor: '#76448A'
	                        },
	                    ]
	                },
	            });
	        });

// testing model
}

