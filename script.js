// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcCriteriaChar = "abcdefghijklmnopqrstuvwxyz";
var ucCriteriaChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharChar = "0123456789";
var specCharChar = "!@#$%^&*()";
var passwordText = "";
var password = "";


function generatePassword() {
    var pwLength = Number(prompt("How long of a password do you need? Enter a number between 8 and 128."));
    
    while (pwLength < 8 || pwLength > 128){
        pwLength = prompt("Invalid number. How many characters would you like in your password? Must enter between 8 and 128.")
      }
    allChar = []
    var lcCriteria = confirm("Do you want to include lowercase letters?");
    if (lcCriteria == true) {
        allChar.push(lcCriteriaChar.split(''));
    // } else {
    //     lcCriteria = "";
    }
    var ucCriteria = confirm("Do you want to include uppercase letters?");
    if (ucCriteria == true) {
        allChar.push(ucCriteriaChar.split(''));
    // } else {
    //     ucCriteria = "";
    }
    var numChar = confirm("Do you want to include numbers?");
    if (numChar == true) {
        allChar.push(numCharChar.split(''));
    // } else {
    //     numChar = "";
    }
    var specChar = confirm("Do you want to include special characters?");
    if (specChar == true) {
        allChar.push(specCharChar.split(''));

    // } else {
    //     specChar = "";
    }
    
    // var allChar = [lcCriteria, ucCriteria, numChar, specChar];

    for (var i = 0; i < pwLength; i++) {
        passwordText.value = allChar[Math.floor(Math.random()) * [Math.floor(allChar.length)]];
        
    }
    
    return allChar;

}

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
  
    passwordText.value = password;
   
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

