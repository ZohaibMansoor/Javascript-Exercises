//     Chapter 9-11 = User input and conditional statement | Javascript

//    Maths expressions

//   Question 1

        function welcomeCity() {
            let city = prompt("Enter city name:");
            if (city.toLowerCase() === "karachi") {
                alert("Welcome to city of lights");
            } else {
                alert("Hello from " + city); // Optional: handle other cities
            }
        }
        // Call the function to run the program
        welcomeCity();

//   Question 2    

        function greetUser() {
            let gender = prompt("Enter your gender (male/female):");
            if (gender.toLowerCase() === "male") {
                alert("Good Morning Sir.");
            } else if (gender.toLowerCase() === "female") {
                alert("Good Morning Ma'am.");
            } else {
                alert("Invalid gender input."); // Optional: handle invalid input
            }
        }
        // Call the function to run the program
        greetUser();

//   Question 3

function getTrafficSignalMessage() {
  const signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, or Green):").toLowerCase();

  switch (signalColor) {
    case "red":
      console.log("Must Stop");
      break;
    case "yellow":
      console.log("Ready to move");
      break;
    case "green":
      console.log("Move now");
      break;
    default:
      console.log("Invalid signal color entered.");
  }
}

getTrafficSignalMessage();

//   Question 4

function checkFuelLevel() {
  const remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

  if (isNaN(remainingFuel)) {
    console.log("Invalid input. Please enter a number for fuel.");
  } else if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
  } else {
    console.log("Fuel level is sufficient.");
  }
}

checkFuelLevel();   

//   Question 5

var a = 4;
if (++a == 5) {
    alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

 var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

 if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if("car" < "cat") {
alert("car is smaller than cat");
}

//   Question 6

function calculateMarksSheet() {
    // Get input for marks in three subjects and total marks
    const subject1Marks = parseFloat(prompt("Enter marks for Subject 1:"));
    const subject2Marks = parseFloat(prompt("Enter marks for Subject 2:"));
    const subject3Marks = parseFloat(prompt("Enter marks for Subject 3:"));
    const totalMarksPossible = parseFloat(prompt("Enter total possible marks:"));

    // Check if inputs are valid numbers
    if (isNaN(subject1Marks) || isNaN(subject2Marks) || isNaN(subject3Marks) || isNaN(totalMarksPossible)) {
        alert("Please enter valid numbers for marks.");
        return;
    }

    // Calculate marks obtained
    const marksObtained = subject1Marks + subject2Marks + subject3Marks;

    // Calculate percentage
    const percentage = (marksObtained / totalMarksPossible) * 100;

    // Determine grade and remarks based on percentage
    let grade = "";
    let remarks = "";

    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }

    // Display the results
    console.log("Marks Sheet");
    console.log(`Total marks: ${totalMarksPossible}`);
    console.log(`Marks obtained: ${marksObtained}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`); // .toFixed(2) for two decimal places
    console.log(`Grade: ${grade}`);
    console.log(`Remarks: ${remarks}`);

    // You can also display this on an HTML page by manipulating the DOM
    // Example:
    // document.getElementById("totalMarks").textContent = totalMarksPossible;
    // document.getElementById("marksObtained").textContent = marksObtained;
    // document.getElementById("percentage").textContent = percentage.toFixed(2) + "%";
    // document.getElementById("grade").textContent = grade;
    // document.getElementById("remarks").textContent = remarks;
}

// Call the function to run the program
calculateMarksSheet();

//   Question 7

// Store a secret number (ranging from 1 to 10)
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
const userGuess = parseInt(prompt("Guess the secret number (1-10):"));

// Check the guess
if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) { // Added userGuess - 1 for "close enough" in either direction
  alert("Close enough to the correct answer");
} else {
  alert("Incorrect guess. Try again!");
}

//   Question 8

// Get a number from the user
const number = parseInt(prompt("Enter a number to check divisibility by 3:"));

// Check if divisible by 3
if (number % 3 === 0) {
  alert(`${number} is divisible by 3.`);
} else {
  alert(`${number} is not divisible by 3.`);
}

//   Question 9

// Get a number from the user
const num = parseInt(prompt("Enter a number to check if it's even or odd:"));

// Check if even or odd
if (num % 2 === 0) {
  alert(`${num} is an even number.`);
} else {
  alert(`${num} is an odd number.`);
}

//   Question 10

// Get temperature as input
const temperature = parseInt(prompt("Enter the current temperature:"));

// Show message based on criteria
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today's Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today's weather is so Cool.");
} else {
  alert("It's quite cold!"); // Added a default case for temperatures <= 10
}

//   Question 11

// Get inputs
const firstNumber = parseFloat(prompt("Enter the first number:"));
const secondNumber = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

// Compute based on operation
if (operation === '+') {
  result = firstNumber + secondNumber;
} else if (operation === '-') {
  result = firstNumber - secondNumber;
} else if (operation === '*') {
  result = firstNumber * secondNumber;
} else if (operation === '/') {
  if (secondNumber !== 0) { // Prevent division by zero
    result = firstNumber / secondNumber;
  } else {
    alert("Error: Division by zero is not allowed.");
    result = "Undefined";
  }
} else if (operation === '%') {
  result = firstNumber % secondNumber;
} else {
  alert("Invalid operation.");
  result = "Error";
}

// Show the result
alert(`The result is: ${result}`);