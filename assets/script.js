// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options

function getPasswordOptions() {

  var characters = parseFloat(document.querySelector("#characters").value)
  var checkboxIds = ["#lowercase", "#uppercase", "#numeric", "#specialCharacters"]

  var selectedCharacterTypes = []

  checkboxIds.forEach((id) => {
    if (document.querySelector(id).checked) {
      selectedCharacterTypes.push(document.querySelector(id).value)
    }
  }) 

  if (selectedCharacterTypes.length === 0) {
    alert ("You must select at least 1 character type")
  } else if (!characters) {
    alert ("Please enter how many characters")
  } else if (characters < 8 || characters > 128) {
    alert ("Please enter a number between 8 and 128")
  } else {
    return {
      characters: characters,
      selectedCharacterTypes: selectedCharacterTypes
    }
  }
}

// Divide the number of characters by number of selected character types
// get that amount from each array to create a new array 
// randomise character types

// Function to generate password with user input

function generatePassword() {
  var passwordOptions = getPasswordOptions()
  var passwordLength = passwordOptions.characters
  var password = ""
  var allChars = ""

  if (passwordOptions.selectedCharacterTypes.includes('numeric')){
    password += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    allChars += numericCharacters.join('');
  } 
  if (passwordOptions.selectedCharacterTypes.includes('lowercase')) {
    password += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
    allChars += lowerCasedCharacters.join('');
  } 
  if (passwordOptions.selectedCharacterTypes.includes('uppercase')) {
    password += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
    allChars += upperCasedCharacters.join('');
  } 
  if (passwordOptions.selectedCharacterTypes.includes('specialCharacters')) {
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    allChars += specialCharacters.join('');
  }


  while (passwordLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }  
  return password

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);