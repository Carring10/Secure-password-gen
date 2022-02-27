// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%^&*()_+";
  var numbers = "1234567890";
  var genPassword = "";

  // User input for the length of the password.
  var count = Number(
    prompt(
      "Please enter the amount of characters you would like in your password."
    )
  );

  // Entering the desired password length is a requirement.
  while (!count) {
    var count = prompt(
      "Please fill out this field with the amount of characters you would like."
    );
  }

  // What the password will consist of.
  var includeLowercase = prompt("Include lowercase letters?");
  var includeUppercase = prompt("Include uppercase letters?");
  var includeSpecialChar = prompt("Include special characters?");
  var includeNumbers = prompt("Include numbers?");

  // User cannot make an empty password, a password less than 8 characters, or a password that is longer than 128 characters.
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

  // Each string will return a random index.
  for (var i = 0; i < count; i++) {
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    var randomUppercase =
      uppercase[Math.floor(Math.random() * uppercase.length)];
    var randomSpecialChar =
      specialChar[Math.floor(Math.random() * specialChar.length)];
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    var array = [];

    // Pushes a random index from each string into the empty array.
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

    // Based off of the user's choices, the array of chosen values is then randomzied to generate a password.
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
