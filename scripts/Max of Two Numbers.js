console.log("You made it to Max of Two Numbers.js");
//
let stop = false;
//
function main()
{
  let firstNumber = document.getElementById("textField1").value;
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
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
    return "Input Validated"
  }
}//End testNaN
