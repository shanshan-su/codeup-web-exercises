//(function (){
"use strict";

/* ########################################################################## */


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(colorName){
    if (colorName === "blue") {
        return ("Blue is the color of the sky.");
    } else if (colorName === "red") {
        return ("Strawberries are red.");
    } else if (colorName === "cyan") {
        return ("I don't know anything about cyan.");
    } else {
        return ("Can you tell me something about " + colorName + "?");
    }
}

//console.log(analyzeColor("red"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(colorName){
    switch(colorName) {
        case "blue":
            return ("Blue is the color of the sky.");
            break;
        case "red":
            return ("Strawberries are red.");
            break;
        case "cyan":
            return ("I don't know anything about cyan.");
            break;
        default:
            return ("Can you tell me something about " + colorName + "?");
            break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var color = prompt("What's your favorite color?");
alert(analyzeColor(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount){
    if (luckyNumber === 0) {
        return totalAmount;
    } else if (luckyNumber === 1) {
        return totalAmount * (1 - 0.10);
    } else if (luckyNumber === 2) {
        return totalAmount * (1- 0.25);
    } else if (luckyNumber === 3) {
        return totalAmount * (1 - 0.35);
    } else if (luckyNumber === 4) {
        return totalAmount * (1 - 0.50);
    } else {
        return 0;
    }
}

console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = Number(prompt("What's your bill total"));
alert("Your lucky number was " + luckyNumber  + ", your price before the discount was $" + totalBill + ", and your total bill after the discount is $" + calculateTotal(luckyNumber, totalBill) + ".");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var enterOrNot = confirm("Would you like to enter a number?");
if (enterOrNot === true) {
    var numberEntered = Number(prompt("Great, please enter a number."));
    if(isNaN(numberEntered) === true) {
        alert("What you entered was not a  number.");
    } else {
            var isEvenOrOdd = numberEntered % 2;
            var sum = numberEntered + 100;
            if (isEvenOrOdd === 1 || isEvenOrOdd === -1) {
                alert(numberEntered + " is an odd number.");
            } else {
                alert(numberEntered + " is an even number.");
            }
            alert(numberEntered + " plus 100 is " + sum + ".");
            if (numberEntered > 0) {
                alert(numberEntered + " is a positive number.");
            } else if (numberEntered < 0) {
                alert(numberEntered + " is a negative number.");
            }
    }
}

//})();