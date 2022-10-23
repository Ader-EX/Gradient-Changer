let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let css = document.querySelector("h3");
let body = document.querySelector("body");



color1.addEventListener('input',function(){
  colorPicker();
  addText();
});


color2.addEventListener('input',function(){
  colorPicker();
  addText();
});


function colorPicker(){
  body.style.background = "linear-gradient(to right ," + color1.value + ", " + color2.value + ")";
}

function addText(){
  css.innerText = "linear-gradient(to right ," + color1.value + ", " + color2.value + ")";
}