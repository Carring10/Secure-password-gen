// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%^&*()_+";
  var numbers = "1234567890";
  var genPassword = "";

  var count = Number(
    prompt(
      "Please enter the amount of characters you would like in your password."
    )
  );

  if (count < 8) {
    alert("Must be at least 8 characters long.");
    return;
  }

  if (count > 128) {
    alert("Must be less than 128 characters long.");
    return;
  }

  var includeUppercase = prompt("Include uppercase letters?");
  console.log(Boolean(includeUppercase));

  for (var i = 0; i < count; i++) {
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    var randomUppercase =
      uppercase[Math.floor(Math.random() * uppercase.length)];
    var array = [randomLetter, randomUppercase];
    var randomValue = array[Math.floor(Math.random() * array.length)];
    console.log(randomValue);
    if (includeUppercase) {
      genPassword += randomValue;
    }
  }

  var includeSpecialChar = prompt("Include special characters?");

  /* for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    var randomUppercase = Math.floor(Math.random() * uppercase.length);
    var randomSpecialChar = Math.floor(Math.random() * specialChar.length);
    var randomNumbers = Math.floor(Math.random() * numbers.length); 

    genPassword += letters[random]; 
  }*/

  console.log(genPassword);

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
