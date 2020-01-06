//QUESTION/ANSWER MODAL to appear upon click event//

//PSEUDO CODE//
//When users click on prize amount question
    //display question/answer modal

// let question = document.querySelector('.prize-amount');

// question.addEventListener('click', questionModal);

// function questionModal(evt) {
//     document.querySelector('.modal-card').style.display = 'flex';
// }


//REFACTORED to event propagation//
// let question = document.querySelector('.gameboard_grid');

// question.addEventListener('click', questionModal);

// function questionModal(evt) {
//     console.log(evt);
//     evt.target.nextElementSibling.style.display = 'flex';
// }


let question = document.querySelectorAll('.prize-amount');

question.forEach((modal) => {
    modal.addEventListener('click', (evt) => {
        evt.target.nextElementSibling.style.display = 'flex'; 
    });
})



//MULTIPLE CHOICE SELECTION//

//PSEUDO CODE//
//When use mouse over multiple choice answers
    //Highlight answer selection

let multipleChoice = document.querySelectorAll('.answer');

multipleChoice.forEach((highlightChoice) => {
    highlightChoice.addEventListener('click', (evt) => {
        let userAnswer = evt.target.getAttribute('data-answer');
        let correctAnswer = document.querySelector('.correct-response');
        let incorrectAnswer = document.querySelector('.incorrect-response')
        if (userAnswer === 'true') {
            incorrectAnswer.style.display = 'none';
            correctAnswer.style.display = 'block';
        } else {
            correctAnswer.style.display = 'none';
            incorrectAnswer.style.display = 'block';
        }
    })
})