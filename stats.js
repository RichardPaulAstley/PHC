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

function exportSave() {
  const lastExportTimestamp = parseInt(localStorage.getItem('lastExportTimestamp')) || 0;
  const currentTimestamp = new Date().getTime();
  const cooldown = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
  if (currentTimestamp - lastExportTimestamp < cooldown) {
    alert('You can only export your data once every  2 hours.');
    return;
  }
  
  const saveData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    saveData[key] = localStorage.getItem(key);
  }

  const saveDataJson = JSON.stringify(saveData);
  const encryptedSaveData = CryptoJS.AES.encrypt(saveDataJson, secretKey).toString();
  const blob = new Blob([encryptedSaveData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'PHC-save.txt';
  link.click();
  
  localStorage.setItem('lastExportTimestamp', currentTimestamp.toString());
}

function importSave() {
  const lastImportTimestamp = parseInt(localStorage.getItem('lastImportTimestamp')) || 0;
  const currentTimestamp = new Date().getTime();
  const cooldown = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
  if (currentTimestamp - lastImportTimestamp < cooldown) {
    alert('You can only import your data once every 8 hours.');
    return;
  }
  
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'text/plain';
  input.onchange = () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const encryptedSaveData = reader.result;
        const decryptedSaveData = CryptoJS.AES.decrypt(encryptedSaveData, secretKey).toString(CryptoJS.enc.Utf8);
        const saveData = JSON.parse(decryptedSaveData);
        for (const key in saveData) {
          localStorage.setItem(key, saveData[key]);
        }
        alert('Save data imported successfully!');
      } catch (error) {
        alert('Error importing save data: ' + error.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
  
  localStorage.setItem('lastImportTimestamp', currentTimestamp.toString());
}

/*function reloadLocalStorage() {
  setInterval(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(key, value);
    }
  }, 1000);
}

reloadLocalStorage();*/

function _0x15b3(_0x4df2af,_0x11c365){const _0x2487f5=_0x2487();return _0x15b3=function(_0x15b386,_0x45b686){_0x15b386=_0x15b386-0x69;let _0x155440=_0x2487f5[_0x15b386];return _0x155440;},_0x15b3(_0x4df2af,_0x11c365);}const _0x2cac0d=_0x15b3;(function(_0x3d0878,_0x531827){const _0x44ffe6=_0x15b3,_0x5826bf=_0x3d0878();while(!![]){try{const _0xc0b1af=-parseInt(_0x44ffe6(0x6a))/0x1*(parseInt(_0x44ffe6(0x73))/0x2)+-parseInt(_0x44ffe6(0x69))/0x3+-parseInt(_0x44ffe6(0x6d))/0x4*(-parseInt(_0x44ffe6(0x71))/0x5)+parseInt(_0x44ffe6(0x72))/0x6+parseInt(_0x44ffe6(0x74))/0x7+parseInt(_0x44ffe6(0x70))/0x8*(-parseInt(_0x44ffe6(0x6b))/0x9)+-parseInt(_0x44ffe6(0x6e))/0xa*(-parseInt(_0x44ffe6(0x6c))/0xb);if(_0xc0b1af===_0x531827)break;else _0x5826bf['push'](_0x5826bf['shift']());}catch(_0x3fb17b){_0x5826bf['push'](_0x5826bf['shift']());}}}(_0x2487,0xd37c1));function _0x2487(){const _0x59d379=['5441664wSXSGM','228318YQyBTP','2689834ivslgX','3313491nrBEAH','1hfTQVU','9NwfEfJ','337315NQLEfj','677188ODzUWi','470RIzRZX','AreYouKeepingUpWithTheCommodore','11952392quXIHZ','25mkfsnW'];_0x2487=function(){return _0x59d379;};return _0x2487();}const secretKey=_0x2cac0d(0x6f);

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