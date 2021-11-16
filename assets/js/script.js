// Assignment code here

//Arrays to store possible selections
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'","{", "}", "<", ";",":", "[","]",",",">","/","\\","?","~","`"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword()
{
  promptUser();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
