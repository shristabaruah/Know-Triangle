const inputs =document.querySelectorAll("#angle-input");
const IsTrianglebtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function CalculateSumofAngles(angle1,angle2,angle3){
const sumOfAngles = angle1 + angle2 + angle3 ;
return sumOfAngles;
}

function IsTriangle(){
    const sumOfAngles = CalculateSumofAngles(Number( inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputEl.innerText="yay,The angles form a Triangle";
    }else{
        outputEl.innerText="The angles do not form a Triangle";
    }

}

IsTrianglebtn.addEventListener("click",IsTriangle);
