"use strict";

// DOM Elements

const button1 = document.querySelector(".grid-items-1");
const button2 = document.querySelector(".grid-items-2");
const button3 = document.querySelector(".grid-items-3");
const button4 = document.querySelector(".grid-items-4");
const button5 = document.querySelector(".grid-items-5");
// -------------------------------------------------------
const body = document.querySelector(".main");
const container = document.querySelector(".container--text");

const billForm = document.querySelector(".container--text__bill-form");
const billInput = document.querySelector(".container--text__bill-form_input");
const numImput = document.querySelector(".container--text__number-form_avatar");
// Logic

let bill = 0;
let numPeople = 1;
let buttonClicked;
billInput.value = bill;
numImput.value = numPeople;

body.addEventListener("submit", function (e) {
  e.preventDefault();
  bill = +billInput.value;
  numPeople = +numImput.value;
  // console.log(bill, numPeople);
  const calcTip = function () {
    const tipPercentage = buttonClicked / 100;
    const tipAmount = bill * tipPercentage;
    const tipAmountPerPerson = tipAmount / numPeople;
    const billTotal = bill / numPeople;
    console.log(billTotal);
    const tipTotal = billTotal + tipAmountPerPerson;
    console.log(tipTotal);
  };

  button1.addEventListener("click", function () {
    buttonClicked = 5;
    calcTip();
    // console.log(tipAmountPerPerson);
    // console.log(buttonClicked, tipPercentage);
  });
  button2.addEventListener("click", function () {
    buttonClicked = 10;
    calcTip();
  });
  button3.addEventListener("click", function () {
    buttonClicked = 15;
    calcTip();
  });
  button4.addEventListener("click", function () {
    buttonClicked = 25;
    calcTip();
  });
  button5.addEventListener("click", function () {
    buttonClicked = 50;
    calcTip();
  });
});
