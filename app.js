'use strict';

Product.allProducts = [];

var lastShown = [];

var newProducts = [
  ['img/bag.png', 'Bag'],
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
var firstProduct = document.getElementById('image-one');
var secondProduct = document.getElementById('image-two');
var thirdProduct = document.getElementById('image-three');

// random products
var randomProductOne = ranNum();
var randomProductTwo = ranNum();
var randomProductThree = ranNum();

// vote counter

var voteCount = 0;

// constructor function
function Product(filepath) {
  this.filepath = filepath;
  this.path = filepath.split('/')[1];
  this.name = this.path.split('.')[0];
  this.timesClicked = 0;
  this.timesShown = 0;
  this.beenShown = false;
  Product.allProducts.push(this);
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
  return Math.floor(Math.random() * ((newProducts.length-1) + 1));
}

function startSurvey() {
  firstProduct.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductOne].filePath + '" name="first_img">';
}
