let xPath = `<svg viewBox="0 0 100 100">
  <path d="M10,10 L90,90 M90,10 L10,90" stroke="lightblue" stroke-width="10"></path>
</svg>`;
let circlePath = `<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="mediumspringgreen" stroke-width="10" fill="none" />
</svg>`;

function handleClick(i) {
	const field = document.getElementById(`${i}`);
	field.innerHTML = xPath;
}

let isX = true;

function handleClick(i) {
	const field = document.getElementById(`${i}`);
	if (!field.classList.contains('clicked')) {
		if (isX) {
			field.innerHTML = xPath;
		} else {
			field.innerHTML = circlePath;
		}
		isX = !isX;
		field.classList.add('clicked');
		checkForWinner();
	}
	const winner = checkForWinner();
	if (winner !== '') {
		displayWinner(winner);
	}

}


const winning = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
			[1, 5, 9],
			[3, 5, 7]
	];
	
		function reloadGame() {
			const fields = document.querySelectorAll('.game-field');
			fields.forEach(field => {
					field.innerHTML = '';
					field.classList.remove('clicked');
			});
	}


function checkForWinner() {
	for (let i = 0; i < winning.length; i++) {
		const [a, b, c] = winning[i];
		const fieldA = document.getElementById(`${a}`);
		const fieldB = document.getElementById(`${b}`);
		const fieldC = document.getElementById(`${c}`);
		if (fieldA.innerHTML !== '' && fieldA.innerHTML === fieldB.innerHTML && fieldB.innerHTML === fieldC.innerHTML) {
			return fieldA.innerHTML;
		}
	}
	return '';
}

function displayWinner(winner) {
	let message = '';
	if (winner === xPath) {
		message = 'Player 1 wins!';
	} else {
		message = 'Player 2 wins!';
	}
	alert(message);
}
