// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcCriteriaChar = "abcdefghijklmnopqrstuvwxyz";
var ucCriteriaChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharChar = "0123456789";
var specCharChar = "!@#$%^&*()";





// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
 

}

function generatePassword() {
    pwLength = Number(prompt("How long of a password do you need? Enter a number between 8 and 128."));
    
    while (pwLength < 8 || pwLength > 128){
        var pwLength = prompt("Invalid number. How many characters would you like in your password? Must enter between 8 and 128.")
      }
    
    lcCriteria = confirm("Do you want to include lowercase letters?");
    if (lcCriteria == true) {
        lcCriteria = lcCriteriaChar;
    } else {
        lcCriteria = "";
    }
    ucCriteria = confirm("Do you want to include uppercase letters?");
    if (ucCriteria == true) {
        ucCriteria = ucCriteriaChar;
    } else {
        ucCriteria = "";
    }
    numChar = confirm("Do you want to include numbers?");
    if (numChar == true) {
        numChar = numCharChar;
    } else {
        numChar = "";
    }
    specChar = confirm("Do you want to include special characters?");
    if (specChar == true) {
        specChar = specCharChar;
    } else {
        specChar = "";
    }
    
    var allChar = [lcCriteria, ucCriteria, numChar, specChar];

    for (let i = 0; i < pwLength; i++) {
        passwordText = allChar[Math.floor(Math.random() * pwLength)];
        
    }
    
    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

