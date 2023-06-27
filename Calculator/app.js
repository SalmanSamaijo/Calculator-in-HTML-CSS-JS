

// const display = document.getElementById("display");

// const buttons = document.querySelectorAll("button");

// buttons.forEach((element) => {
//   element.onclick = () => {

//     if (element.id == "clear") {
//       display.innerText = "";
//     } else if (element.id == "backspace") {
//       let string = display.innerText;
//       display.innerText = string.substr(0, string.length - 1);
//     } else if (display.innerText !== "" && element.id == "equal") {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText === "" && element.id == "equal") {
//       display.innerText = "Empty";
//       setTimeout(() => {
//         display.innerText = "";
//       }, 2000);
//     } else {
//       display.innerText += element.id;
//     }
//   };
// });



// var equation= ""

// function calc(a){
//   console.log(a)
//   // console.log("hellow")
//   equation = equation + a
//   console.log(equation)
// }
// function sol(){

//   console.log(eval(equation))

// }

var equation = ""
var display=document.querySelector("#display")

function calc(a){
console.log(a)
equation=equation +a
display.innerHTML = equation
}

function sol(){



  display.innerText = eval(equation)
  equation=""
}

function clr()
{
  equation="0"
  display.innerHTML = equation
}

function backspace(){
console.log("jkahdjk")
  equation = equation.substr(0,equation.length - 1)
  display.innerText = equation
}


// var text = "Hello world!";
//  text = text.substr(0, text.length -1 );
//  text = text.substr(0, text.length -2 );
//  console.log(text)

// const themeTogleBtn= document.querySelector(".theme-toggler");
// const calculator = document.querySelector(".calculator")
// const toggleIcon = document.querySelector(".toggler-icon")

// let isDark= true

// themeTogleBtn.onclick = ()=>{
//     calculator.classList.toggle('dark');
//     themeTogleBtn.classList.toggle("active");
//     dark= !dark
// }