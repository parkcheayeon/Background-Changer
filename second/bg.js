const body = document.querySelector("body");
const form = document.querySelector(".js-form");
const colorTitle = form.querySelector("h1");
const btn = form.querySelector("button");

function makeColor() {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let makedColor = "#";
    for (let i = 0; i < 6; i++) {
        const randomColor = Math.floor(Math.random() * list.length);
        makedColor += list[randomColor];
    }
    return makedColor;
}

function handleClick() {
    const HexColor = makeColor();
    body.style.backgroundColor = HexColor;
    colorTitle.innerText = `HEX COLOR :${HexColor}`;
}

function init() {
    body.style.backgroundColor = "#3474FF";
    colorTitle.innerText = "HEX COLOR :#3474FF";
    btn.addEventListener("click", handleClick);
}
init();