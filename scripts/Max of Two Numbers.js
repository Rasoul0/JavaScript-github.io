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
  if (stop == true)
  {
    document.getElementById("answer").innerHTML = "Restart ... because I said so."
  } else
  {
    document.getElementById("answer").innerHTML = "What did you say?" + solution(firstNumber, secondNumber);
  }//ENd stop=true
}//End main()
//
function testNaN (number)
{
  if ( number=="" ) //Checking for null, submit-button misfire
  //Variable returns emply string, not null
  {
    stop = true;
    return "Please type a number into the textfield"
  }//End null check
  //
  if ( isNaN(number) ) //Returns a Boolean
  {
    stop = true;
    return "Type a Real Number"
  } else
  {
    return "Good. It is a number."
  }
}//End testNaN\
