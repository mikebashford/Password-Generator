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
  var passwordLength = window.prompt("Please choose between 8 and 128 characters.");
  if(isNaN(passwordLength))
  {
    console.log("This is not a number");
    promptUser();
  }
  else
  {
    passwordLength = parseInt(passwordLength);
  }

  var hasLower = window.confirm("Would you like to include lower case letters?");
  var hasUpper = window.confirm("Would you like to include upper case letters?");
  var hasSymbol = window.confirm("Would you like to include symbols?");
  var hasNumber = window.confirm("Would you like to include numbers?");

  var tempPass = "";

  if(hasLower)
  {
    for(i = 0; i < letters.length; i++)
    {
      tempPass += letters[i];
      tempPass = tempPass.toLowerCase();
    }
  }

  if(hasUpper)
  {
    for(i = 0; i < letters.length; i++)
    {
      tempPass += letters[i];
    }
  }

  if(hasSymbol)
  {
    for(i = 0; i < symbols.length; i++)
    {
      tempPass += symbols[i];
    }
  }

  if(hasNumber)
  {
    for(i = 0; i < numbers.length; i++)
    {
      tempPass += numbers[i];
    }
  }

  var password = "";

  for(i=0; i < passwordLength; i++)
  {
    var index = (Math.floor(Math.random() * tempPass.length));
    password += tempPass[index];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
