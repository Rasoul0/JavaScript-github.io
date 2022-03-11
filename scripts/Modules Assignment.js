console.log("You made it to the Moudules Assignment.js");

//
let stop = false;
//
function solution (number1, number2)
{
  if ( $(":even") / $(":even") ) return "  0 For even";

  return ( number1 > number2 ) ? "if Width is larger than Height = Landscape" : "Height is larger than Width = Portrait";
  //
  if ( number1 > number2 )
  {
    return "Height is larger than Width = Portrait";
  } else
  {
    return "if Width is larger than Height = Landscape";
  }

}//ENd solution
//
function main()
{
  stop = false;
  let firstNumber = document.getElementById("textField1").value;
  let secondNumber = document.getElementById("textField2").value;
  document.getElementById("CanBeAnything").innerHTML = alert ("You are connected")"Please Type a number";
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);
  if (stop == true)
  {
    document.getElementById("Even").innerHTML = "Restart ... because I said so."
  } else
  {
    document.getElementById("Even").innerHTML = "Landscape, portrait, or Square?" + solution(firstNumber, secondNumber);
  }//ENd stop=true
}//End main()
//
function testNaN (number)
{
  if ( number=="Even" ) //Checking for null, submit-button misfire
  //Variable returns emply string, not null
  {
    stop = true;
    return "Please type a number into the textfield"
  }//End null check
  //
  if ( isNaN(number) ) //Returns a Boolean
  {
    stop = true;
    return " Real Number";
  } else
  {
    return " It is a number."
  }
}//End testNaN
