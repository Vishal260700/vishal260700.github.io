let model;

let resolution = 20;
let cols;
let rows;

let xs;

//243, 156, 18  

let c1 = 243;
let c2 = 156;
let c3 = 18;


const train_xs = tf.tensor2d([
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1]
]);
const train_ys = tf.tensor2d([
  [0],
  [1],
  [1],
  [0]
]);

function setup() {
  createCanvas(600, 600);
  cols = width / resolution;
  rows = height / resolution;

  let inputs = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x1 = i / cols;
      let x2 = j / rows;
      inputs.push([x1, x2]);
    }
  }

  xs = tf.tensor2d(inputs);


  model = tf.sequential();

  let hidden = tf.layers.dense({
    inputShape: [2],
    units: 16,
    activation: 'sigmoid'
  });

  let output = tf.layers.dense({
    units: 1,
    activation: 'sigmoid'
  });

  model.add(hidden);
  model.add(output);

  const optimizer = tf.train.adam(0.1);
  model.compile({
    optimizer: optimizer,
    loss: 'meanSquaredError'
  })

  setTimeout(train, 10);

}

function train() {
  trainModel().then(result => {
    setTimeout(train, 10);
  });
}

function trainModel() {
  return model.fit(train_xs, train_ys, {
    shuffle: true,
    epochs: 3
  });
}

function draw() {
  background(0);

  tf.tidy(() => {
    let ys = model.predict(xs);
    let y_values = ys.dataSync();

    let index = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++){
        let br1 = y_values[index] * c1;
        let br2 = y_values[index] * c2;
        let br3 = y_values[index] * c3;
        fill(c1-br1,c2-br2,c3-br3);
        rect(i * resolution, j * resolution, resolution, resolution);
        fill(253, 254, 254);
        textSize(8);
        textAlign(CENTER, CENTER);
        text(nf(y_values[index], 1, 2), i * resolution + resolution / 2, j * resolution + resolution / 2)
        index++;
      }
    }
  });

}
