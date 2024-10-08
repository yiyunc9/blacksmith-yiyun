// Variables
let gold = 10;   // Starting gold
let ore = 0;     // Amount of ore in inventory
let wood = 0;    // Amount of wood in inventory
let swords = 0;  // Number of swords made
let axes = 0;    // Number of axes made
let fireStatus = false;  // Whether the fire is burning or not



// Functions

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 * To stop a fire:
 *    The fire must be going
 */
function fire() {
  if (fireStatus === false && wood > 0) {
      fireStatus = true;
      wood--;
      return 'The fire is going.';
  } else if (fireStatus === true) {
      fireStatus = false;
      return 'The fire is out.';
  } else {
      return 'You do not have enough wood. Buy wood using the buy("wood") command.';
  }
}

/**
 * buy
 */
function buy(item) {
  if (fireStatus === true) {
      return 'You cannot buy items while the fire is burning.';
  }

  if (item === 'ore' && gold >= 3) {
      ore++;
      gold -= 3;
      return 'You bought 1 ore.';
  } else if (item === 'wood' && gold >= 1) {
      wood++;
      gold--;
      return 'You bought 1 wood.';
  } else if (item === 'ore' && gold < 3) {
      return 'You do not have enough gold to buy ore.';
  } else if (item === 'wood' && gold < 1) {
      return 'You do not have enough gold to buy wood.';
  } else {
      return 'Invalid item. You can only buy "ore" or "wood".';
  }
}


/**
 * make
 */
function make(item) {
  if (fireStatus === false) {
      return 'You need to start the fire to make weapons.';
  }

  if (item === 'sword' && ore >= 2 && wood >= 1) {
      swords++;
      ore -= 2;
      wood--;
      return 'You made 1 sword.';
  } else if (item === 'axe' && ore >= 1 && wood >= 2) {
      axes++;
      ore--;
      wood -= 2;
      return 'You made 1 axe.';
  } else if (item === 'sword' && (ore < 2 || wood < 1)) {
      return 'You do not have enough materials to make a sword.';
  } else if (item === 'axe' && (ore < 1 || wood < 2)) {
      return 'You do not have enough materials to make an axe.';
  } else {
      return 'Invalid item. You can only make "sword" or "axe".';
  }
}


/**
 * sell
 */
function sell(item) {
  if (fireStatus === true) {
      return 'You cannot sell items while the fire is burning.';
  }

  if (item === 'sword' && swords > 0) {
      swords--;
      gold += 5;
      return 'You sold 1 sword.';
  } else if (item === 'axe' && axes > 0) {
      axes--;
      gold += 4;
      return 'You sold 1 axe.';
  } else if (item === 'sword' && swords === 0) {
      return 'You do not have any swords to sell.';
  } else if (item === 'axe' && axes === 0) {
      return 'You do not have any axes to sell.';
  } else {
      return 'Invalid item. You can only sell "sword" or "axe".';
  }
}


/**
 * inventory
 * Shows the players current inventory
 */
function inventory() {
  return `Current Inventory:
  Gold: ${gold},
  Ore: ${ore},
  Wood: ${wood},
  Swords: ${swords},
  Axes: ${axes}`;
}


/**
 * Help Command
 * Returns the instruction on how to play the game.
 */
function help () {
  return `INSTRUCTIONS:
  Blacksmith is a simple text base game. 
  
  As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:
  - buy(item)
  - make(item)
  - sell(item)
  - fire()
  - inventory()
  - help()`
}
 
// Log the help() function
console.log(help())
