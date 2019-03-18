let mobilenet;
let video;
let name;
let prob;

function func1(){
  console.log("model is Ready");
  mobilenet.predict(func2);
}

function func2(error,result){
  if(!error){
    //console.log(result);
    mobilenet.predict(func2);
    name = result[0].className;
    prob = result[0].probability;
    //console.log(name,prob);
  }else{
    console.log("error");
  }
}

function imageReady(){
  video(video, 0, 0, width, height);
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet",video,func1);
}


function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(name, 10, height - 20);
}