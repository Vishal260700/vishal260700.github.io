new Chart(document.getElementById("myChart"), {
		  type: 'line',
		  data: {
		    labels: genNumber,
		    datasets: [{ 
		        data: [],
		        label: "Max Score (Generation wise)",
		        borderColor: "#E74C3C",
		        fill: false
		      },{ 
		        data: [],
		        label: "Min Score (Generation wise)",
		        borderColor: "#3e95cd",
		        fill: false
		      },{ 
		        data: [],
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
