console.log("You made it to the Max of Two Numbers.js!");
//
//Global Variables
let stop = false;
//
function main()
{
  let firstNumber = document.getElementById("textField1").value;
  let secondNumber = document.getElementById("textField2").value;
  //document.getElementById("CanBeAnything").innerHTML = alert ("You are connected");
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);
}//End main()
//
function testNaN (number)
{
  if ( isNaN(number) ) //Returns a Boolean
  {
    stop = true;
    return "Type a Real Number"
  } else
  {
    return "Good. It is a number."
  }
}//End testNaN
