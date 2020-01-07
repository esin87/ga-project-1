//QUESTION/ANSWER MODAL to appear upon click event//

//PSEUDO CODE//
//When users click on prize amount question
    //display question/answer modal

// let question = document.querySelector('.prize-amount');

// question.addEventListener('click', questionModal);

// function questionModal(evt) {
//     document.querySelector('.modal-card').style.display = 'flex';
// }

//for each modal open
    //x button will close modal

//REFACTORED to event propagation//
// let question = document.querySelector('.gameboard_grid');

// question.addEventListener('click', questionModal);

// function questionModal(evt) {
//     console.log(evt);
//     evt.target.nextElementSibling.style.display = 'flex';
// }

let questionChoice = false;
let question = document.querySelectorAll('.prize-amount');
let closeModal = document.querySelectorAll('.close');

question.forEach((modal) => {
    modal.addEventListener('click', (evt) => {
        evt.target.nextElementSibling.style.display = 'flex'; 
        questionChoice = false;
    });
})

closeModal.forEach((closeButton) => {
    closeButton.addEventListener('click', (evt) => {
        console.log(evt)
        evt.target.offsetParent.style.display = 'none';
    })
});


//MULTIPLE CHOICE SELECTION//

//PSEUDO CODE//
//When user clicks on a multiple choice answer
    //If answer is correct - display you are correct message AND add amount to scoreboard
    //Else - display answer is incorrect AND deduct amount from scoreboard

let multipleChoice = document.querySelectorAll('.answer');
let scoreBoard = document.querySelector('.players_score');
let score = 0;


multipleChoice.forEach((highlightChoice) => {
    highlightChoice.addEventListener('click', (evt) => {
        if (!questionChoice) {
            questionChoice = true;
            let userAnswer = evt.target.getAttribute('data-answer');
            let correctAnswer = document.querySelector('.correct-response');
            let incorrectAnswer = document.querySelector('.incorrect-response');
            let prizeAmount = evt.target.getAttribute('data-value');
            if (userAnswer === 'true') {
                incorrectAnswer.style.display = 'none';
                correctAnswer.style.display = 'block';
                score += parseInt(prizeAmount);
                scoreBoard.innerText = `Score: $  ${score}`;
            } else {
                correctAnswer.style.display = 'none';
                incorrectAnswer.style.display = 'block';
                score -= parseInt(prizeAmount);
                scoreBoard.innerText = `Score: $  ${score}`;
            }
        } 
    })
})

