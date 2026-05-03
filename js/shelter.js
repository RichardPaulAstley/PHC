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

const eggBoxes = document.querySelectorAll('.egg-box');

// Define an object with the different rarity levels and their corresponding probabilities
const rarityProbabilities = {
    common: 0.5,
    uncommon: 0.4,
    rare: 0.1,
    legendary: 0,
    novelty: 0
};

// select a random Pokemon from your database that is a base stage Pokemon 
const basePokemon = pokemonDatabase.filter(pokemon => pokemon.evolution_stage === "base")

function updateTeamLength() {
    document.getElementById("team-length").innerHTML = team.length.toLocaleString() || 0;
}

eggBoxes.forEach(eggBox => {
    let randomPokemon;
    while (!randomPokemon) {
        randomPokemon = basePokemon[Math.floor(Math.random() * basePokemon.length)];
        if (Math.random() > rarityProbabilities[randomPokemon.rarity]) {
            randomPokemon = undefined;
        }
    }
    eggBox.innerHTML = `<img src="../${randomPokemon.egg_sprite}" alt="${randomPokemon.name} Egg">`;
    eggBox.claimed = false;
    eggBox.addEventListener('click', () => {
        if (eggBox.claimed) {
            alert("This egg has already been claimed!");
        } else if (team.length === 6) {
            alert("Team is full!");
        } else {
            const confirmation = window.confirm(`Do you want to pick up the ${randomPokemon.name} egg? (${randomPokemon.rarity}, ${randomPokemon.egg_steps} steps)`);
            if (confirmation) {
                const prngValue = parseFloat(localStorage.getItem("prng"));
                team.push({/*id: team.length+1,*/ species: randomPokemon.name, eggSteps: 0, level: 0, experience: 0, gender: "none", isEgg: true, isShiny: prngValue, sprite: randomPokemon.egg_sprite });
                console.log(team);
                localStorage.setItem("team", JSON.stringify(team));
                eggBox.claimed = true;
                eggBox.innerHTML = "";
                updateTeamLength();
                reRollPrngValue();
            }
        }
    });
});