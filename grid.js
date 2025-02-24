let emojiMap = {};
const emptySpaceEmoji = ["🍀", "🌳", "🌵", "🌴", "🌿"];
let grid = [];

const createGrid = (height, width, playerY, playerX, goalY, goalX) => {
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let z = 0; z < width; z++) {
      row.push(0);
    }
    grid.push(row);
  }

  grid[playerY][playerX] = 1;
  grid[goalY][goalX] = 2;

  return grid;
};

const showGrid = () => {
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    let displayRow = "";

    for (let j = 0; j < row.length; j++) {
      displayRow += getEmoji(row[j], i, j) + " ";
    }
    console.log(displayRow);
  }
};

const getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emptySpaceEmoji.length);
  return emptySpaceEmoji[randomIndex];
};
const getEmoji = (number, row, col) => {
  switch (number) {
    case 1:
      return "🧚";

    case 2:
      return "🏆";

    case 3:
      return "🌟";

    case 0:
      const key = row + "," + col;
      if (emojiMap[key]) {
        return emojiMap[key];
      } else {
        emojiMap[key] = getRandomEmoji();
        return emojiMap[key];
      }

    default:
      break;
  }
};

const borderCheck = (newY, newX) => {
  return newY >= 0 && newY < 6 && newX >= 0 && newX < 5;
};

export { createGrid, showGrid, borderCheck, grid };
