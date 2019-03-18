let data;
let model;
let xs,ys;
let val_lossP = document.getElementById('loss');
let val_accP = document.getElementById('accuracy');
let prediction = document.getElementById('prediction');
let statement = document.getElementById('status');


let rslider,gslider,bslider;


let labelList = [
	"red-ish",
	"green-ish",
	"blue-ish",
	"orange-ish",
	"yellow-ish",
	"pink-ish",
	"purple-ish",
	"brown-ish",
	"grey-ish"
	]

function preload(){
	data = loadJSON('colorData.json')
}

function setup(){

	rSlider = createSlider(0, 255, 100);
	rSlider.position(0, 500);
	gSlider = createSlider(0, 255, 0);
	gSlider.position(0, 550);
	bSlider = createSlider(0, 255, 255);
	bSlider.position(0, 600);

	let colors = [];

	let labels= [];

	for(let record of data.entries) {
		let col = [record.r / 255 , record.g / 255 , record.b / 255];
		colors.push(col);
		labels.push(labelList.indexOf(record.label));
	}


	xs = tf.tensor2d(colors);


	let labelTensors = tf.tensor1d(labels, "int32");

	ys = tf.oneHot(labelTensors , 9);

	labelTensors.dispose();


	model = tf.sequential();

	let hidden = tf.layers.dense({
		inputDim : 3,
		activation : "sigmoid",
		units : 16
	});

	let output = tf.layers.dense({
		activation : "softmax",
		units : 9
	});

	model.add(hidden);
	model.add(output);

	const lr = 0.2;

	const optimizer = tf.train.adam(lr);

	model.compile({
		optimizer : optimizer,
		loss : "categoricalCrossentropy",
    	metrics: ['accuracy'],
	});

}

function train(){
	const epoc = 10;
	const options = {
		epochs : epoc,
		validationSplit : 0.1,
		shuffle : true,
		callbacks: {
	      onEpochEnd: (epoch, logs) => {
	        console.log(epoch);
	        console.log(logs);
	      },
	      onTrainEnd: () => {
	        console.log('finished')
	      },
    	},
	}

	model.fit(xs , ys, options,).then(results => {
		console.log(results);
		statement.innerHTML= 'Model-loaded';
		val_lossP.innerHTML = "Loss = " + results.history.loss[epoc - 1];
		val_accP.innerHTML = "Accuracy = " + results.history.acc[epoc - 1];
	});
}

function predict(){
	let r = rSlider.value();
	let g = gSlider.value();
	let b = bSlider.value();

	let input = tf.tensor2d([[r / 255,g / 255,b / 255]]);
	let results = model.predict(input);

	let argMax = results.argMax(1);
    let index = argMax.dataSync()[0];
    let label = labelList[index];

	console.log(label);
	prediction.innerHTML = "Model Predicted given color as = " + label;
}

function draw(){
	let r = rSlider.value();
	let g = gSlider.value();
	let b = bSlider.value();
	createCanvas(450,320);
	background(r,g,b);

}
