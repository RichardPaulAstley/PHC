function cleanUpTeamArray() {
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

  // Check if the team array contains null values
  if (team.includes(null)) {
    // If null values exist, remove them and reorder the array
    team = removeNulls(team);
    reorderTeamArray();
    // Save the updated team array in local storage
    localStorage.setItem('team', JSON.stringify(team));
    location.reload();
  }
}

window.addEventListener('load', cleanUpTeamArray);

const pcTeamBoxes = document.querySelectorAll(".pc-team-box");

for (let i = 0; i < pcTeamBoxes.length; i++) {
  const pcTeamBox = pcTeamBoxes[i];
  const pcTeamSprite = pcTeamBox.querySelector(".pc-team-sprite");
  
  if (i < team.length) {
    const pokemon = team[i];
    pcTeamSprite.src = `../` + pokemon.sprite;
    
    // Add or remove shiny-bg class based on isShiny property
    if (pokemon.isShiny && !pokemon.isEgg) {
      pcTeamBox.classList.add('shiny-bg');
    } else {
      pcTeamBox.classList.remove('shiny-bg');
    }
  } else {
    pcTeamSprite.src = "../sprites/none.png"; // Set the sprite source to empty for empty slots
    pcTeamBox.classList.remove('shiny-bg'); // Remove shiny-bg class for empty slots
  }
  
  // Add the event listener for click event
  pcTeamBox.addEventListener("click", handleSlotClick);
}

const pokemonBoxes = document.querySelectorAll(".pc-team-box");
pokemonBoxes.forEach((pokemonBox, index) => {
  pokemonBox.addEventListener("click", (event) => {
    if (event.shiftKey || (event.type === "touchstart" && event.touches.length === 2)) {
      if (event.ctrlKey && event.shiftKey) {
        cleanUpTeamArray();
        const confirmRelease = window.confirm(`Are you sure you want to release all non-egg and non-Shiny Pokemon from your team?`);
        if (confirmRelease) {
          team = team.filter((pokemon) => pokemon.isEgg || pokemon.isShiny || pokemon.isLocked);
          /*renderTeam();*/
          localStorage.setItem("team", JSON.stringify(team));
          location.reload();
        }
      } else {
        if (team[index].isEgg || team[index].isLocked) {
          window.alert("You can't release eggs / Locked Pokémon!");
          return;
        }
        const confirmRelease = window.confirm(`Are you sure you want to release ${team[index].species}?`);
        if (confirmRelease) {
          team.splice(index, 1);
          /*renderTeam();*/
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
  pokemonBox.addEventListener("touchend", (event) => {
    clearTimeout(pressTimer);
  });
  pokemonBox.addEventListener("touchstart", (event) => {
    pressTimer = setTimeout(() => {
      cleanUpTeamArray();
      releasePokemon(index);
    }, 500);
  });
});

function releasePokemon(index) {
  const pokemon = team[index];

  if (pokemon.isEgg || pokemon.isLocked) {
    window.alert("You can't release eggs / Locked Pokémon");
    return;
  }

  const confirmReleaseAll = window.confirm("Do you want to release all non-egg and non-shiny Pokemon from your team?");
  
  if (confirmReleaseAll) {
    const filteredTeam = team = team.filter((pokemon) => pokemon.isEgg || pokemon.isShiny || pokemon.isLocked);
    team = filteredTeam;
    localStorage.setItem("team", JSON.stringify(team));
    location.reload();
  } else {
    const confirmReleaseSelected = window.confirm(`Are you sure you want to release ${pokemon.species}?`);
    
    if (confirmReleaseSelected) {
      team.splice(index, 1);
      localStorage.setItem("team", JSON.stringify(team));
      location.reload();
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const releaseButton = document.querySelector('#releaseAll'); // Get the button element

  // Add event listener to the "Release your team!" button
  releaseButton.addEventListener('click', function () {
    if (confirm("Are you sure you want to release all non-egg and non-shiny Pokémon from your team?")) {
      releaseAllMons(); // Call the function when the button is clicked
    }
  });

  // Function to release all eligible Pokémon
  function releaseAllMons() {
    cleanUpTeamArray();
    const filteredTeam = team.filter((pokemon) => pokemon.isEgg || pokemon.isShiny || pokemon.isLocked);
    localStorage.setItem("team", JSON.stringify(filteredTeam));
    location.reload();
  }
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
  newSprite.src = "../sprites/none.png";
  newSprite.alt = "Pokemon sprite";
  newSprite.classList.add("pc-storage-sprite");
  newSlot.appendChild(newSprite);

  const lastBox = storageContainer.lastChild;
  lastBox.appendChild(newSlot);

  // Add the event listener for click event
  newSlot.addEventListener("click", handleSlotClick);
}

const pcStorageBoxes = document.querySelectorAll(".pc-storage-box");

for (let i = 0; i < storage.length; i++) {
  const pokemon = storage[i];
  if (pokemon) {
    const pcStorageBox = pcStorageBoxes[i];
    const pcStorageSprite = pcStorageBox.querySelector(".pc-storage-sprite");
    if (pcStorageSprite) {
      pcStorageSprite.src = `../` + pokemon.sprite;

      // Add or remove shiny-bg class based on isShiny property
      if (pokemon.isShiny && !pokemon.isEgg) {
        pcStorageBox.classList.add('shiny-bg');
      } else {
        pcStorageBox.classList.remove('shiny-bg');
      }
    }
  }
}

/* Moving */

let selectedSlot = null;

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

  localStorage.setItem('team', JSON.stringify(team));
  localStorage.setItem('storage', JSON.stringify(storage));

  // Update the shiny background class for the swapped slots
const slot1IsShiny = team[slot1Index] && team[slot1Index].isShiny && !team[slot1Index].isEgg;
const slot2IsShiny = team[slot2Index] && team[slot2Index].isShiny && !team[slot2Index].isEgg;
if (slot1IsShiny) {
  slot1.classList.add('shiny-bg');
} else {
  slot1.classList.remove('shiny-bg');
}

if (slot2IsShiny) {
  slot2.classList.add('shiny-bg');
} else {
  slot2.classList.remove('shiny-bg');
}

  // Update the shiny background class for the storage slots
  const storageSlot1Index = slot1Index - pcTeamBoxes.length;
  const storageSlot2Index = slot2Index - pcTeamBoxes.length;
  if (pcStorageBoxes[storageSlot1Index]) {
    const storageSlot1IsShiny = storage[storageSlot1Index] && storage[storageSlot1Index].isShiny && !storage[storageSlot1Index].isEgg;
    if (storageSlot1IsShiny) {
      pcStorageBoxes[storageSlot1Index].classList.add('shiny-bg');
    } else {
      pcStorageBoxes[storageSlot1Index].classList.remove('shiny-bg');
    }
  }
  if (pcStorageBoxes[storageSlot2Index]) {
    const storageSlot2IsShiny = storage[storageSlot2Index] && storage[storageSlot2Index].isShiny && !storage[storageSlot2Index].isEgg;
    if (storageSlot2IsShiny) {
      pcStorageBoxes[storageSlot2Index].classList.add('shiny-bg');
    } else {
      pcStorageBoxes[storageSlot2Index].classList.remove('shiny-bg');
    }
  }
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

// Get all the img elements inside the pc-team-container and pc-storage-container
const imgs = document.querySelectorAll('.pc-team-container img, .pc-storage-container img');

// Attach a mouseover event listener to each img
imgs.forEach((img) => {
  img.addEventListener('mouseover', () => {
    // Get the ID of the parent pc-team-box element
    const parentID = img.parentElement.id;

    // Determine if the Pokemon is in the team or in the storage
    const isInTeam = parentID.startsWith('team');
    const pokemonArray = isInTeam ? team : storage;

    // Get the index of the Pokemon in the corresponding array
    const index = parseInt(parentID.split('-')[1]);

    // Get the corresponding Pokemon data, if it exists
    const pokemonData = pokemonArray[index];
    

    // Check if pokemonData is null, and exit the function if it is
    if (!pokemonData || pokemonData.isEgg) {
      return;
    }

    // Construct the title string with the Pokemon data, if it exists
    let titleString = '';
    if (pokemonData) {
      const pokemonDatabaseEntry = pokemonDatabase.find(entry => entry.name === pokemonData.species);
      const displayName = pokemonDatabaseEntry.display_name || pokemonData.species;

      titleString = `${displayName} \nLevel ${pokemonData.level} \n${pokemonData.gender}`;

      // Add a line break if the totalHatched count is defined
      if (pokemonData.totalHatched !== undefined) {
        titleString += '\nTotal Hatched: ' + pokemonData.totalHatched;
      }
    }

    if (pokemonData.timeHatched !== undefined) {
      const hatchedTime = new Date(pokemonData.timeHatched);
      const formattedTime = hatchedTime.toLocaleString();
      titleString += '\nHatched on: ' + formattedTime;
    }

    // Update the title attribute with the Pokemon data
    img.title = titleString;
  });
});
