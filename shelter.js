const eggBoxes = document.querySelectorAll('.egg-box');

// Define an object with the different rarity levels and their corresponding probabilities
const rarityProbabilities = {
  common: 0.5,
  uncommon: 0.4,
  rare: 0.0999,
  legendary: 0.0001
};

// select a random Pokemon from your database that is a base stage Pokemon 
const basePokemon = pokemonDatabase.filter(pokemon => pokemon.evolution_stage === "base")

function updateTeamLength() {
  document.getElementById("team-length").innerHTML = team.length.toLocaleString() || 0;
}

eggBoxes.forEach(eggBox => {
    let randomPokemon;
    while(!randomPokemon){
        randomPokemon = basePokemon[Math.floor(Math.random() * basePokemon.length)];
        if(Math.random() > rarityProbabilities[randomPokemon.rarity]){
            randomPokemon = undefined;
        }
    }
    eggBox.innerHTML = `<img src="${randomPokemon.egg_sprite}" alt="${randomPokemon.name} Egg">`;
    eggBox.claimed = false;
    eggBox.addEventListener('click', () => {
        if(eggBox.claimed){
            alert("This egg has already been claimed!");
        }
        else if(team.length < 6){
  const isShiny = Math.random() < 1/256;
  let pokemon = pokemonDatabase.find(p => p.name === randomPokemon.name);
  const genderRate = pokemon.gender_rate;
  let gender;
  if (genderRate === "-") {
    gender = "-";
  } else if (genderRate === "0") {
    gender = "Genderless";
  } else if (genderRate === "1") {
    gender = "Male";
  } else if (genderRate === "8") {
    gender = "Female";
  } else {
    gender = Math.random() * 100 < genderRate ? "Male" : "Female";
  }
  const egg = {
    species: randomPokemon.name,
    eggSteps: 0,
    level: 0,
    experience: 0,
    gender: gender,
    isEgg: true,
    isShiny: isShiny,
    sprite: randomPokemon.egg_sprite
  };
  team.push(egg);
  console.log(team);
  localStorage.setItem("team", JSON.stringify(team));
  eggBox.claimed = true;
  eggBox.innerHTML = "";
  updateTeamLength();
} else {
  alert("Team is full!");
}
    });
});