let number = 0;
let number2 = 0;
let result = 0;

// Handlers for first number
document.getElementById("add").onclick = function() {
    console.log("add was clicked");
    number = number + 1;
    document.getElementById("num").innerHTML = number;
    console.log(number);
};

document.getElementById("reset").onclick = function() {
    console.log("reset was clicked");
    number = 0;
    document.getElementById("num").innerHTML = number;
    console.log(number);
};

document.getElementById("sub").onclick = function() {
    console.log("sub was clicked");
    number = number - 1;
    if (number < 0) {
        console.log("its a negative value");
        document.getElementById("num").innerHTML = "Error";
        number = 0;
    } else {
        document.getElementById("num").innerHTML = number;
    }
    console.log(number);
};

// Handlers for second number
document.getElementById("add2").onclick = function() {
    console.log("2 add was clicked");
    number2 = number2 + 1;
    document.getElementById("num2").innerHTML = number2;
    console.log(number2);
};

document.getElementById("reset2").onclick = function() {
    console.log("2 reset was clicked");
    number2 = 0;
    document.getElementById("num2").innerHTML = number2;
    console.log(number2);
};

document.getElementById("sub2").onclick = function() {
    console.log("2 sub was clicked");
    number2 = number2 - 1;
    if (number2 < 0) {
        console.log("its a negative value");
        document.getElementById("num2").innerHTML = "Error";
        number2 = 0;
    } else {
        document.getElementById("num2").innerHTML = number2;
    }
    console.log(number2);
};

// Handler for result calculation
document.getElementById("result4").onclick = function() {
    console.log("btn clicked");

    // Get the radio button elements
    const radioAdd = document.getElementById("inp");
    const radioSub = document.getElementById("inp2");
    const radioMul = document.getElementById("inp3");
    const radioDiv = document.getElementById("inp4");

    // Check which operation is selected
    if (radioAdd.checked) {
        console.log("addition selected");
        result = number + number2;
        document.getElementById("num3").innerHTML = "Result: " + result;
    } else if (radioSub.checked) {
        console.log("subtraction selected");
        result = number - number2;
        document.getElementById("num3").innerHTML = "Result: " + result;
    } else if (radioMul.checked) {
        console.log("multiplication selected");
        result = number * number2;
        document.getElementById("num3").innerHTML = "Result: " + result;
    } else if (radioDiv.checked) {
        console.log("division selected");
        if (number2 === 0) {
            console.log("cannot divide by zero");
            document.getElementById("num3").innerHTML = "Result: Error";
            result = 0;
        } else {
            result = number / number2;
            document.getElementById("num3").innerHTML = "Result: " + result;
        }
    } else {
        console.log("no operation selected");
        document.getElementById("num3").innerHTML = "Result: Error";
    }
};