/* Ancienne méthode, ne display que les pokemon
function getRandomSprite() {
  let randomIndex = Math.floor(Math.random() * pokemonDatabase.length);
  return pokemonDatabase[randomIndex].sprite;
} 

document.querySelector(".interaction-box img").src = getRandomSprite(); */

const mainContent = document.querySelector(".interaction-container");
const interactionBox = mainContent.querySelector(".interaction-box");
const img = interactionBox.querySelector("img");

function getRandomPokemonOrEgg() {
  const randomIndex = Math.floor(Math.random() * pokemonDatabase.length);
  const isEgg = Math.random() < 0.8; // 90% chance of egg
  if (isEgg) {
    const basePokemon = pokemonDatabase.filter(pokemon => pokemon.evolution_stage === "base");
    const randomBasePokemon = basePokemon[Math.floor(Math.random() * basePokemon.length)];
    return randomBasePokemon.egg_sprite;
  } else {
    const randomPokemon = pokemonDatabase[randomIndex];
    const isShiny = Math.random() < 1/256 && randomPokemon.shiny_sprite;
    return isShiny ? randomPokemon.shiny_sprite : randomPokemon.sprite;
  }
}

function countReadyToHatchEggs() {
  let count = 0;
  for (let i = 0; i < team.length; i++) {
    if (team[i].isEgg) {
      const pokemonData = pokemonDatabase.find(pokemon => pokemon.name === team[i].species);
      if (pokemonData.egg_steps <= team[i].eggSteps) {
        count++;
      }
    }
  }
  return count;
}

function updateEggsReadyToHatch() {
    document.getElementById("eggs-ready-to-hatch").textContent = countReadyToHatchEggs();
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

function generateToken() {
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

  window.alert(`You got a ${tokenType} token!`);
}

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
    return 1000;
  }
}

function generateDaycareEgg() {
  if (!daycare.eggsAvailable.species) {
    return;
  }

  if (daycare.eggsAvailable.clicsBeforeNextEgg > 0) {
    daycare.eggsAvailable.clicsBeforeNextEgg--;
  }

  if (daycare.eggsAvailable.clicsBeforeNextEgg === 0) {
    daycare.eggsAvailable.amount += Math.floor(Math.random() * 4) + 1;
    daycare.eggsAvailable.clicsBeforeNextEgg = calculateClicsBeforeNextEgg(daycare.eggsAvailable.species);
  }
}

let lastClickTime = 0;
let clickIntervals = [];

img.addEventListener("click", () => {
    const now = Date.now();
  
  // Check for automated clicking
  const clickInterval = now - lastClickTime;
  if (clickInterval < 10) { // Set a minimum interval of 10 milliseconds
    alert("Slow down! You're clicking too fast.");
    return;
  }
  lastClickTime = now;

  // Check for consistent clicking intervals
  /*if (lastClickTime !== 0) {
    clickIntervals.push(clickInterval);
  }
  if (clickIntervals.length >= 50) {
    const firstInterval = clickIntervals[0];
    for (let i = 1; i < clickIntervals.length; i++) {
      if (Math.abs(clickIntervals[i] - firstInterval) > 10000) {
        alert("Automated clicking detected. Please play the game manually.");
        return;
      }
    }
    clickIntervals.shift();
  }*/

  let eggData = JSON.parse(localStorage.getItem("eggData") || "{}");
  if (!eggData.clicks) {
    eggData.clicks = 0;
  }
  eggData.clicks += 1;
  localStorage.setItem("eggData", JSON.stringify(eggData));
  
  generateToken();

  let balance = JSON.parse(localStorage.getItem("balance") || "{}");
  if (!balance.pokeDollar) {
    balance.pokeDollar = 0;
  }
  balance.pokeDollar += getRandomValue(3, 5);
  localStorage.setItem("balance", JSON.stringify(balance));

  team = team.map((member) => {
    if (member.isEgg) {
      member.eggSteps += getRandomValue(17, 19);
      if (new Date().getDay() === 5) { // Friday
        member.eggSteps += getRandomValue(11, 13);
      }
    } else {
      member.experience += getRandomValue(210, 260);
      if (new Date().getDay() === 5) { // Friday
        member.experience += getRandomValue(140, 173);
      }
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
  localStorage.setItem("team", JSON.stringify(team));
  localStorage.setItem("daycare", JSON.stringify(daycare));
  img.src = getRandomPokemonOrEgg();
});

//Idle Mode

const idleButton = document.querySelector("#idle-button");

idleButton.addEventListener("click", () => {
  let numClicks = parseInt(prompt("How many automatic clicks do you want?"));
  if (isNaN(numClicks)) {
    return; // do nothing if numClicks is not a number
  }

  const cost = numClicks * 30; // Change the cost as needed

  const balance = JSON.parse(localStorage.getItem("balance") || "{}");
  if (balance.pokeDollar < cost) {
    alert("You don't have enough pokeDollars to use the idle mode.");
    return;
  }
  
  const confirmation = confirm(`Do you want to spend ${cost} PokeDollars for ${numClicks} clicks? If you leave the page while having the mode on, you'll not have your money back!`);
  if (!confirmation) {
    return; // do nothing if the user cancels the confirmation
  }

  // Deduct the cost from the balance
  balance.pokeDollar -= cost;
  localStorage.setItem("balance", JSON.stringify(balance));

  // Start the idle mode loop
  let count = 0;
  const intervalId = setInterval(() => {
    if (count >= numClicks) {
      clearInterval(intervalId);
      alert("Idle mode is over.");
      return;
    }

  let eggData = JSON.parse(localStorage.getItem("eggData") || "{}");
  if (!eggData.idleClicks) {
    eggData.idleClicks = 0;
  }
  eggData.idleClicks += 1;
  localStorage.setItem("eggData", JSON.stringify(eggData));
	
    // Update team data as in the click event listener
    team = team.map((member) => {
      if (member.isEgg) {
        member.eggSteps += getRandomValue(17, 19);
        if (new Date().getDay() === 5) { // Friday
          member.eggSteps += getRandomValue(11, 13);
        }
      } else {
        member.experience += getRandomValue(210, 260);
        if (new Date().getDay() === 5) { // Friday
          member.experience += getRandomValue(140, 173);
        }
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
    localStorage.setItem("team", JSON.stringify(team));
	img.src = getRandomPokemonOrEgg();
    count++;
  }, 250); // Change the interval as needed
});

img.src = getRandomPokemonOrEgg();

