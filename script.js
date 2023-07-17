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
let RightSideNumber = "";

let calculationResult = "";



// calculation result box
const resultText = document.querySelector(".result-text");
function display() {

    if (calculationResult !== "") {
        resultText.textContent = 
            `${leftSideNumber} ${operator} ${RightSideNumber} = ${calculationResult}`;
    }
    else {
        resultText.textContent = `${leftSideNumber} ${operator} ${RightSideNumber}`;
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
    return a / b;
}
function modulo(a, b) {
    return a % b;
}


// operator logic
function clear(event) {
    // current side = left
    currentSide = "left";
    // clear all global variables
    leftSideNumber = "";
    operator = "";
    RightSideNumber = "";

    calculationResult = "";

    display();

    playAudio(event.target.dataset.key);
}
function backspace() {
    // first,
    // if rightside is not empty, pop one number from right
    // else if operator is not empty, clear operator
    // else if leftside is not empty, pop one number from right
}
function equal(event) {
    if (currentSide === "left") {
        return;
    }

    // switch case for each operator
    switch (operator) {
        case "+":
            calculationResult = 
                add(parseInt(leftSideNumber), parseInt(RightSideNumber));
            break;
        case "-":
            calculationResult = 
                subtract(parseInt(leftSideNumber), parseInt(RightSideNumber));
            break;
        case "*":
            calculationResult = 
                multiply(parseInt(leftSideNumber), parseInt(RightSideNumber));
            break;
        case "/":
            calculationResult = 
                divide(parseInt(leftSideNumber), parseInt(RightSideNumber));
            break;
        case "%":
            calculationResult = 
                modulo(parseInt(leftSideNumber), parseInt(RightSideNumber));
            break;

        default:
            break;
    }
    // display result
    display();

    // put result into left side number, clear right side and operator
    leftSideNumber = calculationResult;
    RightSideNumber = "";
    operator = "";

    // clear result
    calculationResult = "";

    currentSide = "left";

    // play audio
    playAudio(event.target.dataset.key);
}
function dot() {
    
}


// audio
function playAudio(dataKey) {
    // know what key is pressed
    // know the matching audio
    // play the audio

    const audio = document.querySelector(`.audio[data-key="${dataKey}"]`);
    console.log(audio);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
}



// event listeners
digitZeroBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "0";
    else 
        RightSideNumber += "0"
    
    display();

    playAudio(event.target.dataset.key);

});
digitOneBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "1";
    else 
        RightSideNumber += "1"
    
    display();

    playAudio(event.target.dataset.key);

});
digitTwoBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "2";
    else 
        RightSideNumber += "2"
    
    display();

    playAudio(event.target.dataset.key);

});
digitThreeBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "3";
    else 
        RightSideNumber += "3"
    
    display();

    playAudio(event.target.dataset.key);

});
digitFourBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "4";
    else 
        RightSideNumber += "4"
    
    display();

    playAudio(event.target.dataset.key);

});
digitFiveBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "5";
    else 
        RightSideNumber += "5"
    
    display();

    playAudio(event.target.dataset.key);

});
digitSixBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "6";
    else 
        RightSideNumber += "6"
    
    display();

    playAudio(event.target.dataset.key);

});
digitSevenBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "7";
    else 
        RightSideNumber += "7"
    
    display();

    playAudio(event.target.dataset.key);

});
digitEightBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "8";
    else 
        RightSideNumber += "8"
    
    display();

    playAudio(event.target.dataset.key);

});
digitNineBtn.addEventListener("click", (event) => {
    if (currentSide === "left") 
        leftSideNumber += "9";
    else 
        RightSideNumber += "9"
    
    display();

    playAudio(event.target.dataset.key);

});
plusBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "+";
    currentSide = "right";
    display();

    playAudio(event.target.dataset.key);

});
subtractBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "-";
    currentSide = "right";
    display();

    playAudio(event.target.dataset.key);
    
});
multiplyBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "*";
    currentSide = "right";
    display();

    playAudio(event.target.dataset.key);
    
});
divideBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "/";
    currentSide = "right";
    display();

    playAudio(event.target.dataset.key);

});
moduloBtn.addEventListener("click", (event) => {
    // if leftside is empty, don't put operator
    if (leftSideNumber === "") {
        return;
    }
    operator = "%";
    currentSide = "right";
    display();

    playAudio(event.target.dataset.key);
    
});

equalBtn.addEventListener("click", equal);
clearBtn.addEventListener("click", clear);


















