console.log("You made it to the Max of Two Numbers.js");

let stop = false; //Boolean for testNaN() validation function, see end of file

function javascript () { //Where colsole.log tested file goes

}
//Main Function, necessary lines of code
function main() {
  let firstNumber, secondNumber; //Variables particular to JavsScript Assignment
  //Get the value of the Heighth Input Field, id="testfield1", assign it to a variable
  firstNumber = document.getElementById("textField1").value;
  secondNumber = document.getElementById("textField2").value;
  //Validate by alert or HTML Text in p-tag
  document.getElementById("validityTest1").innerHTML = alert (testNAN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNAN (firstNumber);
  document.getElementById("validityTest2").innerHTML = alert (testNAN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNAN (secondNumber);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Restart because I said so." //Change to more appropriate message
    } else {
      //Difference between calling functions with arguements and sending to parameter's, local variables
      console.log("What did you say?", javaScriptFunction-Solution (firstNumber, secondNumber)); // Change to more appropriate message
      document.getElementById("answer").innerHTML = "What did you say? " + geometry (firstNumber, secondNumber);
    }
} //End main()
//
function testNaN (number) {
  if ( isNaN (number) ) { //NaN are not values o REAL Number System
    stop = true;
    return "Type a Real Number"
  } else {
    return "Input Validated"
  }

}//End testNaN()
