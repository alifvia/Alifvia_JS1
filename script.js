// if else statement
function testNum(a) {
  let result;
  if (a > 0) {
    result = "Positif";
  } else {
    result = "Negatif atau Nol";
  }
  return result;
}
document.getElementById("hasil1").innerHTML = testNum(5);

// nested if
function testAge(age) {
  let result;
  if (age < 18) {
    result = "Anda masih di bawah umur.";
  } else if (age >= 18 && age <= 60) {
    result = "Anda sudah dewasa.";
  } else {
    result = "Anda sudah tua.";
  }
  return result;
}
document.getElementById("hasil2").innerHTML = testAge(25);

// switch case
function yourStatus(status) {
  let result;
  switch (status) {
    case "menikah":
      result = "Anda sudah menikah.";
      break;
    case "single":
      result = "Anda masih single.";
      break;
    default:
      result = "Status tidak valid.";
      break;
  }
  return result;
}
document.getElementById("hasil3").innerHTML = yourStatus("menikah");

// for statement
const fruits = ["apel", "pisang", "jeruk", "mangga"];
let i = 0;
let len = fruits.length;
let hasil = "";
for (; i < len; ) {
  hasil += fruits[i] + "<br>";
  i++;
}
document.getElementById("hasil4").innerHTML = hasil;

// while
const animals = ["kucing", "anjing", "kelinci", "burung"];
let text = "";
let j = 0;
while (j < animals.length) {
  text += animals[j] + "<br>";
  j++;
}
document.getElementById("hasil5").innerHTML = text;

// do while
let numbers = "";
let k = 1;
do {
  numbers += k + k + "<br>"; // Menambahkan dua angka dan memberikan hasilnya
  k++;
} while (k <= 5);
document.getElementById("hasil6").innerHTML = numbers;


// function
function multiplyNumbers(a, b) {
  return a * b; // Mengalikan dua angka
}
document.getElementById("hasil7").innerHTML = multiplyNumbers(4, 3);

// Function untuk menghitung pangkat dua dari sebuah angka
function calculateSquare(number) {
  return number * number;
}
const numberToSquare = 5;
const squaredNumber = calculateSquare(numberToSquare);

document.getElementById("hasil9").innerHTML = "Pangkat Dua dari " + numberToSquare + " adalah " + squaredNumber;