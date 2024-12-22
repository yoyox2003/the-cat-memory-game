let btns = document.getElementsByTagName("button");
let startBtn = btns[3];
let resetBtn = btns[4];

let diffBtns = document.querySelectorAll(".difficulties button");
let easyBtn = diffBtns[0];
let mediumBtn = diffBtns[1];
let hardBtn = diffBtns[2];

let highscore = document.querySelector(".score span");
highscore.textContent = window.localStorage.getItem("highscore") || 0;
// window.localStorage.clear();

// Set the difficulty to easy if it's there's no difficulty set make it easy, if it is set make it the last selected button
if (!window.localStorage.getItem("difficulty")) {
    window.localStorage.setItem("score", 0);
    window.localStorage.setItem("difficulty", "easy");
    easyBtn.classList.add("selected");
} else {
    diffBtns.forEach((btn) => {
        if (btn.value === window.localStorage.getItem("difficulty")) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });
}

diffBtns.forEach((btn) => {
    btn.onclick = () => {
        window.localStorage.setItem("difficulty", btn.value);
        window.localStorage.setItem("score", btn.getAttribute("score"));
        diffBtns.forEach((btn) => {
            if (btn.value === window.localStorage.getItem("difficulty")) {
                btn.classList.add("selected");
            } else {
                btn.classList.remove("selected");
            }
        });
    };
});

startBtn.onclick = () => {
    window.location.href = "game_page.html";
};

resetBtn.onclick = () => {
    window.localStorage.setItem("highscore", 0);
    highscore.textContent = 0;
};
