let btns = document.getElementsByTagName("button");
let restartBtn = btns[0];
let backBtn = btns[1];

restartBtn.onclick = function () {
    window.location.href = "game_page.html";
};

backBtn.onclick = function () {
    window.location.href = "index.html";
};

let score = document.querySelectorAll(".score span");
if (
    window.localStorage.getItem("score") >
    window.localStorage.getItem("highscore")
) {
    window.localStorage.setItem(
        "highscore",
        window.localStorage.getItem("score")
    );
}
score[0].textContent =
    window.localStorage.getItem("score") == 0
        ? "0!!!"
        : window.localStorage.getItem("score");
score[1].textContent = window.localStorage.getItem("highscore");
