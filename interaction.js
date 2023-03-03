/* Ancienne méthode, ne display que les pokemon
function getRandomSprite() {
  let randomIndex = Math.floor(Math.random() * pokemonDatabase.length);
  return pokemonDatabase[randomIndex].sprite;
} 

document.querySelector(".interaction-box img").src = getRandomSprite(); */

const mainContent = document.querySelector(".main-content");
const interactionBox = mainContent.querySelector(".interaction-box");
const img = interactionBox.querySelector("img");

function getRandomPokemonOrEgg() {
  const randomIndex = Math.floor(Math.random() * pokemonDatabase.length);
  const pokemonOrEgg = pokemonDatabase[randomIndex];
  const isEgg = Math.random() < 0.5;
  return isEgg && pokemonOrEgg.egg_sprite ? pokemonOrEgg.egg_sprite : pokemonOrEgg.sprite;
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

img.addEventListener("click", () => {
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

  localStorage.setItem("team", JSON.stringify(team));
  img.src = getRandomPokemonOrEgg();
});


img.src = getRandomPokemonOrEgg();

