// cards image info
let cardsList = [
    {"name" : "pokemon1", "img_src" : "images/pokemon-1.jpg"},
    {"name" : "pokemon2", "img_src" : "images/pokemon-2.jpg"},
    {"name" : "pokemon3", "img_src" : "images/pokemon-3.jpg"},
    {"name" : "pokemon4", "img_src" : "images/pokemon-4.jpg"},
    {"name" : "pokemon5", "img_src" : "images/pokemon-5.jpg"},
    {"name" : "pokemon6", "img_src" : "images/pokemon-6.jpg"},
    {"name" : "pokemon7", "img_src" : "images/pokemon-7.jpg"},
    {"name" : "pokemon8", "img_src" : "images/pokemon-8.jpg"},
    {"name" : "pokemon9", "img_src" : "images/pokemon-9.jpg"}
];

let count = 0;
let firstCardGuess = "";
let secondCardGuess = "";
let cardBoard = document.getElementById('card-board');
let grid = document.createElement('div');
grid.setAttribute('class', 'grid');
cardBoard.appendChild(grid);

// creating duplicate of the cards
let cardGrid = cardsList.concat(cardsList);
// creating random grid by shuffling the array of cards
function shuffleArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let shuffledCards = shuffleArray(cardGrid);

function showCardBoard(){
    shuffledCards.forEach(item => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name;
        card.innerHTML = `<img src = "${item.img_src}">`;
        grid.appendChild(card);
    })
}

showCardBoard();

// event listener
grid.addEventListener('click', function(e){
    let selectedCard = e.target.parentElement;
    if(e.target.classList.contains('grid')){
        return;
    }

    if(count < 2){
        count++;
        if(count == 1){
            firstCardGuess = selectedCard.dataset.name;
            selectedCard.classList.add('selected', 'is-clicked');
        } else {
            if(!selectedCard.classList.contains('is-clicked')){
                secondCardGuess = selectedCard.dataset.name;
                console.log(secondCardGuess);
                selectedCard.classList.add('selected');
                checkCardMatch(firstCardGuess, secondCardGuess);
                document.querySelectorAll('.card').forEach((card) => {
                    card.classList.remove('is-clicked');
                });
            } else {
                count--;
            }
        }
    }
});

function checkCardMatch(guess1, guess2){
    if(guess1 == guess2) match();
    else unmatch();
}

// apply the matched css
let match = function(){
    let selectedCards = document.querySelectorAll('.selected');
    selectedCards.forEach(card => {
        card.classList.add('matched');
        card.querySelector('img').style.opacity = "1";
        card.style.pointerEvents = "none";
        card.style.opacity = "0.8";
        card.classList.remove('selected');
    });
    count = 0;
};

let unmatch = function(){
    let selectedCards = document.querySelectorAll('.selected');
    setTimeout(() => {
        selectedCards.forEach((card) => {
            card.classList.remove('selected');
        });
    }, 500);
    count = 0;
}