let score = document.querySelector(".score span");

window.onload = function () {
    if (window.localStorage.getItem("difficulty") == "easy") {
        window.localStorage.setItem("score", 400);
    } else if (window.localStorage.getItem("difficulty") == "medium") {
        window.localStorage.setItem("score", 600);
    } else {
        window.localStorage.setItem("score", 800);
    }
    score.textContent = window.localStorage.getItem("score");
};

// Restart button
let restartBtn = document.querySelector(".restart");
restartBtn.onclick = function () {
    window.location.reload();
};

document.querySelector(".back").onclick = function () {
    window.location.href = "index.html";
};

// Saving image paths
let imgsPaths = [
    "assets/imgs/cats/cat1.jpg",
    "assets/imgs/cats/cat2.jpg",
    "assets/imgs/cats/cat3.jpg",
    "assets/imgs/cats/cat4.jpg",
    "assets/imgs/cats/cat5.jpg",
    "assets/imgs/cats/cat6.jpg",
    "assets/imgs/cats/cat7.jpg",
    "assets/imgs/cats/cat8.jpg",
    "assets/imgs/cats/cat9.jpg",
    "assets/imgs/cats/cat10.jpg",
    "assets/imgs/cats/cat11.jpg",
    "assets/imgs/cats/cat12.jpg",
];
let cardBackImg = "assets/imgs/card-back.jpeg";

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

    let innerCard = document.createElement("div");
    innerCard.classList.add("card-inner");
    innerCard.setAttribute("value", num);

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
    cardsContainer.style.gridTemplateRows = "repeat(3, 1fr)";
}

// Shuffling the pairs
pairs = shuffle(pairs);

let index = 0;
let interval = setInterval(() => {
    if (index < pairs.length) {
        cardsContainer.appendChild(pairs[index]);
        index++;
    } else {
        clearInterval(interval); // Clear the interval when all cards are added
        addCardEventListeners();
        flipAll();
        setTimeout(() => {
            flipAllBack();
        }, 3000);
    }
}, 100);

// Adding event listeners to the cards
function addCardEventListeners() {
    let flippedCards = [];
    let cards = document.querySelectorAll(".card-inner");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (
                flippedCards.length < 2 &&
                !card.classList.contains("flipped")
            ) {
                card.classList.add("flipped");
                flippedCards.push(card);
                console.log(flippedCards);
                if (flippedCards.length == 2) {
                    setTimeout(() => {
                        checkMatch(flippedCards);
                        flippedCards = [];
                        let matchedCards =
                            document.querySelectorAll(".matched");
                        if (matchedCards.length == pairs.length) {
                            matchedCards.forEach((card) => {
                                card.style.transform = "rotateY(540deg)";
                            });
                            setTimeout(() => {
                                window.location.href = "end_page.html";
                            }, 500);
                        }
                    }, 1000);
                }
            }
        });
    });
}

function checkMatch(cards) {
    let card1 = cards[0].getAttribute("value");
    let card2 = cards[1].getAttribute("value");
    console.log(cards[0], cards[1]);
    if (card1 == card2) {
        cards[0].classList.add("matched");
        cards[1].classList.add("matched");
    } else {
        cards[0].classList.remove("flipped");
        cards[1].classList.remove("flipped");

        score.textContent =
            Number(score.textContent) - 30 < 0
                ? 0
                : Number(score.textContent) - 50;
        window.localStorage.setItem("score", score.textContent);

        if (score.textContent == 0) {
            // alert("Game Over!");
            flipAll();
            setTimeout(() => {
                window.location.href = "end_page.html";
            }, 2000);
        }
    }
}

function flipAll() {
    let cards = document.querySelectorAll(".card-inner");
    cards.forEach((card) => {
        card.classList.add("flipped");
    });
}

function flipAllBack() {
    let cards = document.querySelectorAll(".card-inner");
    cards.forEach((card) => {
        card.classList.remove("flipped");
    });
}
