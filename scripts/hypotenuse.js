const sides = document.querySelectorAll("#side-input");
const HypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculatesumofSquares(a,b){
    const sumofsquares= a*a + b*b;
    return sumofsquares;

}

function CalculateHypotenuse(){
   if(sides[0].value>0 && sides[1].value>0){
   const sumofsquares= calculatesumofSquares(Number((sides[0]).value), Number(sides[1].value));
   const lengthofHypotenuse = (Math.sqrt(sumofsquares)).toFixed(2);
   outputEl.innerText ="The length of hypotenuse is " + lengthofHypotenuse;
   }else{
       outputEl.innerText="Enter the valid side of the triangle"
   }

}

HypotenuseBtn.addEventListener("click",CalculateHypotenuse);
