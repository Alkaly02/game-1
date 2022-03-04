const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
let userChoice, randomNumber, randomWord;
let randomWords = ['Rock', 'Scissors', 'Paper'];

const possibleChoices = document.querySelectorAll('button');

for(let choice of possibleChoices){
	choice.addEventListener('click', (e) =>{
		userChoice = e.target;
		userChoiceContent = userChoice.innerHTML;
		// Display user choice
		userChoiceDisplay.innerHTML = userChoiceContent;

		generateComputerChoice();

		if(userChoiceContent === randomWord){
			result.innerHTML = 'Null';
			result.style.color = 'orange';
		}
		else if((userChoiceContent == 'Rock' && randomWord == 'Scissors') || (userChoiceContent == 'Scissors' && randomWord == 'Paper') || (userChoiceContent == 'Paper' && randomWord == 'Rock')){
			result.innerHTML = 'You Win';
			result.style.color = 'green';
		}
		else{
			result.innerHTML = 'You Lost';
			result.style.color = 'red';
		}
	})
}

function generateComputerChoice(){
	// Generate random number between [0-2]
	randomNumber = Math.floor(Math.random() * randomWords.length); 
	randomWord = randomWords[randomNumber];
	// Display computer choice
	computerChoiceDisplay.innerHTML = randomWord;
}

/* 
	-------------------- PROCESS ------------------

	Je n'ai pas besoin de lier un evenement pour chaque button.
	Il suffit de faire une boucle sur pour chaque click.

	A chaque click, je dois recuperer la valeur du boutton et l'afficher,
	ensuite generer un mot aleatoir pour la machine et ensuite comparer
	le choix des deux et afficher le gagnant sur result !

	---------------------------------------------------
*/