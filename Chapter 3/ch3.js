
//     Chapter 3 = Alerts | Javascript

//    Variables for Numbers

//   Question 1

let age = 14; 
alert("I am " + age + " years old");

//   Question 2

let visits = localStorage.getItem('visits');
if (visits === null) {
    visits = 0;
} else {
    visits = parseInt(visits); 
}

visits++;

localStorage.setItem('visits', visits);

alert("You have visited this site " + visits + " times");

//   Question 3

let birthYear = 2010;

document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear);

//   Question 4

document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");

