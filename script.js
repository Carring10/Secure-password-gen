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

  while (!count) {
    var count = prompt(
      "Please fill out this field with the amount of characters you would like."
    );
  }

  var includeLowercase = prompt("Include lowercase letters?");
  var includeUppercase = prompt("Include uppercase letters?");
  var includeSpecialChar = prompt("Include special characters?");
  var includeNumbers = prompt("Include numbers?");

  while (
    includeLowercase !== "" &&
    includeUppercase !== "" &&
    includeSpecialChar !== "" &&
    includeNumbers !== ""
  ) {
    alert("None of the fields were filled out.");
    return "Please answer 'ok' in one of the prompts for a password.";
  }

  if (count < 8) {
    alert("Must be at least 8 characters long.");
    return;
  }

  if (count > 128) {
    alert("Must be less than 128 characters long.");
    return;
  }

  for (var i = 0; i < count; i++) {
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    var randomUppercase =
      uppercase[Math.floor(Math.random() * uppercase.length)];
    var randomSpecialChar =
      specialChar[Math.floor(Math.random() * specialChar.length)];
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    var array = [];

    if (includeLowercase || includeLowercase == "") {
      array.push(randomLetter);
    }

    if (includeUppercase || includeUppercase == "") {
      array.push(randomUppercase);
    }

    if (includeSpecialChar || includeSpecialChar == "") {
      array.push(randomSpecialChar);
    }

    if (includeNumbers || includeNumbers == "") {
      array.push(randomNumber);
    }

    var randomValue = array[Math.floor(Math.random() * array.length)];
    console.log(randomValue);

    genPassword += randomValue;
  }

  console.log(randomValue);

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
