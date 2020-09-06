
const body = document.querySelector("body"),
    bg = document.querySelector(".js-bg"),
    bgFont = bg.querySelector("h1"),
    bgBtn = bg.querySelector(".js-bgBtn");


const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const HEX_NUMBER = list.length;


function handleClick() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * HEX_NUMBER);
        hexColor += list[randomNumber];
    }
    bgFont.innerText = `HEX COLOR :${hexColor}`;
    body.style.backgroundColor = hexColor;
}


function init() {
    body.style.backgroundColor = "#3474FF";
    bgFont.innerText = "HEX COLOR :#3474FF";
    bgBtn.addEventListener("click", handleClick);
}
init();