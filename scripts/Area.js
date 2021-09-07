const base = document.querySelector("#base");
const height =document.querySelector("#height");
const button = document.querySelector("#btn");
const Output = document.querySelector("#output");



function areaofTriangle(){
    const BaseHeight = (Number(base.value)*Number(height.value))/2
    Output.innerText = `Area of a triangle is ${BaseHeight} units`
}


button.addEventListener("click",areaofTriangle);

