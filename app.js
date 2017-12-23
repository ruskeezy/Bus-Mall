'use strict';

var voteCount = 0;
var allProducts = [];
var firstProduct;
var secondProduct;
var thirdProduct;


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


// vote counter


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
  return Math.floor(Math.random() * ((newProducts.length-1)));
}

// firstProduct.src=allProducts[ranNum()].filepath

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
  }
  if (file === secondProduct.filepath) {
    firstProduct.timesClicked += 1;
  }
  if (file === thirdProduct.filepath) {
    thirdProduct.timesClicked += 1;
  }

  firstProduct.lastShown = true;
  secondProduct.lastShown = true;
  thirdProduct.lastShown = true;
  firstProduct.beenShown = false;
  secondProduct.beenShown = false;
  thirdProduct.beenShown = false;

  if(voteCount === 25){
    finished();
  } else{
    start();
  }
};

function finished(){
  console.log('finished');
}




firstProductEl.addEventListener('click', clickHandler);
secondProductEl.addEventListener('click', clickHandler);
thirdProductEl.addEventListener('click', clickHandler);






instantiateObjs();
start();
