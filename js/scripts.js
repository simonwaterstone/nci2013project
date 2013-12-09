function whiteBlack()
{
	document.getElementById("changebg").style.backgroundColor="#ffffff";
	document.getElementById("changebg").style.color="#000000";
}
function blackWhite()
{
	document.getElementById("changebg").style.backgroundColor="#000000";
	document.getElementById("changebg").style.color="#ffffff";
}
function changeFooter()
{
	document.getElementById("changeMe").setAttribute("style","opacity:0.5;");
}
function timeAnswer()
{
var x="";
var time=new Date().getHours();
if (time<12)
  {
  x="Good morning, have you had breakfast yet?";
  }
else if (time<18)
  {
  x="Good afternoon. How about this weather?";
  }
else
  {
  x="Good evening. Almost time for bed...";
  }
alert(x);
}
function sphereVolume()
{
var radius=document.getElementById("radiusInput").value;
var radius1=parseInt(radius);
var volume="";
  if(isNaN(radius1))
  {
  alert("That is not a number. Please try again");
  return false
  }
 else if(radius1 == 0)
 {
 alert("Zero is not a valid number for this calculation. Please try again");
 return false;
 }
 else
 {
 volume= radius*radius*radius*(4.0/3.0)*Math.PI;
 }
 if(isNaN(volume))
 {
	alert("That is not a number. Please try again");
	return false;
 }
 else
 {
 alert ("The volume of a sphere with radius " + radius1 + " is " + volume + ".");
 }
}
    



