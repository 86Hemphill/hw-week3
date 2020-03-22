// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcCriteriaChar = "abcdefghijklmnopqrstuvwxyz";
var ucCriteriaChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCriChar = "0123456789";
var specCriChar = "!@#$%^&*()";



function generatePassword() {
    var pwLength = Number(prompt("How long of a password do you need? Enter a number between 8 and 128."));
    
    while (pwLength < 8 || pwLength > 128){
        pwLength = prompt("Invalid number. How many characters would you like in your password? Must enter between 8 and 128.")
      }
    var allChar = []
    var lcCriteria = confirm("Do you want to include lowercase letters?");
    if (lcCriteria == true) {
        allChar = allChar.concat(lcCriteriaChar.split(''));
    // } else {
    //     lcCriteria = "";
    }
    var ucCriteria = confirm("Do you want to include uppercase letters?");
    if (ucCriteria == true) {
        allChar = allChar.concat(ucCriteriaChar.split(''));
    // } else {
    //     ucCriteria = "";
    }
    var numCriteria = confirm("Do you want to include numbers?");
    if (numCriteria == true) {
        allChar = allChar.concat(numCriChar.split(''));
    // } else {
    //     numChar = "";
    }
    var specCriteria = confirm("Do you want to include special characters?");
    if (specCriteria == true) {
        allChar = allChar.concat(specCriChar.split(''));

    // } else {
    //     specChar = "";
    } 
    // Prompt if no characters are selected
    if (lcCriteria && ucCriteria && numCriteria && specCriteria == false) {
        password = "";
        
    }
    // var allChar = [lcCriteria, ucCriteria, numChar, specChar];
    var password = ""
    
    for (var i = 0; i < pwLength; i++) {
        password += allChar[Math.floor(Math.random() * Math.floor(allChar.length))];
        
    }
    
    return password

}

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
  
    passwordText.value = password;
   
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

