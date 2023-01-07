"use strict";
const outputBox = document.querySelector(".output-box");

const display = document.querySelector(".operations");
const result = document.querySelector(".result");

const button = Array.from(document.querySelectorAll(".number"));

console.log(button);

button.forEach((e) => {
  e.addEventListener("click", function (item) {
    switch (item.target.innerText) {
      case "C":
        display.innerText = "";
        result.innerText = "0";
        result.style.fontSize = "35px";
        display.style.color = "#fff";
        break;
      case "=":
        display.style.color = "#adb5bd";
        display.style.fontSize = "35px";
        result.style.fontSize = "50px";
        try {
          result.innerText = eval(display.innerText);
        } catch {
          result.innerText = "Wrong Expression";
        }
        return;
      case "":
        if (display.innerText) {
          // print from 0th index to the previous of the last index
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        result.style.fontSize = "35px";
        display.style.fontSize = "50px";
        display.style.color = "#fff";

        display.innerText += item.target.innerText;
    }
  });
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  switch (e.key) {
    case "1":
      display.innerText += 1;
      break;
    case "2":
      display.innerText += 2;
      break;
    case "3":
      display.innerText += 3;
      break;
    case "4":
      display.innerText += 4;
      break;
    case "5":
      display.innerText += 5;
      break;
    case "6":
      display.innerText += 6;
      break;
    case "7":
      display.innerText += 7;
      break;
    case "8":
      display.innerText += 8;
      break;
    case "9":
      display.innerText += 9;
      break;
    case "0":
      display.innerText += 0;
      break;
    case ".":
      display.innerText += ".";
      break;
    case "+":
      display.innerText += "+";
      break;
    case "-":
      display.innerText += "-";
      break;
    case "*":
      display.innerText += "*";
      break;
    case "/":
      display.innerText += "/";
      break;
    case "Backspace":
      if (display.innerText) {
        // print from 0th index to the previous of the last index
        display.innerText = display.innerText.slice(0, -1);
      }
      break;
    case "Delete":
      display.innerText = "";
      result.innerText = "0";
      result.style.fontSize = "35px";
      display.style.color = "#fff";
      break;

    case ("=", "Enter"):
      display.style.color = "#adb5bd";
      display.style.fontSize = "35px";
      result.style.fontSize = "50px";
      try {
        result.innerText = eval(display.innerText);
      } catch {
        result.innerText = "Wrong Expression";
      }
      return;
  }
});
