console.log("You made it to the Landscape or Portrait.js");

let stop = false; //Boolean for testNaN() validation function, see end of file

function javascript () { //Where colsole.log tested file goes

}
//Main Function, necessary lines of code
function main() {

  document.getElementById(validityTest1).innerHTML = alert("Welcome");

    let firstNumber, secondNumber; //Variables particular to JavsScript Assignment
    //Get the value of the Heighth Input Field, id="testfield1", assign it to a variable
    firstNumber = document.getElementById("widthNumber").value;
    secondNumber = document.getElementById("heightNumber").value;
    //Validate by alert or HTML Text in p-tag
    document.getElementById("widthNumber").innerHTML = alert (testNAN (firstNumber) );
    document.getElementById("widthNumber").innerHTML = testNAN (firstNumber);
    document.getElementById("heightNumber").innerHTML = alert (testNAN (secondNumber) );
    document.getElementById("heightNumber").innerHTML = testNAN (secondNumber);
    if (stop == true) {
        document.getElementById("geo").innerHTML = "Please try again." //Change to more appropriate message
      } else {
        //Difference between calling functions with arguements and sending to parameter's, local variables
        console.log("What did you say?", javaScriptFunction-Solution (firstNumber, secondNumber)); // Change to more appropriate message
        document.getElementById("geo").innerHTML = "Can you repeat that again please? " + geometry (firstNumber, secondNumber);


} //End main()
//
function testNaN (number) {
  if ( isNaN (number) ) { //NaN are not values o REAL Number System
    stop = true;
    return "Please Type a Real Number"
  } else {
    return "Input Validated"
  }

}//End testNaN()
