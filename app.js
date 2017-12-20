'use strict';

Product.allProducts = [];

var counter = 0;

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

function Product(filepath, name) {
  this.filepath = filepath;
  this.image = filepath.split('/')[1];
  this.name = this.image.split('.')[0];
  this.times_clicked = 0;
  this.times_shown = 0;
  this.been_shown = false;
  Product.allProducts.push(this);
}

function instantiateObjs() {
  for (var i = 0; i < newProducts.length; i++){
    var createProduct = newProducts[i];
    new Product(createProduct[0], createProduct[1]);
  }
}

function getRandomIntInclusive(min, max) { // from MDN
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayRandomProduct() {
  return (getRandomIntInclusive(1, Product.allProducts.length) - 1);
};
