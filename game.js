import { Entity, Player, Enemy, Item } from "./entities.js";
const testPlayer = new Player(20, 3, 6);

// function createGrid(height, width) - array
let grid = [];
let playerY = 5; // row of starting position of player
let playerX = 0; // column of starting position of player
let goalY = 0;
let goalX = 4;

for (let i = 0; i < 6; i++) {
  let row = [];

  for (let z = 0; z < 5; z++) {
    row.push(0);
  }
  grid.push(row);
}

grid[playerY][playerX] = 1;
grid[goalY][goalX] = 2;

const showGrid = () => {
  grid.forEach((row) => {
    console.log(row);
  });
};

const borderCheck = (newY, newX) => {
  return newY >= 0 && newY < 6 && newX >= 0 && newX < 5;
};

// movement on map - where is Player on the map(coordinates) where Player already been(variable visited)

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
      } else {
        cannotMove();
      }
      break;

    case "Down":
      const newYDown = playerY + 1;
      if (borderCheck(newYDown, playerX)) {
        moveDown();
      } else {
        cannotMove();
      }
      break;

    case "Right":
      const newXRight = playerX + 1;
      if (borderCheck(playerY, newXRight)) {
        moveRight();
      } else {
        cannotMove();
      }
      break;

    case "Left":
      const newXLeft = playerX - 1;
      if (borderCheck(playerY, newXLeft)) {
        moveLeft();
      } else {
        cannotMove();
      }
      break;

    default:
      break;
  }
};

const randomPrecentGenerator = () => {
  return Math.random() * 100;
};

const randomStatGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
};

const createItem = () => {
  const itemHP = randomStatGenerator(10, 20);
  const itemAP = randomStatGenerator(1, 5);
  const itemDP = randomStatGenerator(1, 5);

  return new Item(itemHP, itemAP, itemDP);
};
const showPlayerStats = () => {
  console.log(
    `Stats of Player: HP: ${testPlayer.hp} AP: ${testPlayer.ap} DP: ${testPlayer.dp}`
  );
};

const handleAfterMove = () => {
  if (randomPrecentGenerator() < 30) {
    const item = createItem();
    console.log("🪄 You found a Magic Wand✨");

    console.log(
      `Stats of Magic Wand: HP: ${item.hp} AP: ${item.ap} DP: ${item.dp}`
    );
    console.log("______________________________");
    item.applyToPlayer(testPlayer);
    showPlayerStats();
  } else {
    console.log("Item not found");
  }
};

const cannotMove = () => {
  console.log("Cannot move, you are at the border");
};

export { processMove };
