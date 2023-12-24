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

const mainContent = document.querySelector(".interaction-container");
const interactionBox = mainContent.querySelector(".interaction-box");
const img = interactionBox.querySelector("img");

function getRandomPokemonOrEgg() {
  const randomIndex = Math.floor(Math.random() * pokemonDatabase.length);
  const isEgg = Math.random() < 0.8; // 90% chance of egg
  if (isEgg) {
    const basePokemon = pokemonDatabase.filter(pokemon => pokemon.evolution_stage === "base");
    const randomBasePokemon = basePokemon[Math.floor(Math.random() * basePokemon.length)];
    return `../${randomBasePokemon.egg_sprite}`;
  } else {
    const randomPokemon = pokemonDatabase[randomIndex];
    const isShiny = Math.random() < 1 / 256 && randomPokemon.shiny_sprite;
    return isShiny ? `../${randomPokemon.shiny_sprite}` : `../${randomPokemon.sprite}`;
  }
}

function updateTeamArray(id, update) {
  for (let i = 0; i < team.length; i++) {
    if (team[i].id === id) {
      team[i] = { ...team[i], ...update };
      break;
    }
  }
}

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countPokemonsReadyToEvolve(team, inventory) {
  let count = 0;

  for (let i = 0; i < team.length; i++) {
    const pokemon = team[i];
    let meetsConditions = true;
    let pokemonData = pokemonDatabase.find(p => p.name === pokemon.species);

    if (!pokemon.isEgg && pokemonData.evolutions && pokemonData.evolutions.length && !pokemon.isLocked) {
      for (let evolution of pokemonData.evolutions) {
        // Check all conditions for evolution
        for (let i = 0; i < evolution.method.length; i++) {
          let method = evolution.method[i];
          let value = evolution.value;

          if (i === 1 && evolution.value_2) {
            value = evolution.value_2;
          } else if (i > 1) {
            break; // Only support value and value_2 for now
          }

          if (method === 'level') {
            if (pokemon.level < value) {
              meetsConditions = false;
              break;
            }
          }
          if (method === 'item') {
            let item = inventory.find(i => i.name === evolution.value);
            if (!item || item.amount === 0) {
              meetsConditions = false;
              break;
            }
          }
          if (method === 'gender') {
            if (pokemon.gender !== value) {
              meetsConditions = false;
              break;
            }
          }
        }

        if (meetsConditions) {
          count++;
          break; // No need to check further if the Pokémon meets one evolution condition
        }
      }
    }
  }

  return count;
}

function updateEvolvablePokemonText() {
  const count = countPokemonsReadyToEvolve(team, inventory);
  const teamEvoSpan = document.getElementById("team-evo");

  if (teamEvoSpan) {
    teamEvoSpan.textContent = count;
  }
}

updateEvolvablePokemonText();

/*function generateToken() {
  let tokenType = null;
  for (let i = 0; i < tokenDatabase.length; i++) {
    const token = tokenDatabase[i];
    if (Math.random() <= 1 / token.count) {
      tokenType = token.type;
      break;
    }
  }

  if (!tokenType) {
    return;
  }

  const existingToken = tokenInventory.find(token => token.type === tokenType);
  if (existingToken) {
    existingToken.amount++;
  } else {
    const token = {
      type: tokenType,
      amount: 1
    };
    tokenInventory.push(token);
  }

  localStorage.setItem("tokenInventory", JSON.stringify(tokenInventory));

  //window.alert(`You got a ${tokenType} token!`);
}*/

function calculateClicsBeforeNextEgg(species) {
  const eggBaseSpecies = pokemonDatabase.find(p => p.name === species).base_species;
  const eggRarity = pokemonDatabase.find(p => p.name === eggBaseSpecies).rarity;

  if (eggRarity === "common") {
    return 100;
  } else if (eggRarity === "uncommon") {
    return 150;
  } else if (eggRarity === "rare") {
    return 250;
  } else if (eggRarity === "novelty") {
    return 1500;
  }
}

function generateDaycareEgg() {
  if (!daycare.eggsAvailable.species || daycare.eggsAvailable.amount > 100) {
    return;
  }

  if (daycare.eggsAvailable.clicsBeforeNextEgg > 0) {
    daycare.eggsAvailable.clicsBeforeNextEgg--;
  }

  if (daycare.eggsAvailable.clicsBeforeNextEgg === 0) {
    const eggRarity = pokemonDatabase.find(p => p.name === daycare.eggsAvailable.species).rarity;

    // Modify the number of eggs based on rarity and add a chance for each rarity
    let eggsToAdd = 1; // Default value for common, uncommon, and rare rarity

    if (eggRarity === "novelty") {
      if (Math.random() < 0.4) {
        // chance to add an egg
        if (daycare.eggsAvailable.amount < 6) {
          // Only add an egg if there are less than 6 eggs in the daycare
          eggsToAdd = 1;
        } else {
          // If there are already 6 eggs, don't add more
          eggsToAdd = 0;
        }
      } else {
        // If the random number is >= 0.1, no egg is added
        eggsToAdd = 0;
      }
    } else if (eggRarity === "rare") {
      if (Math.random() < 0.9) {
        // 60% chance to add between 1 and 3 eggs
        eggsToAdd = Math.floor(Math.random() * 3) + 1;
      } else {
        // If the random number is >= 0.6, no egg is added
        eggsToAdd = 0;
      }
    } else if (eggRarity === "uncommon") {
      if (Math.random() < 0.95) {
        // 80% chance to add between 1 and 4 eggs
        eggsToAdd = Math.floor(Math.random() * 4) + 1;
      } else {
        // If the random number is >= 0.8, no egg is added
        eggsToAdd = 0;
      }
    } else if (eggRarity === "common") {
      // 1 and 6 eggs for common rarity
      eggsToAdd = Math.floor(Math.random() * 6) + 1;
    }

    daycare.eggsAvailable.amount += eggsToAdd;
    daycare.eggsAvailable.clicsBeforeNextEgg = calculateClicsBeforeNextEgg(daycare.eggsAvailable.species);
  }
}

let lastClickTime = 0;
let clickIntervals = [];

// Manual Clicking 

img.addEventListener("click", () => {
  const now = Date.now();

  team = JSON.parse(localStorage.getItem("team") || "[]");
  daycare = JSON.parse(localStorage.getItem("daycare") || "[]");

  // Check for automated clicking
  const clickInterval = now - lastClickTime;
  if (clickInterval < 5) { // Set a minimum interval of 10 milliseconds
    alert("Slow down! You're clicking too fast.");
    return;
  }
  lastClickTime = now;

  let eggData = JSON.parse(localStorage.getItem("eggData") || "{}");
  if (!eggData.clicks) {
    eggData.clicks = 0;
  }
  eggData.clicks += 1;
  localStorage.setItem("eggData", JSON.stringify(eggData));

  //generateToken();

  let balance = JSON.parse(localStorage.getItem("balance") || "{}");
  if (!balance.pokeDollar) {
    balance.pokeDollar = 0;
  }
  balance.pokeDollar += getRandomValue(8, 12);
  localStorage.setItem("balance", JSON.stringify(balance));

  team = team.map((member) => {
    if (member.isEgg) {
      const eggStepsBase = getRandomValue(18, 24);
      const eggStepsBonus = new Date().getDay() === 5 ? Math.round(eggStepsBase * 0.5) : 0; // Apply *1.5 bonus if it's Friday
      member.eggSteps += eggStepsBase + eggStepsBonus;
    } else {
      const experienceBase = getRandomValue(220, 320);
      const experienceBonus = new Date().getDay() === 5 ? Math.round(experienceBase * 0.5) : 0; // Apply *1.5 bonus if it's Friday
      member.experience += experienceBase + experienceBonus;
      
      const pokemonData = pokemonDatabase.find(data => data.name === member.species);
      if (pokemonData) {
        const xpRequired = pokemonData.experience_group;
  
        while (member.experience >= xpRequired && member.level < 100) {
          member.level++;
          member.experience -= xpRequired;
        }
  
        if (member.level >= 100) {
          member.experience = xpRequired * 100;
        }
      }
    }
    
    return member;
  });
  updateEggsReadyToHatch();
  generateDaycareEgg();
  updateDaycareDisplay();
  updateEvolvablePokemonText()
  localStorage.setItem("team", JSON.stringify(team));
  localStorage.setItem("daycare", JSON.stringify(daycare));
  img.src = getRandomPokemonOrEgg();
});

//Idle Mode

const idleButton = document.querySelector("#idle-button");

let isIdleModeOn = false;
let intervalId;

idleButton.addEventListener("click", () => {
  team = JSON.parse(localStorage.getItem("team") || "[]");
  daycare = JSON.parse(localStorage.getItem("daycare") || "[]");
  if (isIdleModeOn) {
    clearInterval(intervalId);
    alert("Idle mode is over.");
    isIdleModeOn = false;
  } else {
    intervalId = setInterval(() => {
      let eggData = JSON.parse(localStorage.getItem("eggData") || "{}");
      if (!eggData.idleClicks) {
        eggData.idleClicks = 0;
      }
      eggData.idleClicks += 1;
      localStorage.setItem("eggData", JSON.stringify(eggData));

      //generateToken();

      let balance = JSON.parse(localStorage.getItem("balance") || "{}");
      if (!balance.pokeDollar) {
        balance.pokeDollar = 0;
      }
      balance.pokeDollar += getRandomValue(1, 2);
      localStorage.setItem("balance", JSON.stringify(balance));

      team = team.map((member) => {
        if (member.isEgg) {
          const eggStepsBase = getRandomValue(9, 12);
          const eggStepsBonus = new Date().getDay() === 5 ? Math.round(eggStepsBase * 0.5) : 0; // Apply *1.5 bonus if it's Friday
          member.eggSteps += eggStepsBase + eggStepsBonus;
        } else {
          const experienceBase = getRandomValue(110, 160);
          const experienceBonus = new Date().getDay() === 5 ? Math.round(experienceBase * 0.5) : 0; // Apply *1.5 bonus if it's Friday
          member.experience += experienceBase + experienceBonus;
          
          const pokemonData = pokemonDatabase.find(data => data.name === member.species);
          if (pokemonData) {
            const xpRequired = pokemonData.experience_group;
      
            while (member.experience >= xpRequired && member.level < 100) {
              member.level++;
              member.experience -= xpRequired;
            }
      
            if (member.level >= 100) {
              member.experience = xpRequired * 100;
            }
          }
        }
        return member;
      });
      updateEggsReadyToHatch();
      updateEvolvablePokemonText();
      generateDaycareEgg();
      updateDaycareDisplay();
      localStorage.setItem("daycare", JSON.stringify(daycare));
      localStorage.setItem("team", JSON.stringify(team));
      img.src = getRandomPokemonOrEgg();
    }, 190); // Change the interval as needed

    isIdleModeOn = true;
  }
});

img.src = getRandomPokemonOrEgg();

// Function to get the bonus based on the day
function getBonusMultiplier() {
  return new Date().getDay() === 5 ? 1.5 : 1;
}

// Function to update the bonus alert content
function updateBonusAlert() {
  const bonusAlert = document.getElementById('bonus-alert');
  const bonusMultiplier = getBonusMultiplier();
  bonusAlert.textContent = `Today's bonus is : x${bonusMultiplier}`;
}

// Call the function to update the bonus alert when the page loads
updateBonusAlert();

document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the team data from local storage
  const team = JSON.parse(localStorage.getItem('team')) || [];

  // Get the element where the team species will be displayed
  const teamSpeciesSpan = document.getElementById("team-name");

  // Function to find the display name for a species in the pokemonDatabase
  function findDisplayName(speciesName) {
    const pokemonData = pokemonDatabase.find(entry => entry.name === speciesName);
    return pokemonData && pokemonData.display_name ? pokemonData.display_name : speciesName;
  }

  // Check if there are Pokémon in the team
  if (team.length > 0) {
    // Iterate over the team and display the species or "Egg" for each Pokémon
    let speciesList = "";
    for (let i = 0; i < team.length && i < 6; i++) {
      if (team[i].isEgg) {
        speciesList += "Egg";
      } else if (team[i].species) {
        speciesList += findDisplayName(team[i].species); // Use display name if available
      }
      
      if (i < team.length - 1) {
        speciesList += ', '; // Add a comma if there are more Pokémon
      }
    }

    // Set the species list as the content of the element
    if (teamSpeciesSpan) {
      teamSpeciesSpan.textContent = "Team: " + speciesList;
    }
  } else {
    // If the team is empty, display a message
    if (teamSpeciesSpan) {
      teamSpeciesSpan.textContent = "Team is empty";
    }
  }
});