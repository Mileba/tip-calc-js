"use strict";

// DOM Elements

const button1 = document.querySelector(".grid-items-1");
const button2 = document.querySelector(".grid-items-2");
const button3 = document.querySelector(".grid-items-3");
const button4 = document.querySelector(".grid-items-4");
const button5 = document.querySelector(".grid-items-5");
// -------------------------------------------------------
const billInput = document.querySelector(".container--text__bill-form_input");
// Logic
let buttonValue;

const buttonClicked = function () {
  buttonValue = button.innerText;
  console.log(buttonValue);
};
button1.addEventListener("click", buttonClicked);
button2.addEventListener("click", buttonClicked);
button3.addEventListener("click", buttonClicked);
button4.addEventListener("click", buttonClicked);
button5.addEventListener("click", buttonClicked);

// billInput.addEventListener("click", function (elem) {
//   const bill = elem;
//   console.log(bill);
//   console.log("Submitted");
// });
