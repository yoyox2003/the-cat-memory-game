let score = document.querySelector(".score span");
score.textContent = window.localStorage.getItem("score");

// Restart button
let restartBtn = document.querySelector(".restart");
restartBtn.onclick = function () {
    window.location.reload();
    window.localStorage.setItem("score", window.localStorage.getItem("score"));
};

// Saving image paths
let imgsPaths = [
    "..//assets/imgs/cats/cat1.jpg",
    "..//assets/imgs/cats/cat2.jpg",
    "..//assets/imgs/cats/cat3.jpg",
    "..//assets/imgs/cats/cat4.jpg",
    "..//assets/imgs/cats/cat5.jpg",
    "..//assets/imgs/cats/cat6.jpg",
    "..//assets/imgs/cats/cat7.jpg",
    "..//assets/imgs/cats/cat8.jpg",
    "..//assets/imgs/cats/cat9.jpg",
    "..//assets/imgs/cats/cat10.jpg",
    "..//assets/imgs/cats/cat11.jpg",
    "..//assets/imgs/cats/cat12.jpg",
];
let cardBackImg = "..//assets/imgs/card-back.jpeg";

// Shuffling the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Creating a card
function createCard(num) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.value = num;

    let innerCard = document.createElement("div");
    innerCard.classList.add("card-inner");

    // Adding front image
    let cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    let frontImg = document.createElement("img");
    frontImg.src = imgsPaths[num];
    cardFront.appendChild(frontImg);
    innerCard.appendChild(cardFront);

    // Adding back image
    let cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    let backImg = document.createElement("img");
    backImg.src = cardBackImg;
    cardBack.appendChild(backImg);
    innerCard.appendChild(cardBack);

    card.appendChild(innerCard);

    return card;
}

let cardsContainer = document.querySelector(".cards");

// Getting difficulty from local storage
let diff = window.localStorage.getItem("difficulty");
console.log(diff);
let pairs = [];
if (diff === "easy") {
    for (let i = 0; i < 6; i++) {
        pairs.push(createCard(i));
        pairs.push(createCard(i));
    }
    cardsContainer.style.gridTemplateColumns = "repeat(6, 1fr)";
} else if (diff === "medium") {
    for (let i = 0; i < 8; i++) {
        pairs.push(createCard(i));
        pairs.push(createCard(i));
    }
} else {
    for (let i = 0; i < 12; i++) {
        pairs.push(createCard(i));
        pairs.push(createCard(i));
    }
}

// Shuffling the pairs
pairs = shuffle(pairs);

pairs.forEach((card) => {
    cardsContainer.appendChild(card);
});
