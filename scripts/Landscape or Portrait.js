console.log("You made it to the Landscape or Portrait.js");

//
//Global Variables
let stop = false;
//
function solution (number1, number2)
{
  if ( number1 == number2 ) return "  Square";
  // Ternary Operator Example (single comparison), needs single line IF to limit choices
  return ( number1 > number2 ) ? "Number 1 is larger" : "Number 2 is larger";
  //Odd Ternary, first option is usually true
  //
   //Repeats the Ternary Operator
  if ( number1 > number2 )
  {
    return "Number 2 is larger";
  } else
  {
    return "Number 1 is larger";
  }

}//ENd solution
//
function main()
{
  stop = false; //for Screen Refresh
  let width = document.getElementById("widthNumber").value;
  let height = document.getElementById("heightNumber").value;
  //document.getElementById("CanBeAnything").innerHTML = alert ("You are connected");
  document.getElementById("widthNumber").innerHTML = testNaN (width);
  document.getElementById("heightNumber").innerHTML = testNaN (height);
  if (stop == true)
  {
    document.getElementById("geo").innerHTML = "Restart ... because I said so."
  } else
  {
    document.getElementById("geo").innerHTML = "What did you say?  " + solution(width, height);
  }//ENd stop=true
}//End main()
//
function testNaN (number)
{
  if ( number=="geo" ) //Checking for null, submit-button misfire
  //Variable returns emply string, not null
  {
    stop = true;
    return "Please type a number into the textfield"
  }//End null check
  //
  if ( isNaN(number) ) //Returns a Boolean
  {
    stop = true;
    return "Type a Number only";
  } else
  {
    return " It is a number. You got it."
  }
}//End testNaN
