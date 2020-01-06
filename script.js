//QUESTION/ANSWER MODAL//
//PSEUDO CODE//
//When users click on prize amount question
    //display question/answer modal

let question = document.querySelector('.prize-amount');

question.addEventListener('click', questionModal);

function questionModal(evt) {
    document.querySelector('.modal-card').style.display = 'flex';
}