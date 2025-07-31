//     Chapter 5 = Maths expressions| Javascript

//    Maths expressions

//   Question 1

//   Question 2

// Define two numbers
let num1 = 10;
let num2 = 5;

// Addition
let sum = num1 + num2;
document.getElementById('additionResult').innerText = `Sum of ${num1} and ${num2} is ${sum}`;

// Subtraction
let difference = num1 - num2;
document.getElementById('subtractionResult').innerText = `Difference of ${num1} and ${num2} is ${difference}`;

// Multiplication
let product = num1 * num2;
document.getElementById('multiplicationResult').innerText = `Product of ${num1} and ${num2} is ${product}`;

// Division
let quotient = num1 / num2;
document.getElementById('divisionResult').innerText = `Quotient of ${num1} and ${num2} is ${quotient}`;

// Modulus
let remainder = num1 % num2;
document.getElementById('modulusResult').innerText = `Modulus of ${num1} and ${num2} is ${remainder}`;

//   Question 3

    let x;

        document.write("<h1>Value after variable declaration is: " + x + "</h1>"); // Output: Value after variable declaration is: undefined

            x = 5;

                document.write("<p>Initial value: " + x + "</p>"); // Output: Initial value: 5

                    x++; // x becomes 6

                        document.write("<p>Value after increment is: " + x + "</p>"); // Output: Value after increment is: 6

                            x += 7; // x becomes 13

                                document.write("<p>Value after addition is: " + x + "</p>"); // Output: Value after addition is: 13

                                    x--; // x becomes 12

                                        document.write("<p>Value after decrement is: " + x + "</p>"); // Output: Value after decrement is: 12

                                            let  = x % 3; // remainder = 12 % 3 = 0

                                                document.write("<p>The remainder is: " + remainder + "</p>"); // Output: The remainder is:

//   Question 4

// Store ticket price in a variable
const ticketPrice = 500; // PKR

// Calculate the cost of buying 5 tickets
const numberOfTickets = 5;
const totalCost = ticketPrice * numberOfTickets;

// Display the result
document.write(`<h1>Total Cost; </h1>`);
document.write(`<p>Total cost to buy ${numberOfTickets} tickets to a movie is ${totalCost}PKR</p>`);

//   Question 5

// Function to generate and display a multiplication table
function displayMultiplicationTable(number) {
    let output = `<h1>Multiplication table of ${number}:\n</h1>`;
    for (let i = 1; i <= 10; i++) {
        output += `${number} x ${i} = ${number * i}\n`;
    }
    // Display the output in the browser (e.g., using document.write or by updating an HTML element)
    document.write(`<pre>${output}</pre>`); // Using <pre> for preformatted text to maintain line breaks
}

// Example usage: Display the multiplication table of 4
displayMultiplicationTable(4);

//   Question 6

document.write("<h1>Temperature Converter:" + "</h1>")
// a. Store a Celsius temperature into a variable.
let celsiusTemp = 25; // Example Celsius temperature

// b. Convert it to Fahrenheit & output "NNOC is NNoF".
let fahrenheitFromCelsius = (celsiusTemp * 9 / 5) + 32;
document.write(`<p>${celsiusTemp}°C is ${fahrenheitFromCelsius}°F.</p>`);

// c. Now store a Fahrenheit temperature into a variable.
let fahrenheitTemp = 70; // Example Fahrenheit temperature

// d. Convert it to Celsius & output "NNoF is NN.C".
let celsiusFromFahrenheit = (fahrenheitTemp - 32) * 5 / 9;
document.write(`<p>${fahrenheitTemp}°F is ${celsiusFromFahrenheit}°C.</p>`); 

//   Question 7

// Store the following in variables
const priceItem1 = 650;
const quantityItem1 = 3;
const priceItem2 = 100;
const quantityItem2 = 7;
const shippingCharges = 110;

// Compute the total cost
const costItem1 = priceItem1 * quantityItem1;
const costItem2 = priceItem2 * quantityItem2;
const totalcost = costItem1 + costItem2 + shippingCharges;

// Show the receipt in your browser
document.write("<h1>Shopping Cart</h1>");
document.write("<p>Price of item 1 is " + priceItem1 + "</p>");
document.write("<p>Quantity of item 1 is " + quantityItem1 + "</p>");
document.write("<p>Price of item 2 is " + priceItem2 + "</p>");
document.write("<p>Quantity of item 2 is " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges " + shippingCharges + "</p>");
document.write("<p>Total cost of your order is " + totalCost + "</p>");

//   Question 8

// Store total marks and marks obtained in variables
let totalMarks = 980;
let marksObtained = 804;

// Compute the percentage
let percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");

//   Question 9

// Assume we have 10 US dollars & 25 Saudi Riyals.
// Exchange rates: 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee

// Perform all calculations in a single expression to convert total currency to Pakistani Rupees
let totalCurrencyInPKR = (10 * 104.80) + (25 * 28);

document.write("<h1> Currency in PKR:</h1>");
document.write("Total Currency in PKR:", totalCurrencyInPKR); // Output: Total Currency in PKR: 1748

//   Question 10

let number = 20; // Example initial number
let result = (number + 5) * 10 / 2;
document.write("<h1> Arithmetic </h1>"); 
document.write(result); // Output: 125

//   Question 11

let currentYear = 2016; // As per the example in the image
let birthYear = 1992; // As per the example in the image

let age1 = currentYear - birthYear;
let age2 = (currentYear - birthYear) - 1; // Considering if the birthday hasn't passed yet

document.write (`<h1> Age Calculator </h1>`); 
document.write (`<p> Current Year = 2016</p>`); 
document.write (`<p> Birth Year = 1992</p>`); 
document.write (`<p>Your age is = ${age1} or ${age2} </p>`); 

//   Question 12

        // a. Store a radius into a variable.
        const radius = 20; // You can change this value

        // b. Calculate the circumference based on the radius, and output "The circumference is NN".
        // (Hint: Circumference of a circle = 2 * π * r, π ≈ 3.142)
        const pi = 3.142;
        const circumference = 2 * pi * radius;

        // Calculate the area based on the radius, and output "The area is NN".
        // (Hint: Area of a circle = π * r², π ≈ 3.142)
        const area = pi * radius * radius; // or pi * Math.pow(radius, 2);

        // Display the results on the browser
        document.write(`<h1> The Geometrizer </h1>`);
        document.write(`<p> Radius of a circle: ${radius}</p>`);
        document.write(`<p> The circumference is: ${circumference}</p>`);
        document.write(`<p> The area is: ${area}</p>`);

//   Question 13

// The Lifetime Supply Calculator

// a. Store your favorite snack into a variable
const favoriteSnack = "chocolate chip";

// b. Store your current age into a variable.
const currentAge = 15;

// c. Store a maximum age into a variable.
const maximumAge = 65;

// d. Store an estimated amount per day (as a number).
const snacksPerDay = 3;

// e. Calculate how many would you eat total for the rest of your life.
const yearsRemaining = maximumAge - currentAge;
const daysRemaining = yearsRemaining * 365; // Assuming 365 days per year for simplicity
const totalSnacksNeeded = daysRemaining * snacksPerDay;

// Output the result to the screen
document.write ("<h1> The Lifetime Supply Calculator </h1>" );
document.write ("<p> Favorite Snack = Chocolate Chip </p> ");
document.write ("<p> Current Age = 15 </p> ");
document.write ("<p> Maximum Age = 65 </p> ");
document.write ("<p> Snacks Per Day = 3 </p> ");
document.write (`You will need ${totalSnacksNeeded} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}.`);
