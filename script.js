function calculate() {

    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    let operation = document.getElementById("operation").value;

    let result;

    if (operation === "add") {
        result = number1 + number2;
    }

    else if (operation === "subtract") {
        result = number1 - number2;
    }

    else if (operation === "multiply") {
        result = number1 * number2;
    }

    else if (operation === "divide") {

        if (number2 === 0) {
            result = "Cannot divide by zero!";
        }

        else {
            result = number1 / number2;
        }
    }

    document.getElementById("result").textContent = "Result: " + result;
}