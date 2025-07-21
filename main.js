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
    this.field = this.generateHat(5, 5, this.generateField(5, 5));

    // Replace with your own code //
    // Set the home position at (0, 0) before the game starts
    this.positionRow = 0; //up-down
    this.positionCol = 0; //l-r
    this.field[this.positionRow][this.positionCol] = pathCharacter;
    this.lenRow = this.field.length;
    this.lenCol = this.field[this.positionRow].length;
  }

  generateField(row, col) {
    const array = [];
    for (let i = 0; i < col; i++) {
      const array1 = [];
      for (let j = 0; j < row; j++) {
        if (Math.random() < 0.75) {
          array1.push("░");
        } else {
          array1.push("O");
        }
      }
      array.push(array1);
    }
    return array;
  }
  generateHat(row, col, field = [[]]) {
    let rowRandom = this.getRandomInt(0, row - 1);
    let colRandom = this.getRandomInt(0, col - 1);
    field[rowRandom][colRandom] = hat;
    return field;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min); // Ensures the minimum is an integer
    max = Math.floor(max); // Ensures the maximum is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Print field //
  print() {
    clear();
    // console.log(this.field);
    // Replace with your own code //
    //console.log(this.field); // Please REMOVE this line before you start your code!
    // for (let row of this.field) {
    //   console.log(row.join());
    //    console.log("\n");
    // }
    const printMatrix = this.field.map((d) => d.join(" ")).join("\n");
    console.log(printMatrix);
  }

  // Your Code //

  game() {
    while (true) {
      let n = prompt("Which Way ? :");
      if (n === "r") {
        this.moveRight();
      } else if (n === "d") {
        this.moveDown();
      } else if (n === "l") {
        this.moveLeft();
      } else if (n === "u") {
        this.moveUp();
      } else {
        console.log("You must input l=left r=right u=up d=down ");
      }

      if (
        this.positionRow + 1 > this.lenRow ||
        this.positionCol + 1 > this.lenCol ||
        this.positionRow < 0 ||
        this.positionCol < 0
      ) {
        console.log("You went out of bounds! Game over.");
        return;
      }

      if (this.field[this.positionRow][this.positionCol] === hat) {
        console.log("You found the hat! You win!");
        return;
      } else if (this.field[this.positionRow][this.positionCol] === hole) {
        console.log("You fell into a hole! Game over.");
        return;
      } else {
        this.field[this.positionRow][this.positionCol] = pathCharacter;
        this.print();
      }
    }
  }
  moveRight() {
    this.positionCol++;
  }

  moveDown() {
    this.positionRow++;
  }

  moveLeft() {
    this.positionCol--;
  }

  moveUp() {
    this.positionRow--;
  }
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
// const newGame = new Field([
//   ["░", "░", "░", "░"],
//   ["░", "O", "░", "░"],
//   ["░", "^", "░", "░"],
//   ["░", "░", "░", "░"],
// ]);
// newGame.print();
// newGame.game();
//console.log(newGame.generateField(5, 5));
const newGame = new Field();
newGame.print();
newGame.game();
//console.log(newGame.generateHat(5, 5, newGame.generateField(5, 5)));
