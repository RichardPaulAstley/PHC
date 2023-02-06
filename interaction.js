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

img.addEventListener("click", () => {
  let eggData = JSON.parse(localStorage.getItem("eggData") || "{}");
  if (!eggData.clicks) {
    eggData.clicks = 0;
  }
  eggData.clicks += 1;
  localStorage.setItem("eggData", JSON.stringify(eggData));

  let balance = JSON.parse(localStorage.getItem("balance") || "{}");
  if (!balance.pokeDollar) {
    balance.pokeDollar = 0;
  }
  balance.pokeDollar += getRandomValue(3, 5);
  localStorage.setItem("balance", JSON.stringify(balance));

  team = team.map((member) => {
    if (member.isEgg) {
      member.eggSteps += getRandomValue(900, 1300);
    } else {
      member.experience += getRandomValue(8500, 12000);

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

