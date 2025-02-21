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
      console.log("Oponent HP:", oponent.hp, "This HP:", this.hp);
      let damageToThis = oponent.ap - this.dp;

      oponent.hp -= damageToOponent;
      this.hp -= damageToThis;
    }
    console.log("Oponent health", oponent.hp);
    console.log("This health", this.hp);
  }
}

class Player extends CombatEntity {
  constructor(hp, ap, dp) {
    super(hp, ap, dp);
    // move()
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
    console.log("Before applying item:");
    console.log("Player stats:", player.hp, player.ap, player.dp);
    console.log("Item stats:", this.hp, this.ap, this.dp);

    player.hp += this.hp;
    player.ap += this.ap;
    player.dp += this.dp;

    console.log("After applying item:");
    console.log("Player stats:", player.hp, player.ap, player.dp);
  }
}

export { Entity, Player, Enemy, Item };
