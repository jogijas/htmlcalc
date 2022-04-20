var x = 0.0;
var y = 0.0;
var opration;
var display = document.getElementById("display");
function get_0(){
  display = document.getElementById("display");
  display.innerHTML+="0";
}
function get_1(){
  display = document.getElementById("display");
  display.innerHTML+="1";
}
function get_2(){
  display = document.getElementById("display");
  display.innerHTML+="2";
}
function get_3(){
  display = document.getElementById("display");
  display.innerHTML+="3";
}
function get_4(){
  display = document.getElementById("display");
  display.innerHTML+="4";
}
function get_5(){
  display = document.getElementById("display");
  display.innerHTML+="5";
  }
  function get_6(){
  display = document.getElementById("display");
  display.innerHTML+="6";
}
function get_7(){
  display = document.getElementById("display");
  display.innerHTML+="7";
}
function get_8(){
  display = document.getElementById("display");
  display.innerHTML+="8";
}
function get_9(){
  display = document.getElementById("display");
  display.innerHTML+="9";
}

function get_dec(){
  display = document.getElementById("display");
  display.innerHTML+=".";
}

function add(){
  display = document.getElementById("display");
  x = Number(display.innerHTML);
  display.innerHTML="";
  opration = "add";
  
}

function subtract(){
  display = document.getElementById("display");
  x = Number(display.innerHTML);
  display.innerHTML="";
  opration = "subtract";
  
}

function decimal(){
  display = document.getElementById("display");
  x = Number(display.innerHTML);
  display.innerHTML="";
  opration = "decimal";
  
}

function multiply(){
  display = document.getElementById("display");
  x = Number(display.innerHTML);
  display.innerHTML="";
  opration = "multiply";
  
}

function divide(){
  display = document.getElementById("display");
  x = Number(display.innerHTML);
  display.innerHTML="";
  opration = "divide";
  
}

function sqroot(){
  display = document.getElementById("display");
  x = Number(display.innerHTML);
  x = Math.sqrt(x);
  display.innerHTML=x;
  
  
}

function equals(){
  display = document.getElementById("display");
  y = Number(display.innerHTML);
  if(opration=="add")
  {x = x+y;}
  else if(opration=="subtract")
  {x = x-y;}
  else if(opration=="multiply")
  {x = x*y;}
  else if(opration=="divide")
  {x = x/y;}
  display.innerHTML=x;
  x=0;y=0;
}
function clearme(){
  display = document.getElementById("display");
  x=0;
  display.innerHTML="";
}
function square(){
  display = document.getElementById("display");
  x = Number(display.innerHTML);
  x = x*x;
  display.innerHTML = x;
}
function cube(){
  display = document.getElementById("display");
  x = Number(display.innerHTML);
  x = x*x*x;
  display.innerHTML = x;
}