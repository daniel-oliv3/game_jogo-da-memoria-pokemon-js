/* Cards Images Info*/
let cardList = [
    {"name" : "pokemon1", "img_src" : "img/pokemon-1.jpg"},
    {"name" : "pokemon2", "img_src" : "img/pokemon-2.jpg"},
    {"name" : "pokemon3", "img_src" : "img/pokemon-3.jpg"},
    {"name" : "pokemon4", "img_src" : "img/pokemon-4.jpg"},
    {"name" : "pokemon5", "img_src" : "img/pokemon-5.jpg"},
    {"name" : "pokemon6", "img_src" : "img/pokemon-6.jpg"},
    {"name" : "pokemon7", "img_src" : "img/pokemon-7.jpg"},
    {"name" : "pokemon8", "img_src" : "img/pokemon-8.jpg"},
    {"name" : "pokemon9", "img_src" : "img/pokemon-9.jpg"},
];

let count = 0;
let firstCardGuess = "";
let secondCardGuess = "";
let cardBoard = document.getElementById('card-board');
let grid = document.createElement('div');
grid.setAttribute('class', 'grid');
cardBoard.appendChild(grid);