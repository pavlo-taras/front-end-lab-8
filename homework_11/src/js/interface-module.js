import { result } from "./output-module";

function render() {
    const $container = document.querySelector("#container");
    $container.innerHTML = `
        <div class="row">
            <input type="text" class="input1">
        </div>
        <div class="row">
            <input type="text" class="input2">
        </div>
        <div class="row buttons">
            <input type="button" value="+">
            <input type="button" value="-">
            <input type="button" value="*">
            <input type="button" value="/">
            <input type="button" value="=">
            <input type="button" value="c">
        </div>
        <div class="row">
            <input type="text" class="result" disabled>
        </div>
    `
}

render();

const $buttons = document.querySelector(".buttons");

$buttons.addEventListener("click", function(e) {
    let pressedButton = e.target;

    if (pressedButton.tagName == "DIV") {
        return;
    }
    
    if (pressedButton.value == "=") {
        const resultInput = document.querySelector(".result");
        const value1 = parseFloat(document.querySelector(".input1").value);
        const value2 = parseFloat(document.querySelector(".input2").value);
        const type = document.querySelector(".pressed").value;
    
        resultInput.value = result(type, value1, value2);

        removePressedClass()
    } else if (pressedButton.value == "c") {
        reset();
    } else {
        removePressedClass();
        pressedButton.classList.add("pressed");
    }
})


function removePressedClass() {
    let allButtons = document.querySelectorAll("input[type=button]");
    allButtons.forEach((el) => { el.classList.remove("pressed"); });
}

function reset() {
    removePressedClass();

    let $inputs = document.querySelectorAll("input[type=text]");
    $inputs.forEach((el) => { el.value = "" });
}