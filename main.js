"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0; //up-down
		this.positionCol = 0; //l-r
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	// Print field //
	print() {
		//clear();

		// Replace with your own code //
		//console.log(this.field); // Please REMOVE this line before you start your code!
		const printMatrix = this.field.map((d) => d.join(" ")).join("\n");
		console.log(printMatrix);
	}

	// Your Code //

	game() {
		while (true) {
		let n = prompt("Which Way ? :");
			if (n === 'r') {
				this.positionCol++;
			} else if(n === 'd'){
				this.positionRow++;
			} else if(n === 'l'){
				this.positionCol--;
			} else if(n === 'u'){
				this.positionRow--;
			}
		this.field[this.positionRow][this.positionCol] = pathCharacter;
		this.print();
		}
	}
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
newGame.game();