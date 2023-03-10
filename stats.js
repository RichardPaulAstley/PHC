let team = []

if (localStorage.getItem("team")) {
    team = JSON.parse(localStorage.getItem("team"));
}

let daycare = {
	parent0 : null,
	parent1 : null,
	isCompatible: false,
	eggsAvailable : {
		species: null,
		amount: 0,
		clicsBeforeNextEgg: 0,
	},
}

if (localStorage.getItem("daycare")) {
    daycare = JSON.parse(localStorage.getItem("daycare"));
} 


let eggData = {
    clicks: 0,
	idleClicks: 0,
    hatches: 0,
	shinyHatches : 0,
}

let balance = {
		pokeDollar: 0
}

let inventory = []

let tokenInventory = []

window.addEventListener("load", function() {
if (localStorage.getItem("eggData")) {
eggData = JSON.parse(localStorage.getItem("eggData"));
}
  document.getElementById("eggs-hatched").innerHTML = eggData.hatches || 0;
  document.getElementById("shiny-hatched").innerHTML = eggData.shinyHatches || 0;
  document.getElementById("clicks-done").innerHTML = eggData.clicks || 0;
  document.getElementById("idleClicks-done").innerHTML = eggData.idleClicks || 0;
});

window.addEventListener("load", function() {
if (localStorage.getItem("balance")) {
balance = JSON.parse(localStorage.getItem("balance"));
}
  document.getElementById("currency-amount").innerHTML = balance.pokeDollar.toLocaleString() || 0;
});

window.addEventListener("load", function() {
if (localStorage.getItem("team")) {
team = JSON.parse(localStorage.getItem("team"));
}
  document.getElementById("team-length").innerHTML = team.length.toLocaleString() || 0;
});

window.addEventListener("load", function() {
  if (localStorage.getItem("team")) {
    team = JSON.parse(localStorage.getItem("team"));
  }
  updateEggsReadyToHatch();
});

if (localStorage.getItem("balance")) {
  balance = JSON.parse(localStorage.getItem("balance"));
}

if (localStorage.getItem("inventory")) {
  inventory = JSON.parse(localStorage.getItem("inventory"));
}

if (localStorage.getItem("tokenInventory")) {
  tokenInventory = JSON.parse(localStorage.getItem("tokenInventory"));
}

let storageExtensions = 0;
inventory.forEach((item) => {
  if (item.name === "PC Extension") {
    storageExtensions += item.amount;
  }
});

const totalStorage = 300 + (storageExtensions * 30);

let storage = new Array(totalStorage).fill(undefined);

if (localStorage.getItem("storage")) {
    storage = JSON.parse(localStorage.getItem("storage"));
}

/*function updatePokemonSprites() {
  [team, storage].forEach((pokemonArray) => {
    pokemonArray.forEach((pokemon) => {
      if (!pokemon) return; // ignore null values
      if (pokemon.isEgg) return; // ignore eggs
      
      const pokemonData = pokemonDatabase.find((p) => p.name === pokemon.species);
      if (!pokemonData) return;

      let sprite = pokemon.isShiny ? pokemonData.shiny_sprite : pokemonData.sprite;

      if (pokemon.gender === 'Female' && pokemonData.female_sprite) {
        if (!pokemon.isShiny) {
          sprite = pokemonData.female_sprite;
        } else if (pokemonData.female_shiny_sprite) {
          sprite = pokemonData.female_shiny_sprite;
        }
      }

      pokemon.sprite = sprite;
    });
  });
  
  localStorage.setItem('team', JSON.stringify(team));
  localStorage.setItem('storage', JSON.stringify(storage));
}*/