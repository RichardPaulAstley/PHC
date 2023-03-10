function renderEgg() {
  const eggsContainer = document.querySelector('.eggs-container');
  const eggSlot = document.getElementById('egg-0');
  const eggAmount = daycare.eggsAvailable.amount;
  const eggContent = eggSlot.querySelector('.egg-content');
  let eggText = document.querySelector('.egg-text');

  if (!eggText) {
    eggText = document.createElement('div');
    eggText.classList.add('egg-text');
    eggsContainer.appendChild(eggText);
  }

  if (eggAmount > 0) {
    const eggSprite = pokemonDatabase.find(p => p.name === daycare.eggsAvailable.species).egg_sprite;
    eggContent.innerHTML = `<img src="${eggSprite}" class="egg-sprite" alt="Egg Sprite">`;
    eggText.innerHTML = `${eggAmount} egg(s) are waiting for you`;
  } else {
    eggContent.innerHTML = `<img src="sprites/none.png" class="egg-sprite" alt="Egg Sprite">`;
    eggText.innerHTML = `No egg available`;
  }
}


function checkCompatibility(parent0, parent1) {
  let eggParent = parent1.gender === "Female" ? parent1 : parent0.species !== "Ditto" ? parent0 : parent1;
  let eggBaseSpecies = pokemonDatabase.find(p => p.name === eggParent.species).base_species;
  let eggRarity = pokemonDatabase.find(p => p.name === eggBaseSpecies).rarity;
  let clickThreshold;

  if (eggRarity === "common") {
    clickThreshold = 100;
  } else if (eggRarity === "uncommon") {
    clickThreshold = 150;
  } else if (eggRarity === "rare") {
    clickThreshold = 250;
  } else if (eggRarity === "novelty") {
    clickThreshold = 1000;
  }

  let parent0Groups = pokemonDatabase.find(p => p.name === parent0.species).egg_group;
  let parent1Groups = pokemonDatabase.find(p => p.name === parent1.species).egg_group;

  if ((parent0.species === "Ditto" && pokemonDatabase.find(p => p.name === parent1.species).egg_group.indexOf("Undiscovered") === -1) ||
    (parent1.species === "Ditto" && pokemonDatabase.find(p => p.name === parent0.species).egg_group.indexOf("Undiscovered") === -1)) {
    daycare.eggsAvailable.species = eggBaseSpecies;
    daycare.eggsAvailable.clicsBeforeNextEgg = clickThreshold;
    return true;
  } else if (
    parent0.gender === "Male" &&
    parent1.gender === "Female"
  ) {
    if (
      parent0Groups.includes("Undiscovered") ||
      parent1Groups.includes("Undiscovered")
    ) {
      return false;
    } else {
      for (let group of parent0Groups) {
        if (parent1Groups.includes(group)) {
          daycare.eggsAvailable.species = eggBaseSpecies;
          daycare.eggsAvailable.clicsBeforeNextEgg = clickThreshold;
          return true;
        }
      }
      return false;
    }
  } else if (
    parent0.gender === "Female" &&
    parent1.gender === "Male" 
  ) {
    if (
      parent0Groups.includes("Undiscovered") ||
      parent1Groups.includes("Undiscovered")
    ) {
      return false;
    } else {
      for (let group of parent0Groups) {
        if (parent1Groups.includes(group)) {
          daycare.eggsAvailable.species = eggBaseSpecies;
          daycare.eggsAvailable.clicsBeforeNextEgg = clickThreshold;
          return true;
        }
      }
      return false;
    }
  } else {
    return false;
  }
}

const daycareTeam = document.querySelectorAll(".team-slot");

for (let i = 0; i < team.length; i++) {
  const pokemon = team[i];
  const daycareTeamBox = daycareTeam[i];
  const pcTeamSprite = daycareTeamBox.querySelector(".team-sprite");
  pcTeamSprite.src = pokemon.sprite;
}

function renderTeam() {
  // Get the container for the team
  const teamContainer = document.querySelector('.daycare-team-container');
  // Clear the current content of the container
  teamContainer.innerHTML = '';
  // Loop through each pokemon in the team
  for (let i = 0; i < team.length; i++) {
    // Create a new div for each pokemon
    const teamBox = document.createElement('div');
    teamBox.classList.add('team-slot');
    // Create an image element for the pokemon sprite
    const sprite = document.createElement('img');
    sprite.src = team[i].sprite;
    sprite.classList.add('team-sprite');
    sprite.alt = `Pokemon Sprite for ${team[i].species}`;
    // Add the sprite to the team box
    teamBox.appendChild(sprite);
    // Add the team box to the container
    teamContainer.appendChild(teamBox);
  }
}

function renderParents() {
  const parent0El = document.getElementById("parent-0");
  const parent1El = document.getElementById("parent-1");
  const parentTextEl = document.querySelector('.parent-text');

  if (daycare.parent0 && daycare.parent0.sprite) {
    parent0El.innerHTML = `<img src="${daycare.parent0.sprite}" class="parent-sprite" alt="Pokemon Sprite">`;
  } else {
    parent0El.innerHTML = `<img src="sprites/none.png" class="parent-sprite" alt="Pokemon Sprite">`;
  }

  if (daycare.parent1 && daycare.parent1.sprite) {
    parent1El.innerHTML = `<img src="${daycare.parent1.sprite}" class="parent-sprite" alt="Pokemon Sprite">`;
  } else {
    parent1El.innerHTML = `<img src="sprites/none.png" class="parent-sprite" alt="Pokemon Sprite">`;
  }
  
  if (daycare.isCompatible) {
    parentTextEl.textContent = "The two Pokémon are compatible";
  } else {
    parentTextEl.textContent = "The two Pokémon aren't compatible";
  }
}


const daycareTeamBoxes = document.querySelectorAll(".daycare-team-container .team-slot");

for (let i = 0; i < daycareTeamBoxes.length; i++) {
  daycareTeamBoxes[i].addEventListener('click', () => {
    if (daycare.parent0 && daycare.parent1) {
      alert('No more free space in the daycare.');
      return;
    }

    const clickedBox = daycareTeamBoxes[i];
    const pokemonIndex = Number(clickedBox.id.split('-')[1]);
    const pokemon = team[pokemonIndex];

    // Check if the pokemon is hatched
    if (pokemon.isEgg) {
      alert('You cannot add an egg to the daycare.');
      return;
    }

    if (!daycare.parent0) {
      daycare.parent0 = pokemon;
    } else if (!daycare.parent1) {
      daycare.parent1 = pokemon;
    }

    // Check for compatibility
    if (daycare.parent0 && daycare.parent1) {
      daycare.isCompatible = checkCompatibility(daycare.parent0, daycare.parent1);
    }

    // Remove the pokemon from the team array
    if (daycare.parent0 || daycare.parent1) {
      team.splice(pokemonIndex, 1);
    }

    // Save the updated team and daycare arrays to localStorage
    localStorage.setItem("team", JSON.stringify(team));
    localStorage.setItem("daycare", JSON.stringify(daycare));
    location.reload();
  });
}

const parent0El = document.getElementById("parent-0");
const parent1El = document.getElementById("parent-1");

parent0El.addEventListener('click', () => {
  if (team.length < 6 && daycare.parent0) {
    // Add the Pokemon back to the team array
    team.push(daycare.parent0);

    // Remove the Pokemon from the daycare array
    daycare.parent0 = null;
	daycare.isCompatible = false;
	daycare.eggsAvailable.species = null;
	daycare.eggsAvailable.amount = 0;

    // Save the updated team and daycare arrays to localStorage
    localStorage.setItem("team", JSON.stringify(team));
    localStorage.setItem("daycare", JSON.stringify(daycare));
    location.reload();
  }
});

parent1El.addEventListener('click', () => {
  if (team.length < 6 && daycare.parent1) {
    // Add the Pokemon back to the team array
    team.push(daycare.parent1);

    // Remove the Pokemon from the daycare array
    daycare.parent1 = null;
	daycare.isCompatible = false;
	daycare.eggsAvailable.species = null;
	daycare.eggsAvailable.amount = 0;

    // Save the updated team and daycare arrays to localStorage
    localStorage.setItem("team", JSON.stringify(team));
    localStorage.setItem("daycare", JSON.stringify(daycare));
	location.reload();
  }
});
  
document.addEventListener('DOMContentLoaded', function() {

  const eggSprite = document.querySelector('.egg-sprite');

eggSprite.addEventListener('click', function() {
  if (daycare.eggsAvailable.amount > 0) {
    // find the corresponding pokemon in the database
    const pokemon = pokemonDatabase.find(p => p.name === daycare.eggsAvailable.species);

    // check if there is space in the team array
    if (team.length < 6) {
      // generate the egg
      const egg = {
        species: pokemon.name,
        eggSteps: 0,
        level: 0,
        experience: 0,
        gender: "none",
        isEgg: true,
        isShiny: false,
        sprite: pokemon.egg_sprite
      };

      // add egg to the team and update local storage
      team.push(egg);
      localStorage.setItem('team', JSON.stringify(team));

      // decrease eggAvailable amount in daycare
      daycare.eggsAvailable.amount--;
      localStorage.setItem('daycare', JSON.stringify(daycare));
	  location.reload();
    } else {
      alert("Your team is full, you need to make space before picking up an egg.");
    }
  } else {
    alert("There are no eggs available at the daycare.");
  }
});
});

renderParents();
renderEgg();