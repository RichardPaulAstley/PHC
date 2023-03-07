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
  if (event.shiftKey || (event.type === "touchstart" && event.touches.length === 2)) {
	if (event.ctrlKey && event.shiftKey) {
	const confirmRelease = window.confirm(`Are you sure you want to release all non-egg and non-Shiny Pokemon from your team?`);
	  if (confirmRelease) {
	  team = team.filter((pokemon) => pokemon.isEgg || pokemon.isShiny);
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
	  renderTeam();
	  localStorage.setItem("team", JSON.stringify(team));
	  location.reload();
	  }
	}
  }
});
});

// Mobile Release

pokemonBoxes.forEach((pokemonBox, index) => {
  let pressTimer;
  /* pokemonBox.addEventListener("mouseup", (event) => {
    clearTimeout(pressTimer);
  });*/
  pokemonBox.addEventListener("touchend", (event) => {
    clearTimeout(pressTimer);
  });
  /* pokemonBox.addEventListener("mousedown", (event) => {
    pressTimer = setTimeout(() => {
      releasePokemon(index);
    }, 500);
  });*/
  pokemonBox.addEventListener("touchstart", (event) => {
    pressTimer = setTimeout(() => {
      releasePokemon(index);
    }, 500);
  });
});

function releasePokemon(index) {
  if (team[index].isEgg) {
    window.alert("You can't release eggs");
    return;
  }
  const confirmRelease = window.confirm(`Are you sure you want to release ${team[index].species}?`);
  if (confirmRelease) {
    team.splice(index, 1);
    renderTeam();
    localStorage.setItem("team", JSON.stringify(team));
    location.reload();
  }
}

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
let slotNum = 0;
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
  newSlot.id = `slot-${slotNum}`;
  slotNum++;


 const newSprite = document.createElement("img");
newSprite.src = "sprites/none.png";
newSprite.alt = "Pokemon sprite";
newSprite.classList.add("pc-storage-sprite");
newSlot.appendChild(newSprite);

  const lastBox = storageContainer.lastChild;
  lastBox.appendChild(newSlot);
}

const pcStorageBoxes = document.querySelectorAll(".pc-storage-box");

for (let i = 0; i < storage.length; i++) {
  const pokemon = storage[i];
  if (pokemon) {
    const pcStorageBox = pcStorageBoxes[i];
    const pcStorageSprite = pcStorageBox.querySelector(".pc-storage-sprite");
    if (pcStorageSprite) {
      pcStorageSprite.src = pokemon.sprite;
    }
  }
}

/* Moving */

let selectedSlot = null;

// Add click event listeners to each slot
pcTeamBoxes.forEach((slot) => {
  slot.addEventListener("click", handleSlotClick);
});

pcStorageBoxes.forEach((slot) => {
  slot.addEventListener("click", handleSlotClick);
});

function handleSlotClick(event) {
  const clickedSlot = event.target.closest(".pc-team-box, .pc-storage-box");

  if (!clickedSlot) {
    return;
  }

  if (!selectedSlot) {
    // If no slot is currently selected, select the clicked slot
    selectedSlot = clickedSlot;
    selectedSlot.classList.add("selected"); // add the "selected" class
  } else if (selectedSlot === clickedSlot) {
    // If the clicked slot is the same as the selected slot, unselect it
    selectedSlot.classList.remove("selected"); // remove the "selected" class
    selectedSlot = null;
  } else {
    // Otherwise, swap the contents of the two slots
    swapSlots(selectedSlot, clickedSlot);
    selectedSlot.classList.remove("selected"); // remove the "selected" class from the previously selected slot
    selectedSlot = null;
  }
}

function removeNulls(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function reorderTeamArray() {
  for (let i = 0; i < team.length; i++) {
    if (!team[i]) {
      for (let j = i + 1; j < team.length; j++) {
        if (team[j]) {
          team[i] = team[j];
          team[j] = null;
          break;
        }
      }
    }
  }
  team = removeNulls(team);
}

function swapSlots(slot1, slot2) {
const slot1Content = slot1.innerHTML;
const slot2Content = slot2.innerHTML;

slot1.innerHTML = slot2Content;
slot2.innerHTML = slot1Content;

// Get the index of the slots in their respective arrays
const slot1Index = [...pcTeamBoxes, ...pcStorageBoxes].indexOf(slot1);
const slot2Index = [...pcTeamBoxes, ...pcStorageBoxes].indexOf(slot2);

// Swap the Pokémon in the team array and storage array
if (slot1Index < pcTeamBoxes.length && slot2Index < pcTeamBoxes.length) {
// Swap between team slots
[team[slot1Index], team[slot2Index]] = [team[slot2Index], team[slot1Index]];
} else if (slot1Index < pcTeamBoxes.length && slot2Index >= pcTeamBoxes.length) {
// Swap from team to storage
const storageIndex = slot2Index - pcTeamBoxes.length;
if (storage[storageIndex]) {
// If the storage slot is not empty, swap with the team slot
[team[slot1Index], storage[storageIndex]] = [storage[storageIndex], team[slot1Index]];
} else {
// If the storage slot is empty, move the team Pokémon to the storage
storage[storageIndex] = team[slot1Index];
team[slot1Index] = null; // Set the team slot to null
}
} else if (slot1Index >= pcTeamBoxes.length && slot2Index < pcTeamBoxes.length) {
// Swap from storage to team
const storageIndex = slot1Index - pcTeamBoxes.length;
if (team[slot2Index]) {
// If the team slot is not empty, swap with the storage slot
[team[slot2Index], storage[storageIndex]] = [storage[storageIndex], team[slot2Index]];
} else {
// If the team slot is empty, move the storage Pokémon to the team
team[slot2Index] = storage[storageIndex];
storage[storageIndex] = null; // Set the storage slot to null
}
} else {
// Swap between storage slots
[storage[slot1Index - pcTeamBoxes.length], storage[slot2Index - pcTeamBoxes.length]] = [storage[slot2Index - pcTeamBoxes.length], storage[slot1Index - pcTeamBoxes.length]];
}

// Save the updated arrays
reorderTeamArray();
localStorage.setItem('team', JSON.stringify(team));
localStorage.setItem('storage', JSON.stringify(storage));
}

/* Sprite Update */ 

// Loop through each member of the team
team = team.map((member) => {
  // Find the corresponding data for the current member's species
  const speciesData = pokemonDatabase.find((data) => data.name === member.species);

  // Determine which sprite URL to use based on the member's isEgg and isShiny properties
  let spriteUrl;
  if (member.isEgg) {
    spriteUrl = speciesData.egg_sprite;
  } else if (member.isShiny) {
    spriteUrl = speciesData.shiny_sprite;
  } else {
    spriteUrl = speciesData.sprite;
  }

  // Check if the member's sprite URL needs to be updated
  if (member.sprite !== spriteUrl) {
    // Replace the old sprite URL with the new one
    member.sprite = spriteUrl;

    // If the member is currently in the team, update the displayed image as well
    if (!member.isEgg) {
      const img = document.querySelector(`img[data-name="${member.species}"]`);
      if (img) {
        img.src = member.sprite;
      }
    }
  }

  // Return the updated member object
  return member;
});

// Loop through each entry in local storage and update the sprite URL if necessary
for (const key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
    const value = JSON.parse(localStorage.getItem(key));
    // If the value is an object and has a 'species' property, it is likely a team member
    if (typeof value === 'object' && value !== null && value.hasOwnProperty('species')) {
      // Find the corresponding data for the current member's species
      const speciesData = pokemonDatabase.find((data) => data.name === value.species);

      // Determine which sprite URL to use based on the member's isEgg and isShiny properties
      let spriteUrl;
      if (value.isEgg) {
        spriteUrl = speciesData.egg_sprite;
      } else if (value.isShiny) {
        spriteUrl = speciesData.shiny_sprite;
      } else {
        spriteUrl = speciesData.sprite;
      }

      // Check if the member's sprite URL needs to be updated
      if (value.sprite !== spriteUrl) {
        // Replace the old sprite URL with the new one
        value.sprite = spriteUrl;

        // Save the updated value to local storage
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  }
}