class Entity {
  constructor(hp, ap, dp, sprite) {
    this.hp = hp;
    this.ap = ap;
    this.dp = dp;
    this.sprite = sprite;
  }
}

class CombatEntity extends Entity {
  constructor(hp, ap, dp) {
    super(hp, ap, dp);
  }

  fight(oponent) {
    while (oponent.hp > 0 && this.hp > 0) {
      let damageToOponent = this.ap - oponent.dp;
      let damageToThis = oponent.ap - this.dp;
      if (damageToOponent < 1) {
        damageToOponent = 1;
      }
      if (damageToThis < 1) {
        damageToThis = 1;
      }
      oponent.hp -= damageToOponent;
      this.hp -= damageToThis;
    }
    return this.hp > 0;
  }
}

class Player extends CombatEntity {
  constructor(hp, ap, dp) {
    super(hp, ap, dp);
  }
  fight(oponent) {
    const won = super.fight(oponent);
    if (won) {
      console.log("You defeated the Evil Wizard!");
    } else {
      console.log("Game Over - You were defeated!");
    }
    return won;
  }
}
class Enemy extends CombatEntity {
  constructor(hp, ap, dp) {
    super(hp, ap, dp);
  }
}

class Item extends Entity {
  constructor(hp, ap, dp) {
    super(hp, ap, dp);
  }
  applyToPlayer(player) {
    player.hp += this.hp;
    player.ap += this.ap;
    player.dp += this.dp;
  }
}

export { Entity, Player, Enemy, Item };
