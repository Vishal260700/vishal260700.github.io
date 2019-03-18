let style;
let modal_asked = "../public/Models/style-transfer/la_muse/" ;

function ask(){
	style = ml5.styleTransfer(modal_asked , modelLoaded);
}

function modelLoaded() {
  console.log('Model Loaded!');
  style.transfer(document.getElementById('img'), function(err, resultImg) {
  	img.src = resultImg.src;
  });

}

function la_muse(){
	let model_name = "la_muse";
	modal_asked = "../public/Models/style-transfer/" + model_name + "/";
	ask();
}
function matilde_perez(){
	let model_name = "matilde_perez";
	modal_asked = "../public/Models/style-transfer/" + model_name + "/";
	ask();
}

function matta(){
	let model_name = "matta";
	modal_asked = "../public/Models/style-transfer/" + model_name + "/";
	ask();
}
function rain_princess(){
	let model_name = "rain_princess";
	modal_asked = "../public/Models/style-transfer/" + model_name + "/";
	ask();
}

function scream(){
	let model_name = "scream";
	modal_asked = "../public/Models/style-transfer/" + model_name + "/";
	ask();
}
function udnie(){
	let model_name = "udnie";
	modal_asked = "../public/Models/style-transfer/" + model_name + "/";
	ask();
}

function wave(){
	let model_name = "wave";
	modal_asked = "../public/Models/style-transfer/" + model_name + "/";
	ask();
}
function wreck(){
	let model_name = "wreck";
	modal_asked = "../public/Models/style-transfer/" + model_name + "/";
	ask();
}
