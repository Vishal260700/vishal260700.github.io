//represent gen number
let g = 1;
let birdScore = [];

// parameters for the graph
let genNumber = [1,];
let max = [];
let min = [];
let avg = [];
// all above are for a single generation

function nextGeneration() {

	g++;
	genNumber.push(g);

	let gen = document.getElementById('gen');
	gen.innerHTML = "Generation : " + g;

	calculateFitness();

	// chart work
	// segregating();

	// code for maxScore
	let score = document.getElementById('score');
	score.innerHTML = "Highest Score of all Generations : " + maxOfArray(birdScore);


	// making next generation after all die
	for(let i = 0 ; i < total; i++){
		birds[i] = new pickOne();
	}

	let megaArray = chunkify(birdScore, g - 1);


	for(let j = 0; j < megaArray.length; j ++){

		max [j] = maxOfArray(megaArray[j]);
		min[j] = minOfArray(megaArray[j]);
		avg[j] = avgOfArray(megaArray[j]);

	}

	new Chart(document.getElementById("myChart"), {
		  type: 'line',
		  data: {
		    labels: genNumber,
		    datasets: [{ 
		        data: max,
		        label: "Max Score (Generation wise)",
		        borderColor: "#E74C3C",
		        fill: false
		      },{ 
		        data: min,
		        label: "Min Score (Generation wise)",
		        borderColor: "#3e95cd",
		        fill: false
		      },{ 
		        data: avg,
		        label: "Average Score (Generation wise)",
		        borderColor: "#52BE80",
		        fill: false
		      }
		    ]
		  },
		  options: {
		    title: {
		      display: true,
		      text: 'Flappy Bird Generation Scores'
		    }
		  }
		});

}

function pickOne(){

	let index = 0;
	let r = random(1);
	while (r > 0) {
	r = r - savedBirds[index].fitness;
	index++;
	}
	index--;

	// selection of child based on fitness score
	let bird = savedBirds[index];

	// new population with same architecture
	let child = new Bird(bird.brain);

	// mutating with no cross over
	child.mutate();

	return child;

}

function calculateFitness(){

	// counter
	let sum = 0;

	for (let bird of savedBirds){
		sum = sum + bird.score;
	}

	for (let bird of savedBirds){
		bird.fitness = birds.score / sum;
	}

	// we make a seperate array of score of all birds so far created
	for (let k = 0; k < savedBirds.length; k++) {
		birdScore[k] = savedBirds[k].score;
	}
	// we are not doing cross over... we just mutate the single birds on their own simple :), no cross over

}


function maxOfArray(arr){

	var max = arr.reduce(function(a, b) {
    	return Math.max(a, b);
	});

	return max;

}

function minOfArray(arr){

	var min = arr.reduce(function(a, b) {
    	return Math.min(a, b);
	});

	return min;

}

function avgOfArray(arr){

	var tot = arr.reduce(function(a, b) {
    	return a + b;
	}, 0);

	return (tot / (arr.length));

}

function chunkify(a, n, balanced) {
	    
	    if (n < 2)
	        return [a];

	    var len = a.length,
	            out = [],
	            i = 0,
	            size;

	    if (len % n === 0) {
	        size = Math.floor(len / n);
	        while (i < len) {
	            out.push(a.slice(i, i += size));
	        }
	    }

	    else if (balanced) {
	        while (i < len) {
	            size = Math.ceil((len - i) / n--);
	            out.push(a.slice(i, i += size));
	        }
	    }

	    else {

	        n--;
	        size = Math.floor(len / n);
	        if (len % size === 0)
	            size--;
	        while (i < size * n) {
	            out.push(a.slice(i, i += size));
	        }
	        out.push(a.slice(size * n));

	    }

	    return out;
	}