const pcTeamBoxes = document.querySelectorAll(".pc-team-box");

for (let i = 0; i < team.length; i++) {
  const pokemon = team[i];
  const pcTeamBox = pcTeamBoxes[i];
  const pcTeamSprite = pcTeamBox.querySelector(".pc-team-sprite");
  pcTeamSprite.src = pokemon.sprite;
}

function renderTeam() {
  // Get the container for the team
  const teamContainer = document.querySelector('.pc-team-container');

  // Clear the current content of the container
  teamContainer.innerHTML = '';

  // Loop through each pokemon in the team
  for (let i = 0; i < team.length; i++) {
    // Create a new div for each pokemon
    const teamBox = document.createElement('div');
    teamBox.classList.add('pc-team-box');

    // Create an image element for the pokemon sprite
    const sprite = document.createElement('img');
    sprite.src = team[i].sprite;
    sprite.classList.add('pc-team-sprite');
    sprite.alt = `Pokemon Sprite for ${team[i].species}`;

    // Add the sprite to the team box
    teamBox.appendChild(sprite);

    // Add the team box to the container
    teamContainer.appendChild(teamBox);
  }
}

const pokemonBoxes = document.querySelectorAll(".pc-team-box");
  pokemonBoxes.forEach((pokemonBox, index) => {
  pokemonBox.addEventListener("click", (event) => {
  if (event.shiftKey || (event.type === "touchstart" && event.type === "touchend")) {
  if (event.ctrlKey && event.shiftKey) {
	const confirmRelease = window.confirm(`Are you sure you want to release all non-egg Pokemon from your team?`);
	if (confirmRelease) {
	  team = team.filter((pokemon) => pokemon.isEgg);
	  team.forEach((pokemon, i) => {
	  pokemon.id = i + 1;
	});
	renderTeam();
	localStorage.setItem("team", JSON.stringify(team));
	location.reload();
}
	} else {
	  if (team[index].isEgg) {
	  window.alert("You can't release eggs");
	  return;
}
  const confirmRelease = window.confirm(`Are you sure you want to release ${team[index].species}?`);
	if (confirmRelease) {
	team.splice(index, 1);
	team.forEach((pokemon, i) => {
	pokemon.id = i + 1;
});
	renderTeam();
	localStorage.setItem("team", JSON.stringify(team));
	location.reload();
	 }
	}
  }
});
});

/* PC Système */

const pcContainer = document.querySelector(".pc-team-container");
const storageContainer = document.querySelector(".pc-storage-container");

let numExtensions = 0;
inventory.forEach((item) => {
  if (item.name === "PC Extension") {
    numExtensions += item.amount;
  }
});

const totalBoxes = 10 + numExtensions;
const boxCapacity = 30;
const totalSlots = totalBoxes * boxCapacity;

let nwBox = 0;
for (let i = 0; i < totalSlots; i++) {
  if (i % boxCapacity === 0) {
    nwBox++;

    const newBox = document.createElement("div");
    newBox.classList.add("pc-box");

    const newBoxHeader = document.createElement("h2");
    newBoxHeader.textContent = "Box " + nwBox;
    newBox.appendChild(newBoxHeader);

    storageContainer.appendChild(newBox);
  }

  const newSlot = document.createElement("div");
  newSlot.classList.add("pc-storage-box");
  newSlot.id = `slot-${i}`;

 const newSprite = document.createElement("img");
newSprite.src = "sprites/none.png";
newSprite.alt = "Pokemon sprite";
newSprite.classList.add("pc-storage-sprite");

// Add click event to the sprite
newSprite.addEventListener("click", function () {
  selectPokemon(`slot-${i}`);
});

newSlot.appendChild(newSprite);
  
  newSprite.addEventListener("click", function() {
  selectPokemon(this.parentElement.id);
});


  const lastBox = storageContainer.lastChild;
  lastBox.appendChild(newSlot);
}



// Function to add a Pokemon to storage
function addPokemonToStorage(pokemon) {
  // Find the first empty slot in storage
  let emptySlot = null;
  for (let i = 0; i < storage.length; i++) {
    if (!storage[i]) {
      emptySlot = i;
      break;
    }
  }

  // If all slots are filled, add a new slot to the end of the array
  if (emptySlot === null) {
    emptySlot = storage.length;
    storage.push(null);
  }

  // Add the Pokemon to the empty slot
  storage[emptySlot] = pokemon;

  // Update the corresponding slot in the UI to show the Pokemon sprite
  const sprite = document.querySelector(`#slot-${emptySlot} .pc-storage-sprite`);
  sprite.src = `sprites/${pokemon.sprite}`;

  // Give the Pokemon an id
  pokemon.id = `pokemon-${emptySlot}`;
}

let selectedPokemon = null;

// Function to select a Pokemon
function selectPokemon(id) {
  // If a Pokemon is already selected, move it to the clicked slot
  if (selectedPokemon) {
    movePokemon(selectedPokemon.id, id);
    selectedPokemon = null;
    return;
  }

  // Find the selected Pokemon in the team or storage
  let selectedPokemonData = null;
  for (let i = 0; i < team.length; i++) {
    if (team[i].id === id) {
      selectedPokemonData = team[i];
      break;
    }
  }

  // If the Pokemon is not in the team, look in storage
  if (!selectedPokemonData) {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].id === id) {
        selectedPokemonData = storage[i];
        break;
      }
    }
  }

  // If a Pokemon was found, set it as the selected Pokemon
  if (selectedPokemonData) {
    selectedPokemon = selectedPokemonData;
  }
}

// Function to move a Pokemon from one slot to another
function movePokemon(oldId, newId) {
  // Find the Pokemon in the team or storage
  let movingPokemon = null;
  for (let i = 0; i < team.length; i++) {
    if (team[i].id === oldId) {
      movingPokemon = team[i];
      break;
    }
  }

  // If the Pokemon is not in the team, look in storage
  if (!movingPokemon) {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].id === oldId) {
        movingPokemon = storage[i];
        break;
      }
    }
  }

  // If the Pokemon was not found, stop
  if (!movingPokemon) {
    return;
  }

  // Remove the Pokemon from its current location
  let removeIndex = -1;
  if (team.indexOf(movingPokemon) >= 0) {
    removeIndex = team.indexOf(movingPokemon);
    team.splice(removeIndex, 1);
  } else if (storage.indexOf(movingPokemon) >= 0) {
    removeIndex = storage.indexOf(movingPokemon);
    storage.splice(removeIndex, 1);
  }

  // Add the Pokemon to its new location
  if (newId < team.length) {
    team.splice(newId, 0, movingPokemon);
  } else {
    storage.push(movingPokemon);
  }

  // Update the display to reflect the change
  updateDisplay();
}