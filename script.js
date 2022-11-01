//Parent Class 

const playerName = prompt("Enter name");
  alert("Welcome," + playerName);

 function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
 }
  
class Fighter{
  constructor(name){
  this.name = name;
  this.healthPoints = 15;
  }
  attack(targetObj){
    let attackPoints = randomNum(1,6);
    targetObj.healthPoints = targetObj.healthPoints - attackPoints;
    return `${this.name} attacked ${targetObj.name}! ${this.name} did ${attackPoints} damage. ${targetObj.name} has ${targetObj.healthPoints} health points left.`
  }
}

class monster extends Fighter{
  constructor(name,superPowers){      
    super(name);              
    this.superPowers = superPowers;
  }
}

let Vampire = new monster ("Vampire", "sinking its fangs into their neck");
console.log(Vampire);

class hero extends Fighter{
  constructor(name, weapon){
    super(name);
    this.weapon = weapon
  }
}

let monsterHunter = new hero ("Monster Hunter", "drenching vampire with garlic");
console.log(monsterHunter);


function playRound(hero, monster) {
  let zeroOrOne = randomNum(0,2);

  if (!zeroOrOne){
    let attackMessage = hero.attack(monster);
    alert(attackMessage);

    if (monster.healthPoints > 0){
      let attackMessage = monster.attack(hero);
      alert(attackMessage);
    }
  }
    else {
      let attackMessage = monster.attack(hero);
      alert(attackMessage)
      if (hero.healthPoints > 0){
        hero.attack(monster);
      }
    }
  }
function playGame(hero, monster){
alert(`Just in time fellow ${hero.name}! There are monsters on the loose. You are fighting ${monster.name}! Your health is at ${hero.healthPoints}, ${monster.name}'s health is at ${monster.healthPoints} at the moment. Let the hunt commence!`);


let roundNumber = 0

while(hero.healthPoints > 0 && monster.healthPoints > 0){
  roundNumber++
 //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
alert(`It is round ${roundNumber}.The current health points for ${hero.name} is ${hero.healthPoints} and for ${monster.name} its ${monster.healthPoints}.`)
 //call playRound inside the while loop
  playRound(hero, monster);
}
//outside of while loop, declare a winner and use alert to show a win or lose message 

if (hero.healthPoints > 0 && monster.healthPoints <= 0){
 alert(`${hero.name} wins, ${monster.name} loses. They destroyed the monster by ${hero.weapon}.`);
} else if(monster.healthPoints > 0 && hero.healthPoints <= 0){
 alert(`${hero.name} loses, ${monster.name} wins. They defeated the hero by ${monster.superPowers}.`);
} else {
 alert(`Seems like ${hero.name} and ${monster.name} have both lucked out!`)
}
}

//call playGame to start game
playGame(monsterHunter, Vampire)
