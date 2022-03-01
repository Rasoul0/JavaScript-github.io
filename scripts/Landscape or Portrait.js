console.log("You made it to the Landscape or Portrait.js");

let stop = false;
//
function javascript(){
}
//
function main()
{
  document.getElementById("validityTest1").innerHTML = alert(testNaN(firstNumber));
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  document.getElementById("validityTest2").innerHTML = alert(testNaN(secondNumber));
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);
  if (stop == true)
  {
    document.getElementById("answer").innerHTML = "Please restart."
  } else
  {
    document.getElementById("answer").innerHTML = "What did you say?  " + solution(firstNumber, secondNumber);
  }//ENd stop=true
}//End main()
//
function testNaN (number)
{
  if ( number=="" ) 
  {
    stop = true;
    return "Please type a number into the textfield"
  }//End null check
  //
  if ( isNaN(number) ) //Returns a Boolean
  {
    stop = true;
    return "Please Type a Real Number";
  } else
  {
    return "You did it!."
  }
}//End testNaN
