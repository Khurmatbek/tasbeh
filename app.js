const btn = document.querySelector('.btn');
const text = document.querySelector(".text");
const reset = document.querySelector(".reset");
const led = document.querySelector(".led");

btn.addEventListener("click", () => {
    const clickedValue = Number(text.value) + 1;
    text.value = clickedValue;

    if (text.value >= 34) {
        text.value = 0
    }
})
reset.addEventListener("click", () => {
    text.value = 0
})

let clicked = 1;

led.addEventListener("click", () => {
    clicked = clicked + 1;
    if (clicked % 2 == 0) {
        text.style.background = "#0b0bedc9"
    }
    else {
        text.style.background = "#012201c9"
    }
})
