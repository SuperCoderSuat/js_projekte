/***********************************
 * Projects-JS-Einführung-Level-1_1
 **********************************/

let counter = 0;
const myOutput = document.body.querySelector("p");

function addOne() {

    myOutput.textContent = ++counter;

}

function subOne() {
    myOutput.textContent = --counter;
}

function addTen() {
    counter += 10;
    myOutput.textContent = counter;
}

function subTen() {
    counter -= 10;
    myOutput.textContent = counter;
}

function addHundred() {
    counter += 100;
    myOutput.textContent = counter;
}

function subHundred() {
    counter -= 100;
    myOutput.textContent = counter;
}

function resetValue() {
    counter = 0;
    myOutput.textContent = counter;
}

function timesTwo() {
    counter *= 2;
    myOutput.textContent = counter;
}

let showValue = document.body.querySelector("p").textContent = counter;

console.log(showValue);