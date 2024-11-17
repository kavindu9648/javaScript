//create add button
document.getElementById("add").onclick = function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;
  console.log(result);
};
//create sub button
document.getElementById("sub").onclick = function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (num1 > num2) {
    const result = num1 - num2;
    console.log(result);
  } else {
    const result = num2 - num1;
    console.log(result);
  }
};
//create mul button
document.getElementById("mul").onclick = function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 * num2;
  console.log(result);
};

//create div button
document.getElementById("div").onclick = function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (num1 > num2) {
    const result = num1 / num2;
    console.log(result);
  } else {
    const result = num2 / num1;
    console.log(result);
  }
};
