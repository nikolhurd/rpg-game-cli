// main class Entity with hp, ap, dp, sprite

// CombatEntity extends Entity
// fight()

// Player extends CombatEntity
// move()

// Enemy extends CombatEntity

// Item extends Entity
// applyToPlayer()

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

showGrid();

// movement on map - where is Player on the map(coordinates), where are the borders, where Player already been(variable visited)

const moveUp = () => {
  playerY -= 1;
  console.log(playerY);
};

moveUp();
// inquirer for the users input
