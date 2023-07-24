
//Calculator Result Show input Field value remove button function

function remove(){
  document.getElementById("resultShow").value = "";
  let element = document.getElementById("resultShow");
  let text = "0";
  element.setAttribute("placeholder",text);
  document.getElementById("whatIsResult").value = "";
}

//Calculator key value input field show function

function keys(keysValue){
  document.getElementById("resultShow").value += keysValue;
}

//calculator calculation function

function result(){
  var a = document.getElementById("resultShow").value;
  var b = eval(a);
  document.getElementById("resultShow").value = b

  document.getElementById("whatIsResult").value = a+" =";
}

//calculator backspace button

function backspace(){
  var screen = document.getElementById("resultShow");
  screen.value = screen.value.slice(0, -1);
}

//Light Effect In Light Icon


function lightMode(){

  //light icon selected
  let light = document.getElementById("lightMode");

  //background selected
  let background = document.getElementById("calculator");
  //keys div
  let keyDiv = document.getElementById("keyDiv");

  //light & Dark Div Selected
  let lightDarkDiv = document.getElementById("lightDirk");

  //What Is Result
  let WhatResult = document.getElementById("whatIsResult");

  //ResultInput

  let ResultInput = document.getElementById("resultShow");

  let lightGreenKey = document.querySelectorAll("#lightGreenKey")[2];

  light.style.color = "white";
  background.style.backgroundColor = "white";
  keyDiv.style.backgroundColor = "#eeeeee";
  lightDarkDiv.style.backgroundColor = "#eeeeee";
  WhatResult.style.backgroundColor = "white";
  WhatResult.style.color = "black";
  ResultInput.style.backgroundColor = "white";
  ResultInput.style.color = "black";
  lightGreenKey.style.backgroundColor = "white";

  console.log(lightGreenKey);
}