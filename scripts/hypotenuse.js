const sides = document.querySelectorAll("#side-input");
const HypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculatesumofSquares(a,b){
    const sumofsquares= a*a + b*b;
    return sumofsquares;

}

function CalculateHypotenuse(){
   
   const sumofsquares= calculatesumofSquares(Number((sides[0]).value), Number(sides[1].value));
   const lengthofHypotenuse = Math.sqrt(sumofsquares);
   outputEl.innerText ="The length of hypotenuse " + lengthofHypotenuse;

}

HypotenuseBtn.addEventListener("click",CalculateHypotenuse);
