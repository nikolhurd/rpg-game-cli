// main class Entity with hp, ap, dp, sprite

// CombatEntity extends Entity
// fight()

// Player extends CombatEntity
// move()

// Enemy extends CombatEntity

// Item extends Entity
// applyToPlayer()

// function createGrid(height, width) - array
let array = [];

for (let i = 0; i < 6; i++) {
  let row = [];

  for (let z = 0; z < 5; z++) {
    row.push(0);
  }
  array.push(row);
}

array.forEach((row) => {
  console.log(row);
});

// movement on map - where is Player on the map(coordinates), where are the borders, where Player already been(variable visited)
// start - left bottom
// end - right up
// inquirer for the users input
