// Decaring golbal variables

var pasLetters="abcdefghijklmnopqrstuvwxyz";
let pasUppercase = pasLetters.toUpperCase();
var pasNumbers="123456789";
var pasSymbols="!@#$%^&*()+=:;<>~`?/-_";
var result="";
var basket="";

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


// Function "generatePassword"

function generatePassword(){

  //Prompt for user to select password length

  pasLength=prompt("Please pick a length between 8 and 128 charaters");

  //If inncorect length, script is ended and must be re-run
  if (pasLength<8 || pasLength>128){
  alert("Not allowed, please try again");
  return;
  }

  //Other user inputs. For each input, if the answer is "Y", the gobal variable is added to the "basket"
  if ( result/="" ){
    basket="";
    } 
    else{
  letters=prompt("Use letters? Type 'Y'. If you do not want to use letters, type any other key", "Y");
  if  (letters.toUpperCase()==="Y") {
    basket= pasLetters;
  }
  else {
    basket="";
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
}


  //For loop: characters are picked at random from the basket of options, until the result is equal to the pasLength variable
  
  for ( var i = 0; i < pasLength; i++ ) {
    result += (basket.charAt(Math.floor(Math.random() * basket.length )));
 }
//  For some reason the code is generatating a password combination that attempts to put a value in fron that is not a number.
// This section is cleared with .replace
 result = result.replace(/^NaN+/, '');

//  Ends function
return result;

}
