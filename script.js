
const display = document.getElementById("display");

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const expression = display.value;
    const match = expression.match(
        /^(-?\d+(?:\.\d+)?)([+\-*/])(-?\d+(?:\.\d+)?)$/
    );

    if (!match) {
        display.value = "Error";
        return;
    }

    const first = Number(match[1]);
    const operator = match[2];
    const second = Number(match[3]);

    let result;

    if (operator === "+") {
        result = first + second;
    } else if (operator === "-") {
        result = first - second;
    } else if (operator === "*") {
        result = first * second;
    } else if (operator === "/") {
        if (second === 0) {
            display.value = "Cannot divide by zero";
            return;
        }
        result = first / second;
    }

    display.value = result;
}
