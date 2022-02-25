// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(
    prompt(
      "Please enter the amount of characters you would like in your password."
    )
  );
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%^&*()_+";
  var numbers = "1234567890";
  var genPassword = "";
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    var includeUppercase = Math.floor(Math.random() * uppercase.length);
    var includeSpecialChar = Math.floor(Math.random() * specialChar.length);
    var includeNumbers = Math.floor(Math.random() * numbers.length);

    genPassword +=
      letters[random] +
      uppercase[includeUppercase] +
      specialChar[includeSpecialChar] +
      numbers[includeNumbers];
    console.log(random);
  }

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
