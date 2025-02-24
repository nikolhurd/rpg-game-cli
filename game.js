import { Player } from "./entities.js";
import { promptUser } from "./userInput.js";
import { generatingEnemy, generatingItems } from "./events.js";
import { createGrid, showGrid, borderCheck, grid } from "./grid.js";

const testPlayer = new Player(20, 3, 6);
let playerY = 5; // row of starting position of player
let playerX = 0; // column of starting position of player
let goalY = 0;
let goalX = 4;

createGrid(6, 5, playerY, playerX, goalY, goalX);

const winCheck = () => {
  if (playerY === goalY && playerX === goalX) {
    console.log("🥳Congrats! You reached the end of the game!🎉");
  }
  return playerY === goalY && playerX === goalX;
};

const moveUp = () => {
  grid[playerY][playerX] = 3; // where player currently is
  playerY -= 1; // moving up the coordinates
  grid[playerY][playerX] = 1; // where player is after moving up
};

const moveDown = () => {
  grid[playerY][playerX] = 3; // where player currently is
  playerY += 1; // moving down
  grid[playerY][playerX] = 1; // where player is after moving down
};

const moveRight = () => {
  grid[playerY][playerX] = 3; // where player currently is
  playerX += 1; // moving right
  grid[playerY][playerX] = 1; // where player is after moving right
};

const moveLeft = () => {
  grid[playerY][playerX] = 3; // where player currently is
  playerX -= 1; //moving left
  grid[playerY][playerX] = 1; // where player is after moving left
};

const processMove = (direction) => {
  switch (direction) {
    case "Up":
      const newYUp = playerY - 1;
      if (borderCheck(newYUp, playerX)) {
        moveUp();
        handleAfterMove();
      } else {
        cannotMove();
      }
      break;

    case "Down":
      const newYDown = playerY + 1;
      if (borderCheck(newYDown, playerX)) {
        moveDown();
        handleAfterMove();
      } else {
        cannotMove();
      }
      break;

    case "Right":
      const newXRight = playerX + 1;
      if (borderCheck(playerY, newXRight)) {
        moveRight();
        handleAfterMove();
      } else {
        cannotMove();
      }
      break;

    case "Left":
      const newXLeft = playerX - 1;
      if (borderCheck(playerY, newXLeft)) {
        moveLeft();
        handleAfterMove();
      } else {
        cannotMove();
      }
      break;

    default:
      break;
  }
};

const handleAfterMove = () => {
  showGrid();
  let result = winCheck();
  if (result === false) {
    generatingItems(testPlayer);
    let fightResult = generatingEnemy(testPlayer);
    if (fightResult) return;
    else {
      promptUser();
    }
  }
};

const cannotMove = () => {
  console.log("Cannot move, you are at the border");
  promptUser();
};

// Start game
const startGame = () => {
  showGrid();
  promptUser();
};

startGame();

export { processMove };
