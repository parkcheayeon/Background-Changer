const body = document.querySelector("body");
const wrap = document.querySelector(".wrap");
const title = wrap.querySelector("h1");
const btn = wrap.querySelector("button");

function colorChange() {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let result = "#";
    for (let i = 0; i < 6; i++) {
        result += list[Math.floor(Math.random() * list.length)];
    }
    return result;
}

function handleBtnClick() {
    const color = colorChange();
    title.innerText = `HEX COLOR :${color}`;
    body.style.backgroundColor = color;
}

function init() {
    btn.addEventListener("click", handleBtnClick);
}
init();