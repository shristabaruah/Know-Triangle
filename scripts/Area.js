const input = document.querySelectorAll("#input");
const button = document.querySelector("#btn");
const Output = document.querySelector("#output");



function areaofTriangle(){
    const b= Number(input[0].value);
    const h=Number(input[1].value);
    if(b>0 &&  h>0){
    const BaseHeight = b*h/2;
    Output.innerText = "Area of a triangle is " +BaseHeight +" units";
}else{
    Output.innerText="Please enter valid input";
}
}


button.addEventListener("click",areaofTriangle);

