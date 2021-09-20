const inputs =document.querySelectorAll("#angle-input");
const IsTrianglebtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");



function IsTriangle(){
    let a = inputs[0].value;
    let b = inputs[1].value;
    let c = inputs[2].value;

    
    if (  (a > 0)  && (b > 0) && (c > 0)) {

    const sumOfAngles = Number( inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value);
    if(sumOfAngles === 180){
        outputEl.innerText="yay,The angles form a Triangle";
    }else{
        outputEl.innerText="The angles do not form a Triangle";
    }

    }else{

    outputEl.innerText="please enter valid input";
    }
}

IsTrianglebtn.addEventListener("click",IsTriangle);
