let lstm;
let model_name;
let query = 'it is good';

function ask(modal_name){
	let model_ask = "../public/models/lstm/" + modal_name + "/";
	lstm = ml5.LSTMGenerator(model_ask, modelLoaded);
}

function bolano(){
	model_name = "bolano";
	ask(model_name);
}

function woolf(){
	model_name = "woolf";
	ask(model_name);
}

function shakespeare(){
	model_name = "shakespeare";
	ask(model_name);
}

function hemingway(){
	model_name = "hemingway";
	ask(model_name);
}

function darwin(){
	model_name = "darwin";
	ask(model_name);
}

function charlotte_bronte(){
	model_name = "charlotte_bronte";
	ask(model_name);
}

function zora_neale_hurston(){
	model_name = "zora_neale_hurston";
	ask(model_name);
}

function dubois(){
	model_name = "dubois";
	ask(model_name);
}

function modelLoaded() {
  lstm.generate({ seed: query }, function(err, results){
 	console.log(query + " " + results);
 	document.getElementById("para").innerHTML = query + " " + results;
  });
}

function myFunction() {
    query = document.getElementById("myNumber").value;
    console.log(query);
}