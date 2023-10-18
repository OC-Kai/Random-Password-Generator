// Assignment Code

//set password as blank array
var password = [];

//create empty string for final password
var finalPassword = "";

function generatePassword() {

  //Gather password criteria from user

  window.alert("Welcome to the random password generator!");


  var passwordLength = Number(window.prompt("How long would you like your password to be?"));

  //checks to ensure min and max length of password

  if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please ensure the password is at least 8 and no greater than 128 characters.");
      generatePassword();
  }

  //asks user which types and how many of each character they would like

  var lowerLetters = Number( window.prompt("Please enter how many lower case letters you would like in your password."));

  var upperLetters = Number(window.prompt("Please enter how many upper case letters you would like in your password."));

  var numbers = Number(window.prompt("Please enter how many numbers you would like in your password."));

  var symbols = Number(window.prompt("Please enter how many special characters you would like in your password."));


  //functions to generate random lower and upper case letters, numbers, and symbols

  function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function randomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 16) + 32);
  }


  //calls functions for amount user requested each type of character

  for (i = 0; i < lowerLetters; i++) {
    var char = randomLower();
    password.push(char);
  }

  for (i = 0; i < upperLetters; i++) {
    var char = randomUpper();
    password.push(char);
  }

  for (i = 0; i < numbers; i++) {
    var char = randomNumber();
    password.push(char);
  }

  for (i = 0; i < symbols; i++) {
    var char = randomSymbol();
    password.push(char);
  }

  //shuffles characters in password using Fisher-Yates algorithm

  for (i = 0; i < password.length; i++) {
    var shuffle = Math.floor(Math.random() * password.length);
    var temp = password[i];
    password[i] = password[shuffle];
    password[shuffle] = temp;
  
  }

  for (i = 0; i < password.length; i++) {
    finalPassword += password[i];
  } 

  window.alert("Your password is: " + finalPassword);
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());

