'use strict';

// global variables
var voteCount = 0;
var allProducts = [];
var firstProduct;
var secondProduct;
var thirdProduct;

// array of products
var newProducts = [
  ['img/bag.jpg', 'Bag'],
  ['img/banana.jpg', 'Banana '],
  ['img/bathroom.jpg', 'Bathroom'],
  ['img/boots.jpg', 'Boots'],
  ['img/breakfast.jpg', 'Breakfast'],
  ['img/bubblegum.jpg', 'Bubble Gum'],
  ['img/chair.jpg', 'Chair'],
  ['img/cthulhu.jpg', 'Cthulhu'],
  ['img/dog-duck.jpg', 'DogDuck'],
  ['img/dragon.jpg', 'Dragon'],
  ['img/pen.jpg', 'Pens'],
  ['img/pet-sweep.jpg', 'Pet Sweeper'],
  ['img/scissors.jpg', 'Scissors'],
  ['img/shark.jpg', 'Shark'],
  ['img/sweep.png', 'Sweeper'],
  ['img/tauntaun.jpg', 'Tauntaun'],
  ['img/unicorn.jpg', 'Unicorn'],
  ['img/usb.gif', 'USB'],
  ['img/water-can.jpg', 'Water Can'],
  ['img/wine-glass.jpg', 'Wine Glass'],
];


// capturing HTML img elements
var firstProductEl = document.getElementById('image-one');
var secondProductEl = document.getElementById('image-two');
var thirdProductEl = document.getElementById('image-three');

// constructor function
function Product(filepath) {
  this.filepath = filepath;
  this.path = filepath.split('/')[1];
  this.name = this.path.split('.')[0];
  this.timesClicked = 0;
  this.timesShown = 0;
  this.beenShown = false;
  this.lastShown = false;
  allProducts.push(this);
}

// creates instances of object
function instantiateObjs() {
  for (var i = 0; i < newProducts.length; i++){
    var createProduct = newProducts[i];
    new Product(createProduct[0], createProduct[1]);
  }
}

// random number between 0-19
function ranNum() {
  return Math.floor(Math.random() * ((newProducts.length)));
}

// on page load, displays 3 random pictures/does not allow duplicates
function start() {

  firstProduct = allProducts[ranNum()];
  while(firstProduct.beenShown === true || firstProduct.lastShown === true){
    firstProduct = allProducts[ranNum()];
  }
  firstProduct.beenShown = true;

  secondProduct = allProducts[ranNum()];

  while(secondProduct.beenShown === true || secondProduct.lastShown === true) {
    secondProduct = allProducts[ranNum()];
  }
  secondProduct.beenShown = true;

  thirdProduct = allProducts[ranNum()];

  while(thirdProduct.beenShown === true || thirdProduct.lastShown === true){
    thirdProduct = allProducts[ranNum()];
  }
  thirdProduct.beenShown = true;

  firstProduct.timesShown++;
  secondProduct.timesShown++;
  thirdProduct.timesShown++;


  firstProductEl.src=firstProduct.filepath;
  secondProductEl.src=secondProduct.filepath;
  thirdProductEl.src=thirdProduct.filepath;

  for(var i = 0; i < allProducts.length; i++){
    allProducts[i].lastShown = false;
  }
}


function clickHandler(event){
  voteCount++
  var file = event.target.src.split('Bus-Mall/')[1];

  if (file === firstProduct.filepath) {
    firstProduct.timesClicked += 1;
  };
  if (file === secondProduct.filepath) {
    firstProduct.timesClicked += 1;
  };
  if (file === thirdProduct.filepath) {
    thirdProduct.timesClicked += 1;
  };

  firstProduct.lastShown = true;
  secondProduct.lastShown = true;
  thirdProduct.lastShown = true;
  firstProduct.beenShown = false;
  secondProduct.beenShown = false;
  thirdProduct.beenShown = false;

  if(voteCount === 25){
    finished();
  } else {
    start();
  }
};

// removes listeners, shows results
function finished(){
  firstProductEl.removeEventListener('click', clickHandler)
  secondProductEl.removeEventListener('click', clickHandler)
  thirdProductEl.removeEventListener('click', clickHandler)
  console.log('finished');
  displayResults();
}

// displays chart
function displayResults(){
  // for(var i = 0; i < allProducts.length; i++){
  //   var list = document.getElementById('final-list');
  //   var listItem = document.createElement('li');
  //   listItem.innerText = 'Product name: ' + allProducts[i].name + ' Times clicked: ' + allProducts[i].timesClicked + ' Percentage clicked: ' + Math.round(allProducts[i].timesClicked / allProducts[i].timesShown * 100 ) + '%';
  //   list.appendChild(listItem)
  // }
  renderChart();
}

// event listeners
firstProductEl.addEventListener('click', clickHandler);
secondProductEl.addEventListener('click', clickHandler);
thirdProductEl.addEventListener('click', clickHandler);

instantiateObjs();
start();

// renders chart with chartjs
function renderChart(){
  var ctx = document.getElementById("myChart").getContext('2d');
  var labels = [];
  var clicks = [];
  for(var i = 0; i < allProducts.length; i++){
    labels.push(allProducts[i].name);
    clicks.push(allProducts[i].timesClicked);
  };

  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: '# of Votes',
              data: clicks,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(0, 254, 208, 0.2)',
                  'rgba(15, 223, 35, 0.2)',
                  'rgba(135, 136, 238, 0.42)',
                  'rgba(7, 32, 198, 0.2)',
                  'rgba(69, 238, 0, 0.2)',
                  'rgba(255, 24, 1, 0.2)',
                  'rgba(255, 0, 176, 0.2)',
                  'rgba(196, 255, 0, 0.2)',
                  'rgba(0, 165, 201, 0.2)',
                  'rgba(153, 236, 18, 0.2)',
                  'rgba(210, 1, 252, 0.2)',
                  'rgba(60, 148, 157, 0.2)',
                  'rgba(62, 161, 57, 0.2)',
                  'rgba(7, 131, 193, 0.2)',
                  'rgba(26, 208, 71, 0.2)',
                  'rgba(7, 57, 170, 0.2)',
              ],
              borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}
