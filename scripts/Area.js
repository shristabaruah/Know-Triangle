const base = document.querySelectorAll("#input");
const button = document.querySelector("#btn");
const Output = document.querySelector("#output");



function areaofTriangle(){
    const b= Number(input[0].value);
    const h=Number(input[1].value);
    const BaseHeight = b*h/2;
    Output.innerText = "Area of a triangle is " +BaseHeight +" units";
}


button.addEventListener("click",areaofTriangle);

