import { Enemy, Item } from "./entities.js";

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

const createEnemy = () => {
  const enemyHP = randomStatGenerator(10, 20);
  const enemyAP = randomStatGenerator(1, 5);
  const enemyDP = randomStatGenerator(1, 5);

  return new Enemy(enemyHP, enemyAP, enemyDP);
};
const showPlayerStats = (player) => {
  console.log(
    `Stats of Player: HP: ${player.hp} AP: ${player.ap} DP: ${player.dp}`
  );
};

const generatingItems = (player) => {
  if (randomPrecentGenerator() < 30) {
    const item = createItem();
    console.log("🪄 You found a Magic Wand✨");
    console.log(
      `Stats of Magic Wand: HP: ${item.hp} AP: ${item.ap} DP: ${item.dp}`
    );
    console.log("______________________________");
    item.applyToPlayer(player);
    showPlayerStats(player);
  } else {
    console.log("Item not found");
  }
};

const generatingEnemy = (player) => {
  if (randomPrecentGenerator() < 20) {
    const enemy = createEnemy();
    console.log("🧙You encountered an Evil Wizard✨");
    console.log(
      `Stats of Evil Wizard: HP: ${enemy.hp} AP: ${enemy.ap} DP: ${enemy.dp}`
    );
    let fightResult = player.fight(enemy);
    console.log("______________________________");
    showPlayerStats(player);
    if (!fightResult) return true;
  } else {
    console.log("No enemy");
  }
};

export { generatingEnemy, generatingItems, showPlayerStats };
