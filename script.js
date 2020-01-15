//NAV//
//When users click on nav item
//modal displays with the description

let navInfo = document.querySelectorAll('.nav-option');

navInfo.forEach(readMore => {
	readMore.addEventListener('click', evt => {
		if (evt.target.nextElementSibling.style.display === 'block') {
			evt.target.nextElementSibling.style.display = 'none';
		} else {
			evt.target.nextElementSibling.style.display = 'block';
		}
	});
});

//PLAYER NAME ENTRY//
//When user enters name in input field
//display welcome message
//pass the username entry to score board

let player = document.querySelector('input');

player.addEventListener('change', playerName);

function playerName(evt) {
	evt.target.style.display = 'none';
	let welcome = document.createElement('p');
	welcome.setAttribute('class', 'welcome');
	welcome.innerText = `Let's get started ${evt.target.value}! Choose a question below!`;
	document.querySelector('header').appendChild(welcome);
}

//QUESTION/ANSWER MODAL to appear upon click event//

//PSEUDO CODE//
//When users click on prize amount question
//display question/answer modal

//for each modal open
//x button will close modal

let questionChoice = false;
let question = document.querySelectorAll('.prize-amount');
let closeModal = document.querySelectorAll('.close');
let completes = document.getElementsByClassName('disable');

question.forEach(modal => {
	modal.addEventListener('click', evt => {
		evt.target.nextElementSibling.style.display = 'flex';
		evt.target.classList.add('disable');
		evt.target.innerText = '\u2010';
		questionChoice = false;
	});
});

closeModal.forEach(closeButton => {
	closeButton.addEventListener('click', evt => {
		evt.target.offsetParent.style.display = 'none';
		if (completes.length === 12) {
			document.querySelector('.complete-modal').style.display = 'flex';
			document
				.querySelector('.complete-close')
				.addEventListener('click', () => {
					document.querySelector('.complete-modal').style.display =
						'none';
				});
		}
	});
});

//MULTIPLE CHOICE SELECTION//

//PSEUDO CODE//
//When user clicks on a multiple choice answer
//If answer is correct - display you are correct message AND add amount to scoreboard
//Else - display answer is incorrect AND deduct amount from scoreboard

let multipleChoice = document.querySelectorAll('.answer');
let scoreBoard = document.querySelector('.players_score');
let score = 0;

multipleChoice.forEach(highlightChoice => {
	highlightChoice.addEventListener('click', evt => {
		if (!questionChoice) {
			questionChoice = true;
			let userAnswer = evt.target.getAttribute('data-answer');
			let prizeAmount = evt.target.getAttribute('data-value');
			if (userAnswer === 'true') {
				let response = document.createElement('p');
				response.innerText = '\u2714 You are correct!';
				response.style.color = 'gold';
				response.style.fontStyle = 'italic';
				evt.target.appendChild(response);
				score += parseInt(prizeAmount);
				scoreBoardColorUpdate();
				scoreBoard.innerText = `Score: $  ${score}`;
			} else {
				let response = document.createElement('p');
				response.innerText =
					'\u2717  Incorrect answer. Try next question!';
				response.style.color = 'maroon';
				response.style.fontStyle = 'italic';
				evt.target.appendChild(response);
				score -= parseInt(prizeAmount);
				scoreBoardColorUpdate();
				scoreBoard.innerText = `Score: $  ${score}`;
			}
		}
	});
});

function scoreBoardColorUpdate() {
	if (score < 0) {
		scoreBoard.style.color = 'red';
	} else {
		scoreBoard.style.color = 'blue';
	}
}
