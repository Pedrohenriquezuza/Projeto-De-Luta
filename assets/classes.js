// Knight 
// Sorcerer
class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;
    constructor(name) {
      this.name = name;
    }
  
    get life() {
      return this._life;
    }
  
    set life(newlife) {
      this._life = newlife < 0 ? 0 : newlife;
    }
  }
  
  class Knight extends Character {
    constructor(name) {
      super(name);
      this.life = 100;
      this.attack = 10;
      this.defense = 8;
      this.maxLife = this.life;
    }
  }
  
  class Sorcerer extends Character {
    constructor(name) {
      super(name);
      this.life = 80;
      this.maxLife = this.life;
      this.attack = 15;
      this.defense = 3;
    }
  }
  

  class LittleMonster extends Character {
    constructor(){
      super('Little Monster')
      this.life = 40;
      this.attack = 4;
      this.defense = 4;
      this.maxLife = this.life
    }
  }

  class BigMonster extends Character{
    constructor(){
      super('Big Monster')
      this.life = 120;
      this.attack = 16;
      this.defense = 6
      this.maxLife = this.life
    }
  }

  class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
      this.fighter1 = fighter1;
      this.fighter2 = fighter2;
      this.fighter1El = fighter1El;
      this.fighter2El = fighter2El;
    }
  
    start() {
      this.update();

      //TODO: Evento do botão de atacar.
    }
  
    update() {
      // Fighter 1
      this.fighter1El.querySelector(".name").innerHTML = this.fighter1.name;
  
      // Fighter 2
      this.fighter2El.querySelector(".name").innerHTML = this.fighter2.name;
    }
  }