console.log(team);

const teamBoxes = document.querySelectorAll('.team-box');

teamBoxes.forEach((teamBox, index) => {
    // Get the current team member
    const currentTeamMember = team[index];
	
	if (currentTeamMember == null) {
  return;
}

	console.log(currentTeamMember);

    // Update the pokemon-sprite element
    const sprite = teamBox.querySelector('.pokemon-sprite img');
if(currentTeamMember && currentTeamMember.isEgg){
    // Get the egg_sprite value from the pokemon database
    const eggSprite = pokemonDatabase.find(pokemon => pokemon.name === currentTeamMember.species).egg_sprite;
    sprite.src = eggSprite;
}else{
    sprite.src = currentTeamMember.sprite;
}

    // Update the pokemon-name element
    const name = teamBox.querySelector('.pokemon-name');
    if(currentTeamMember.isEgg){
        name.innerText = "Egg"
    }else{
        name.innerText = currentTeamMember.isShiny 
  ? "Sh." + currentTeamMember.species + " " + (currentTeamMember.gender === "Male" ? "(M)" : currentTeamMember.gender === "Female" ? "(F)" : "(-)")
  : currentTeamMember.species + " " + (currentTeamMember.gender === "Male" ? "(M)" : currentTeamMember.gender === "Female" ? "(F)" : "(-)");

    }

    // Update the pokemon-level element
    const level = teamBox.querySelector('.pokemon-level');
    if(currentTeamMember.isEgg){
        for (let i = 0; i < pokemonDatabase.length; i++) {
            if (currentTeamMember.species === pokemonDatabase[i].name) {
                let eggSteps = currentTeamMember.eggSteps + "/" + pokemonDatabase[i].egg_steps;
                level.innerText = eggSteps
                break;
            }
        }
    }else{
      level.innerText = "Lvl. " + currentTeamMember.level /* + " (" + currentTeamMember.experience + " XP)"; */
    }
});

window.onload = function() {
  const hatchButtons = document.getElementsByClassName("hatching-button");
  if (!hatchButtons.length) return;

  for (let i = 0; i < hatchButtons.length; i++) {
    hatchButtons[i].addEventListener("click", function(event) {
      const index = parseInt(event.target.getAttribute("data-index"));
      hatchEgg(team, index);
    });
  }
  
  for (let i = 0; i < team.length; i++) {
    if (team[i].isEgg) {
      for (let j = 0; j < pokemonDatabase.length; j++) {
        if (team[i].species === pokemonDatabase[j].name) {
          if (team[i].eggSteps >= pokemonDatabase[j].egg_steps) {
            document.getElementsByClassName("hatching-button")[i].style.display = "block";
            document.getElementsByClassName("hatching-button")[i].setAttribute("data-index", i);
			team[i].eggSteps = pokemonDatabase[j].egg_steps;
			localStorage.setItem("team", JSON.stringify(team));
          }
          break;
        }
      }
    }
  }

  function updateUI(idx) {
    let currentPokemon = team[idx];
    document.querySelector(`.team-box:nth-child(${idx + 1}) .pokemon-name`).innerHTML = currentPokemon.species;
    let sprite = currentPokemon.isShiny ? pokemonDatabase.find(p => p.name === currentPokemon.species).shiny_sprite : pokemonDatabase.find(p => p.name === currentPokemon.species).sprite;
    document.querySelector(`.team-box:nth-child(${idx + 1}) .pokemon-sprite img`).src = sprite;
    document.querySelector(`.team-box:nth-child(${idx + 1}) .pokemon-gender`).innerHTML = currentPokemon.gender;
    document.querySelector(`.team-box:nth-child(${idx + 1}) .pokemon-level`).innerHTML = currentPokemon.level;
	document.querySelector(`.team-box:nth-child(${idx + 1}) .hatching-button`).style.display = 'none';
  }
    
    function saveTeam() {
        localStorage.setItem("team", JSON.stringify(team));
    }
    
    function hatchEgg(team, index) {
	if (!team[index]) return;
    let egg = team[index];
    egg.isEgg = false;
    egg.eggSteps = 0;
	egg.level = 1;
    egg.isShiny = Math.random() < 1/128;
    let pokemon = pokemonDatabase.find(p => p.name === egg.species);
    egg.gender = Math.random() * 100 < pokemon.gender_rate ? "Male" : "Female";
    egg.sprite = egg.isShiny ? pokemon.shiny_sprite : pokemon.sprite;
    /* egg.name = pokemon.name; */
	let eggData = JSON.parse(localStorage.getItem("eggData")) || {};
    eggData.hatches = (eggData.hatches || 0) + 1;
	if (egg.isShiny) {
    eggData.shinyHatches = (eggData.shinyHatches || 0) + 1;
	setTimeout(() => {
    window.alert("Congrats ! You hatched a Sh. " + pokemon.name + "!");}, 100);
  }
    localStorage.setItem("eggData", JSON.stringify(eggData));
    updateUI(index);
    saveTeam();
}
};


/* Evolution */ 

for (let i = 0; i < team.length; i++) {
const pokemon = team[i];
let evolvingButton = document.createElement('button');
evolvingButton.classList.add('evolving-button');
evolvingButton.style.display = 'none';
evolvingButton.setAttribute('data-index', i + 1);
evolvingButton.innerHTML = 'Evolve';
document.body.appendChild(evolvingButton);

checkEvolutionConditions(pokemon, i, inventory);
}

function checkEvolutionConditions(pokemon, index, inventory) {
let pokemonData = pokemonDatabase.find(p => p.name === pokemon.species);

if (!pokemon.isEgg && pokemonData.evolutions && pokemonData.evolutions.length) {
const evolvingButtons = document.querySelectorAll('.evolving-button');
for (let evolution of pokemonData.evolutions) {
// Check if the evolution method is level
if (evolution.method[0] === 'level') {
// Check if the level of the pokemon is equal to or greater than the value required for evolution
if (pokemon.level >= evolution.value) {
for (let j = 0; j < evolvingButtons.length; j++) {
if (evolvingButtons[j].getAttribute('data-index') === (index + 1).toString()) {
// Show the evolving button
evolvingButtons[j].style.display = 'block';
break;
}
}
}
}
// Check if the evolution method is item
if (evolution.method[0] === 'item') {
// Find the item in the inventory
let item = inventory.find(i => i.name === evolution.value);
// Check if the item exists and its amount is greater than 0
if (item && item.amount > 0) {
for (let j = 0; j < evolvingButtons.length; j++) {
if (evolvingButtons[j].getAttribute('data-index') === (index + 1).toString()) {
// Show the evolving button
evolvingButtons[j].style.display = 'block';
break;
}
}
}
}
}
}
}

const evolvingButton = document.querySelectorAll('.evolving-button');

evolvingButton.forEach(button => {
button.addEventListener('click', function() {
// Get the index of the pokemon from the data-index attribute of the button
let index = this.getAttribute('data-index') -1;
let pokemon = team[index];
let pokemonData = pokemonDatabase.find(p => p.name === pokemon.species);

// Check if the pokemon has evolutions
if (pokemonData.evolutions && pokemonData.evolutions.length) {
  for (let evolution of pokemonData.evolutions) {
    // Check if the evolution method is level
    if (evolution.method[0] === 'level') {
      // Check if the level of the pokemon is equal to or greater than the value required for evolution
      if (pokemon.level >= evolution.value) {
        // Replace the species of the pokemon with the evolved species
        team[index].species = evolution.evolves_to;
        // Update the sprite URL to the evolved species
        team[index].sprite = pokemon.isShiny ? `sprites/pokemon/shiny/${team[index].species.toLowerCase()}.png` : `sprites/pokemon/${team[index].species.toLowerCase()}.png`
        break;
      }
    }
    // Check if the evolution method is item
    if (evolution.method[0] === 'item') {
      // Find the item in the inventory
      let item = inventory.find(i => i.name === evolution.value);
      // Check if the item exists and its amount is greater than 0
      if (item && item.amount > 0) {
        // Replace the species of the pokemon with the evolved species
        team[index].species = evolution.evolves_to;
        // Update the sprite URL to the evolved species
        team[index].sprite = pokemon.isShiny ? `sprites/pokemon/shiny/${team[index].species.toLowerCase()}.png` : `sprites/pokemon/${team[index].species.toLowerCase()}.png`
        // Decrement the amount of the item used for evolution
        item.amount--;
	    localStorage.setItem("inventory", JSON.stringify(inventory));
        break;
      }
    }
  }
}

	function updateUI(idx) {
    if (!isNaN(idx)) {
        let currentPokemon = team[idx];
        let nameElement = document.querySelector(`.team-box:nth-child(${idx + 1}) .pokemon-name`);
        if (nameElement) {
            nameElement.innerHTML = currentPokemon.species;
        }
        let sprite = currentPokemon.sprite;
let spriteElement = document.querySelector(`.team-box:nth-child(${idx + 1}) .pokemon-sprite img`);
if (spriteElement) {
    spriteElement.src = sprite;
}

    }
}

    // Remove the evolving button
    this.style.display = 'none';
    // Update the UI to reflect the evolution
    updateUI(index);
	localStorage.setItem("team", JSON.stringify(team));
  });
});

// Call the checkEvolutionConditions function for each pokemon in the team array
for (let pokemon of team) {
  checkEvolutionConditions(pokemon, inventory);
}