function renderEgg() {
  const eggsContainer = document.querySelector('.eggs-container');
  const eggSlot = document.getElementById('egg-0');
  const eggsAvailable = daycare.eggsAvailable;
  if (eggsAvailable.species) {
    const eggSprite = pokemonDatabase.find(p => p.name === eggsAvailable.species).egg_sprite;
    eggSlot.innerHTML = `<img src="${eggSprite}" class="egg-sprite" alt="Egg Sprite">`;
    eggsContainer.querySelector('p').textContent = `0 egg waiting for you`;
  } else {
    eggSlot.innerHTML = `<img src="sprites/none.png" class="egg-sprite" alt="Egg Sprite">`;
    eggsContainer.querySelector('p').textContent = `0 egg(s) waiting for you`;
  }
}

function checkCompatibility(parent0, parent1) {
  let eggParent = parent1.gender === "Female" ? parent1 : parent0.species !== "Ditto" ? parent0 : parent1;
  let eggBaseSpecies = pokemonDatabase.find(p => p.name === eggParent.species).base_species;

  let parent0Groups = pokemonDatabase.find(p => p.name === parent0.species).egg_group;
  let parent1Groups = pokemonDatabase.find(p => p.name === parent1.species).egg_group;
  
  if ((parent0.species === "Ditto" && pokemonDatabase.find(p => p.name === parent1.species).egg_group.indexOf("Undiscovered") === -1) ||
    (parent1.species === "Ditto" && pokemonDatabase.find(p => p.name === parent0.species).egg_group.indexOf("Undiscovered") === -1)) {
	daycare.eggsAvailable.species = eggBaseSpecies;
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
  
  console.log(daycare);
}


const daycareTeamBoxes = document.querySelectorAll(".daycare-team-container .team-slot");

for (let i = 0; i < daycareTeamBoxes.length; i++) {
  daycareTeamBoxes[i].addEventListener('dblclick', () => {
    const clickedBox = daycareTeamBoxes[i];
    const pokemonIndex = Number(clickedBox.id.split('-')[1]);
    const pokemon = team[pokemonIndex];

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

parent0El.addEventListener('dblclick', () => {
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

parent1El.addEventListener('dblclick', () => {
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

renderParents();
renderEgg();