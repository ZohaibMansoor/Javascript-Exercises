//     Chapter 6-9 = Alerts|Javascript

//    Maths expressions

//   Question 1

//   Question 2

//   Question 3

// Get the user's name using a prompt
let userName = prompt("Please enter your name:");

// Check if a name was entered and greet the user
if (userName) {
  alert("Hello, " + userName + "!");
} else {
  alert("No name entered. Hello there!");
}

//   Question 4

//   Question 5

// Get a number from the user
let inputNumber = prompt("Enter a number to display its multiplication table:");

let numberToMultiply;

// Check if a number was entered; otherwise, default to 5
if (inputNumber && !isNaN(inputNumber)) {
  numberToMultiply = parseInt(inputNumber);
} else {
  numberToMultiply = 5; // Default value
}

// Generate and display the multiplication table
let tableOutput = "Multiplication Table of " + numberToMultiply + ":\n";
for (let i = 1; i <= 10; i++) {
  tableOutput += numberToMultiply + " x " + i + " = " + (numberToMultiply * i) + "\n";
}

// Display the multiplication table in the browser (e.g., in an alert or on the page)
alert(tableOutput);

// Alternatively, to display on the browser page:
// document.write("<pre>" + tableOutput + "</pre>");

//   Question 6