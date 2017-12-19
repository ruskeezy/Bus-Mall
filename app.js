'use strict';

Product.allProducts = [];

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.times_clicked = 0;
  this.been_shown = false;
  Product.allProducts.push(this);
}

var randomProductOne = randNum();

var randomProductTwo = randNum();

var randomProductThree = randNum();

var productOne = document.getElementById('product_one')

var productTwo = document.getElementById('product_two')

var productThree = document.getElementById('product_three')

function randNum(){
  return Math.floor(Math.random() * (Product.allProducts.length-1) + 1);
}


var votes = 0;

var shown = [];


new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubblegum', 'img/bubblegum.jpg');
new Product('Chair', 'img/cair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('DogDuck', 'img/dog-duck.jpg');
new Product('Dragon', 'img/dragon.jpg');
new Product('Pen', 'img/pen.jpg');
new Product('PetSweep', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.jpg');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/unicorn.jpg');
new Product('USB', 'img/usb.gif');
new Product('WaterCan', 'img/water-can.jpg');
new Product('Wine Glass', 'img/wine-glass.jpg');
