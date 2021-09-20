const quizForm =document.querySelector('.quiz-form');
const SubmitButton = document.querySelector('#submit-ans-btn');
const OutputEl = document.querySelector('#output');

const CorrectAnswers = ["90","Equilateral", "one right angle","12, 16, 20",  "100°","30°"];
function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if( value === CorrectAnswers[index]){
            score= score + 1;
        }
        index = index + 1;
    }
   OutputEl.innerText= "Your score is: " + score;
}
SubmitButton.addEventListener("click",calculateScore);
