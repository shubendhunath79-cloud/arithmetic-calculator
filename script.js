function calculate() {

    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    let operation = document.getElementById("operation").value;

    let result;


    // Check if numbers were entered
    if (isNaN(number1) || isNaN(number2)) {

        result = "Please enter both numbers!";

    }


    // Easter Egg 1 😎
    else if (number1 === 98 && number2 === 0 && operation === "subtract") {

        result = "hi Pavan, tendi marda?";

    }


    // Easter Egg 2 😂
    else if (number1 === 1098 && number2 === 0 && operation === "subtract") {

        result = "don't forgot to bring your bag";

    }


    // Addition
    else if (operation === "add") {

        result = number1 + number2;

    }


    // Subtraction
    else if (operation === "subtract") {

        result = number1 - number2;

    }


    // Multiplication
    else if (operation === "multiply") {

        result = number1 * number2;

    }


    // Division
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



function clearCalculator() {

    document.getElementById("number1").value = "";

    document.getElementById("number2").value = "";

    document.getElementById("operation").value = "add";

    document.getElementById("result").textContent = "Result will appear here";

}