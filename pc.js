const pcTeamBoxes = document.querySelectorAll(".pc-team-box");

for (let i = 0; i < team.length; i++) {
  const pokemon = team[i];
  const pcTeamBox = pcTeamBoxes[i];
  const pcTeamSprite = pcTeamBox.querySelector(".pc-team-sprite");
  pcTeamSprite.src = pokemon.sprite;
}

const pokemonBoxes = document.querySelectorAll(".pc-team-box");
  pokemonBoxes.forEach((pokemonBox, index) => {
  pokemonBox.addEventListener("click", (event) => {
  if (event.shiftKey || (event.type === "touchstart" && event.type === "touchend")) {
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
    selectedSlot.classList.add("selected");
  } else if (selectedSlot === clickedSlot) {
    // If the clicked slot is the same as the selected slot, unselect it
    selectedSlot.classList.remove("selected");
    selectedSlot = null;
  } else {
    // Otherwise, swap the contents of the two slots
    swapSlots(selectedSlot, clickedSlot);
    selectedSlot.classList.remove("selected");
    selectedSlot = null;
  }
}

function swapSlots(slot1, slot2) {
  const slot1Content = slot1.innerHTML;
  const slot2Content = slot2.innerHTML;

  slot1.innerHTML = slot2Content;
  slot2.innerHTML = slot1Content;

  // Get the IDs of the slots being swapped
  const slot1Id = parseInt(slot1.id.split("-")[1]);
  const slot2Id = parseInt(slot2.id.split("-")[1]);

  // Check if the slots being swapped are in the team or storage
  let slot1Array, slot2Array;
  if (slot1.closest(".pc-team-container")) {
    slot1Array = team;
  } else {
    slot1Array = storage;
  }
  if (slot2.closest(".pc-team-container")) {
    slot2Array = team;
  } else {
    slot2Array = storage;
  }

  // Swap the contents of the arrays
  const temp = slot1Array[slot1Id];
  slot1Array[slot1Id] = slot2Array[slot2Id];
  slot2Array[slot2Id] = temp;

  // Save the updated arrays
  localStorage.setItem('team', JSON.stringify(team));
  localStorage.setItem('storage', JSON.stringify(storage));
}