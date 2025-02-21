class Entity {
  constructor(hp, ap, dp, sprite) {
    this.hp = hp;
    this.ap = ap;
    this.dp = dp;
    this.sprite = sprite;
  }
}

class CombatEntity extends Entity {
  // fight()
}

class Player extends CombatEntity {
  // move()
}
class Enemy extends CombatEntity {}

class Item extends Entity {
  // applyToPlayer()
}

export { Entity, Player, Enemy, Item };
