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
  newSlot.id = `slot-${i + 1}`;

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


/* Moving */

function selectPokemon(selectedBoxId, selectedPokemon) {
  if (selectedPokemon) {
    const selectedElement = document.querySelector('.selected');
    if (selectedElement) {
      const selectedId = selectedElement.id;
      const currentPokemon = localStorage.getItem(selectedId);
      localStorage.setItem(selectedId, selectedPokemon);
      localStorage.setItem(selectedBoxId, currentPokemon);

      if (selectedId.startsWith('team')) {
        document.querySelector(`#${selectedId}`).innerHTML = selectedPokemon;
        if (selectedBoxId.startsWith('team')) {
          document.querySelector(`#${selectedBoxId}`).innerHTML = currentPokemon;
        } else {
          const selectedBox = document.querySelector(`#${selectedBoxId}`);
          if (selectedBox) {
            selectedBox.style.backgroundImage = `url(${currentPokemon})`;
            selectedBox.classList.add('selected');
          }
        }
      } else {
        document.querySelector(`#${selectedId}`).style.backgroundImage = `url(${selectedPokemon})`;
        if (selectedBoxId.startsWith('team')) {
          document.querySelector(`#${selectedBoxId}`).innerHTML = currentPokemon;
        } else {
          const selectedBox = document.querySelector(`#${selectedBoxId}`);
          if (selectedBox) {
            selectedBox.style.backgroundImage = `url(${currentPokemon})`;
            selectedBox.classList.add('selected');
          }
        }
      }
      selectedElement.classList.remove('selected');
    } else {
      const selectedBox = document.querySelector(`#${selectedBoxId}`);
      if (selectedBox) {
        selectedBox.classList.add('selected');
      }
    }
  } else {
    const selectedElement = document.querySelector('.selected');
    if (selectedElement) {
      selectedElement.classList.remove('selected');
    }
    const selectedBox = document.querySelector(`#${selectedBoxId}`);
    if (selectedBox) {
      selectedBox.classList.add('selected');
    }
  }
}