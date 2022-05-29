// Decaring golbal variables

var pasLetters="abcdefghijklmnopqrstuvwxyz";
let pasUppercase = pasLetters.toUpperCase();
var pasNumbers="123456789";
var pasSymbols="!@#$%^&*()+=:;<>~`?/-_";
var basket="";
var result="";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Add internals to the function "generatePassword"
function generatePassword(){

  pasLength=prompt("Please pick a length between 8 and 128 charaters");

  if (pasLength<8 || pasLength>128){
  alert("Not allowed, please try again");
  return;
  } 

  letters=prompt("Use letters? Type 'Y'. If you do not want to use letters, type any other key", "Y");

  if  (letters.toUpperCase()==="Y") {
    basket= pasLetters;
  }
  uppercase=prompt("Use uppercase? Type 'Y'. If you do not want to use uppercase, type any other key", "Y");
  
  if  (uppercase.toUpperCase()==="Y") {
    basket= basket+pasUppercase;
  }
  numbers=prompt("Use numbers? Type 'Y'. If you do not want to use numbers, type any other key", "Y");
  
  if (numbers.toUpperCase()==="Y"){
    basket=basket+pasNumbers;
  }
  symbols=prompt("Use symbols? Type 'Y'. If you do not want to use symbols, type any other key", "Y");
  
  if (symbols.toUpperCase()==="Y"){
    basket=basket+pasSymbols;
  }
  if(basket===""){
    alert("You've gotta use something for a password!");
  }
  console.log(basket);
  console.log(pasLength);
  
  for ( var i = 0; i < pasLength; i++ ) {
    result += basket.charAt(Math.floor(Math.random() * basket.length ));
 
 }
 return result;
}

