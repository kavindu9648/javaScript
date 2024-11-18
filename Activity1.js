/*let number1;
number1 = window.prompt("Enter Your First Number");
console.log(number1);

let number2;
number2 = window.prompt("Enter Your Secone Number");
console.log(number2);*/

document.getElementById("submit").onclick = function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (num1 === 100 || num1 === 0) {
    console.log("Number 1 is 100 or 0 ");
  } else if (num2 === 100 || num2 === 0) {
    console.log("Number 2 is 100 or 0 ");
  } else if (num1 + num2 === 100) {
    const result = num1 + num2;
    console.log("Sum is:" + result);
  } else {
    console.log("Try again ");
  }
};
