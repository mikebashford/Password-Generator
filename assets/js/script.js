// Assignment code here

//Arrays to store possible selections
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'","{", "}", "<", ";",":", "[","]",",",">","/","\\","?","~","`"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Asks for user input and returns the password generated
function generatePassword()
{
  //Grab the value of the password length the user put in
  var passwordLength = window.prompt("Please choose between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength);
  //verify input is an integer
  if(isNaN(passwordLength))
  {
    window.alert("This is not a number, please generate new password.");
    return;
  }
  //if it is, verify the length of the password is within range. Then prompt for what types will be used if it is within range.
  else
  {
    if(passwordLength >=8 && passwordLength <= 128)
    {
      var hasLower = window.confirm("Would you like to include lower case letters?");
      var hasUpper = window.confirm("Would you like to include upper case letters?");
      var hasSymbol = window.confirm("Would you like to include symbols?");
      var hasNumber = window.confirm("Would you like to include numbers?");
    }
    else{
      window.alert("The password length you submitted is invalid, please generate new password.");
      return;
    }
  }

  var verifyOneSelected = hasLower + hasUpper + hasSymbol + hasNumber;
  //Verify at least 1 type was selected
  if(verifyOneSelected >= 1)
  {
    //This holds the string for the characters the user selected
    var tempPass = "";

    //Checks if the hasLower option was selected and appends it to the tempPass if true
    if(hasLower)
    {
      for(i = 0; i < letters.length; i++)
      {
        tempPass += letters[i];
        tempPass = tempPass.toLowerCase();
      }
    }
    //Checks if the hasUpper option was selected and appends it to the tempPass if true
    if(hasUpper)
    {
      for(i = 0; i < letters.length; i++)
      {
        tempPass += letters[i];
      }
    }
    //Checks if the hasSymbol option was selected and appends it to the tempPass if true
    if(hasSymbol)
    {
      for(i = 0; i < symbols.length; i++)
      {
        tempPass += symbols[i];
      }
    }
    //Checks if the hasNumber option was selected and appends it to the tempPass if true
    if(hasNumber)
    {
      for(i = 0; i < numbers.length; i++)
      {
        tempPass += numbers[i];
      }
    }

    //Empty variable that will hold our randomly generated password
    var password = "";
  
    for(i=0; i < passwordLength; i++)
    {
      var index = (Math.floor(Math.random() * tempPass.length));
      password += tempPass[index];
    }
    //Pass the value of the password back out to the writePassword function
    return password;
  }
  //Fall out if the user did not pick any character types
  else
  {
    window.alert("You must select at least one type of character! Please generate new password.")
    return;
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
