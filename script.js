// 20 buttons 
const clearBtn = document.querySelector(".clear-btn");
const backspaceBtn = document.querySelector(".backspace-btn");
const moduloBtn = document.querySelector(".modulo-btn");
const divideBtn = document.querySelector(".divide-btn");

const digitSevenBtn = document.querySelector(".digit-seven-btn");
const digitEightBtn = document.querySelector(".digit-eight-btn");
const digitNineBtn = document.querySelector(".digit-nine-btn");
const multiplyBtn = document.querySelector(".multiply-btn");

const digitFourBtn = document.querySelector(".digit-four-btn");
const digitFiveBtn = document.querySelector(".digit-five-btn");
const digitSixBtn = document.querySelector(".digit-six-btn");
const subtractBtn = document.querySelector(".subtract-btn");

const digitOneBtn = document.querySelector(".digit-one-btn");
const digitTwoBtn = document.querySelector(".digit-two-btn");
const digitThreeBtn = document.querySelector(".digit-three-btn");
const plusBtn = document.querySelector(".plus-btn");

const abigusBtn = document.querySelector(".abigus-btn");
const digitZeroBtn = document.querySelector(".digit-zero-btn");
const dotBtn = document.querySelector(".dot-btn");
const equalBtn = document.querySelector(".equal-btn");


// global variables

// left or right
let currentSide = "left";

let leftSideNumber = "";
let operator = "";
let rightSideNumber = "";

let calculationResult = "";
let isUsingDot = false;


// calculation result box
const resultText = document.querySelector(".result-text");
function display() {
    // if equal btn is pressed
    if (calculationResult !== "") {
        resultText.textContent = 
            `${leftSideNumber} ${operator} ${rightSideNumber} = ${calculationResult}`;
    }
    // if not
    else {
        resultText.textContent = `${leftSideNumber} ${operator} ${rightSideNumber}`;
    }
}


// calculation logic
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    // divide by zero, return zero
    if (!b) {
        return 0;
    }
    return round( a / b );
}
function modulo(a, b) {
    return a % b;
}
function round(num) {
    return Math.round(num * 100) / 100
}


// operator logic
function clear(event) {
    // current side = left
    currentSide = "left";
    // clear all global variables
    leftSideNumber = "";
    operator = "";
    rightSideNumber = "";

    calculationResult = "";

    isUsingDot = false;

    display();

    playAudio(event.currentTarget.dataset.key);
}
function backspace(event) {
    // first,
    // if rightside is not empty, pop one number from right
    if (rightSideNumber !== "") {
        rightSideNumber = rightSideNumber.slice(0, -1);
    }
    // else if operator is not empty, clear operator
    else if (operator !== "") {
        operator = "";
    }
    // else if leftside is not empty, pop one number from right
    else if (leftSideNumber !== "") {
        leftSideNumber = leftSideNumber.slice(0, -1);
    }

    display();

    playAudio(event.currentTarget.dataset.key);

    

}
function equal(event) {
    if (currentSide === "left") {
        return;
    }

    // switch case for each operator
    if (isUsingDot) {
        switch (operator) {
            case "+":
                calculationResult = 
                    round( add(parseFloat(leftSideNumber), parseFloat(rightSideNumber)) );
                break;
            case "-":
                calculationResult = 
                    round( subtract(parseFloat(leftSideNumber), parseFloat(rightSideNumber)) );
                break;
            case "*":
                calculationResult = 
                    round( multiply(parseFloat(leftSideNumber), parseFloat(rightSideNumber)) );
                break;
            case "/":
                calculationResult = 
                    round( divide(parseFloat(leftSideNumber), parseFloat(rightSideNumber)) );
                break;
            case "%":
                calculationResult = 
                    round( modulo(parseFloat(leftSideNumber), parseFloat(rightSideNumber)) );
                break;
    
            default:
                break;
        }
    } else {
        switch (operator) {
            case "+":
                calculationResult = 
                    add(parseInt(leftSideNumber), parseInt(rightSideNumber));
                break;
            case "-":
                calculationResult = 
                    subtract(parseInt(leftSideNumber), parseInt(rightSideNumber));
                break;
            case "*":
                calculationResult = 
                    multiply(parseInt(leftSideNumber), parseInt(rightSideNumber));
                break;
            case "/":
                calculationResult = 
                    divide(parseInt(leftSideNumber), parseInt(rightSideNumber));
                break;
            case "%":
                calculationResult = 
                    modulo(parseInt(leftSideNumber), parseInt(rightSideNumber));
                break;
    
            default:
                break;
        }
    }
    
    // display result
    display();
    

    // put result into left side number, clear right side and operator
    leftSideNumber = calculationResult.toString();
    rightSideNumber = "";
    operator = "";

    // clear result
    calculationResult = "";

    currentSide = "left";

    // play audio
    playAudio(event.currentTarget.dataset.key);
}
function dot(event) {
    
    if (currentSide === "left") {
        if ( leftSideNumber.includes(".") || !leftSideNumber) 
            return; // if has dot or the first element, return
        else 
            leftSideNumber += ".";  // else add dot
    }
    else {
        if ( rightSideNumber.includes(".") || !rightSideNumber ) 
            return;
        else 
           rightSideNumber += ".";
    }
    isUsingDot = true;
    display();

    playAudio(event.currentTarget.dataset.key);
}


// audio
function playAudio(dataKey) {
    // know what key is pressed
    // know the matching audio
    // play the audio

    const audio = document.querySelector(`.audio[data-key="${dataKey}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
}



// event listeners
digitZeroBtn.addEventListener("click", (event) => { 
    if (currentSide === "left") {
        leftSideNumber += "0";
    } 
    else {
        rightSideNumber += "0"
    }
        
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
digitOneBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "1";
    else 
        rightSideNumber += "1"
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
digitTwoBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "2";
    else 
        rightSideNumber += "2"
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
digitThreeBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "3";
    else 
        rightSideNumber += "3"
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
digitFourBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "4";
    else 
        rightSideNumber += "4"
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
digitFiveBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "5";
    else 
        rightSideNumber += "5"
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
digitSixBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "6";
    else 
        rightSideNumber += "6"
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
digitSevenBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "7";
    else 
        rightSideNumber += "7"
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
digitEightBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "8";
    else 
        rightSideNumber += "8"
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
digitNineBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "9";
    else 
        rightSideNumber += "9"
    
    display();

    playAudio(event.currentTarget.dataset.key);

});
plusBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "+";
    currentSide = "right";
    display();

    playAudio(event.currentTarget.dataset.key);

});
subtractBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "-";
    currentSide = "right";
    display();

    playAudio(event.currentTarget.dataset.key);
    
});
multiplyBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "*";
    currentSide = "right";
    display();

    playAudio(event.currentTarget.dataset.key);
    
});
divideBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "/";
    currentSide = "right";
    display();

    playAudio(event.currentTarget.dataset.key);

});
moduloBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "%";
    currentSide = "right";
    display();

    playAudio(event.currentTarget.dataset.key);
    
});

equalBtn.addEventListener("click", equal);
clearBtn.addEventListener("click", clear);
dotBtn.addEventListener("click", dot);
backspaceBtn.addEventListener("click", backspace);
abigusBtn.addEventListener("click", (event) => {
    playAudio(event.currentTarget.dataset.key);
});

