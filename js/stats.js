let team = []

if (localStorage.getItem("team")) {
  team = JSON.parse(localStorage.getItem("team"));
}

let daycare = {
  parent0: null,
  parent1: null,
  isCompatible: false,
  eggsAvailable: {
    species: null,
    amount: 0,
    clicsBeforeNextEgg: 0,
  },
}

if (!localStorage.getItem("daycare")) {
  localStorage.setItem("daycare", JSON.stringify(daycare));
} else {
  // If it's already in local storage, load it into your 'daycare' variable
  daycare = JSON.parse(localStorage.getItem("daycare"));
}


let eggData = {
  clicks: 0,
  idleClicks: 0,
  hatches: 0,
  shinyHatches: 0,
}

let balance = {
  pokeDollar: 0
}

function initializeInventory() {
  let inventoryData = localStorage.getItem("inventory");
  if (!inventoryData || JSON.parse(inventoryData).length === 0) {
    // If inventory data doesn't exist in local storage or is empty, initialize it with the default value
    let defaultInventory = [{"name":"Soothe Bell","amount":0}];
    localStorage.setItem("inventory", JSON.stringify(defaultInventory));
    return defaultInventory;
  } else {
    // If inventory data exists in local storage, parse and return it
    return JSON.parse(inventoryData);
  }
}

let inventory = initializeInventory();

let tokenInventory = []

// Function to generate a random number between 0 and 255
function generateRandomNumber() {
  return Math.floor(Math.random() * 256);
}

// Function to check if the "prng" value exists in local storage, if not, generate and save it
function initializePrngValue() {
  const prngValue = JSON.parse(localStorage.getItem('prng'));
  if (prngValue === null || typeof prngValue !== 'number') {
    const newPrngValue = generateRandomNumber();
    localStorage.setItem('prng', JSON.stringify(newPrngValue));
  }
}

// Call the initializePrngValue function only when the "prng" value is not already present
const prngValue = JSON.parse(localStorage.getItem('prng'));
if (prngValue === null || typeof prngValue !== 'number') {
  initializePrngValue();
}

function getPrngValue() {
  const prngValue = JSON.parse(localStorage.getItem('prng'));
  return prngValue || 0;
}

function reRollPrngValue() {
  const newPrngValue = generateRandomNumber();
  localStorage.setItem('prng', JSON.stringify(newPrngValue));
}


window.addEventListener("load", function () {
  if (localStorage.getItem("eggData")) {
    eggData = JSON.parse(localStorage.getItem("eggData"));
  }
  document.getElementById("eggs-hatched").innerHTML = eggData.hatches || 0;
  document.getElementById("shiny-hatched").innerHTML = eggData.shinyHatches || 0;
  document.getElementById("clicks-done").innerHTML = eggData.clicks || 0;
  document.getElementById("idleClicks-done").innerHTML = eggData.idleClicks || 0;
});

window.addEventListener("load", function () {
  if (localStorage.getItem("balance")) {
    balance = JSON.parse(localStorage.getItem("balance"));
  }
  document.getElementById("currency-amount").innerHTML = balance.pokeDollar.toLocaleString() || 0;
});

window.addEventListener("load", function () {
  if (localStorage.getItem("team")) {
    team = JSON.parse(localStorage.getItem("team"));
  }
  document.getElementById("team-length").innerHTML = team.length.toLocaleString() || 0;
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

function updateDaycareDisplay() {
  if (localStorage.getItem('daycare')) {
    let daycareCheck = JSON.parse(localStorage.getItem('daycare'));
    let daycareDisplay = daycareCheck.eggsAvailable.amount;
    if (daycareDisplay > 0) {
      document.getElementById('daycare-display').textContent = daycareDisplay;
    } else {
      document.getElementById('daycare-display').textContent = '';
    }
  }
}

updateDaycareDisplay();

window.addEventListener("load", function () {
  if (localStorage.getItem("daycare")) {
    daycare = JSON.parse(localStorage.getItem("daycare"));
  }
  updateDaycareDisplay();
});

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

// Store the original page title
const originalTitle = document.title;

function updateEggsReadyToHatch() {
  const count = countReadyToHatchEggs();

  if (count > 0) {
    document.title = `(${count}) ${originalTitle}`;
    document.getElementById("eggs-ready-to-hatch").textContent = count;
  } else {
    document.title = originalTitle;
    document.getElementById("eggs-ready-to-hatch").textContent = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateEggsReadyToHatch();
});

function exportSave() {
  const saveData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    saveData[key] = localStorage.getItem(key);
  }

  const saveDataJson = JSON.stringify(saveData);
  const encryptedSaveData = CryptoJS.AES.encrypt(saveDataJson, secretKey).toString();
  const blob = new Blob([encryptedSaveData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  if (confirm('Are you sure you want to download the file?')) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'PHC-save.txt';
    link.click();
  }
}

function importSave() {
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

  // Confirm import with user
  const confirmImport = confirm('Are you sure you want to import save data? This will overwrite your current save data.');
  if (confirmImport) {
    input.click();
  }
}

const _0xcbfe40 = _0x1376; function _0x3fce() { const _0x33f211 = ['2212884wSXdsq', '669837tViMfR', '40BoBHlH', 'CauseTheCommodoreIsKeepingUpWithYou', '3591424UEbWgn', '303704YBQXvY', '1247106exeMki', '278156CMPkJf', '1482366rqIDvW']; _0x3fce = function () { return _0x33f211; }; return _0x3fce(); } (function (_0x558281, _0x10dc23) { const _0x57f7bd = _0x1376, _0x5aa1b4 = _0x558281(); while (!![]) { try { const _0x436f07 = -parseInt(_0x57f7bd(0x1dd)) / 0x1 + parseInt(_0x57f7bd(0x1d5)) / 0x2 + -parseInt(_0x57f7bd(0x1d6)) / 0x3 + parseInt(_0x57f7bd(0x1db)) / 0x4 * (parseInt(_0x57f7bd(0x1d8)) / 0x5) + -parseInt(_0x57f7bd(0x1dc)) / 0x6 + -parseInt(_0x57f7bd(0x1d7)) / 0x7 + parseInt(_0x57f7bd(0x1da)) / 0x8; if (_0x436f07 === _0x10dc23) break; else _0x5aa1b4['push'](_0x5aa1b4['shift']()); } catch (_0x3a4a2e) { _0x5aa1b4['push'](_0x5aa1b4['shift']()); } } }(_0x3fce, 0x74bf1)); function _0x1376(_0x314f04, _0x449961) { const _0x3fcecc = _0x3fce(); return _0x1376 = function (_0x13766e, _0x55a080) { _0x13766e = _0x13766e - 0x1d5; let _0x2d1598 = _0x3fcecc[_0x13766e]; return _0x2d1598; }, _0x1376(_0x314f04, _0x449961); } const secretKey = _0xcbfe40(0x1d9);

function removeTimestamps() {
  if (localStorage.getItem('lastExportTimestamp')) {
    localStorage.removeItem('lastExportTimestamp');
  }
  if (localStorage.getItem('lastImportTimestamp')) {
    localStorage.removeItem('lastImportTimestamp');
  }
}

// Call the removeTimestamps function during page load
removeTimestamps();

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