let mobilenet;
let testimage;
let name;
let prob;
function func1(){
	console.log("model is Ready");
	mobilenet.predict(testimage,func2);
}

function func2(error,result){
	if(!error){
		console.log(result);
	}else{
		console.log("error");
	}
	name = result[0].className;
	prob = result[0].probability;
  document.getElementById('class').innerHTML = name;
  document.getElementById('conf').innerHTML = prob;
}

function imageReady(){
  image(testimage, 0, 0, width, height);
}

function setup() {
  createCanvas(600, 450);
  testimage = createImg('../public/Images/parrot.jpg', imageReady);
  testimage.hide();
  background(0);
}
function Click(){
  mobilenet = ml5.imageClassifier("MobileNet",func1);
}

