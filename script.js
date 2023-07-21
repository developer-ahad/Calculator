
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