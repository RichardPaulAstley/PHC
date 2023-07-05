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

const specialTokens = tokenExchange.filter(token => token.type === "special" || token.type === "missingno");
const noveltyTokens = tokenExchange.filter(token => token.type === "novelty");
const legendaryTokens = tokenExchange.filter(token => token.type === "legendary");
const eventTokens = tokenExchange.filter(token => token.type === "event");

function exchangeTokens() {
  const tokenInventory = JSON.parse(localStorage.getItem("tokenInventory"));
  const team = JSON.parse(localStorage.getItem("team"));

  // find the exchange information for the clicked button
  const exchangeInfo = tokenExchange.find(exchange => exchange.pokemon === event.target.dataset.token);

  // check if player has enough tokens to exchange
  let totalTokens = 0;
  if (exchangeInfo.type && exchangeInfo.amount) {
    const matchingInventoryToken = tokenInventory.find(invToken => invToken.type === exchangeInfo.type);
    if (matchingInventoryToken && matchingInventoryToken.amount >= exchangeInfo.amount) {
      let confirmTokenMessage = `Are you sure you want to use your ${exchangeInfo.type} tokens?`;
      if (!confirm(confirmTokenMessage)) {
        return;
      }
      totalTokens += exchangeInfo.amount;
    }
  }
  if (totalTokens < exchangeInfo.amount) {
    window.alert("Not enough tokens to make the exchange.");
    return;
  }

  // check if team is not already full
  if (team.length >= 6) {
    window.alert("Your team is already full.");
    return;
  }

  // find the corresponding pokemon in the database
  const pokemon = pokemonDatabase.find(p => p.name === exchangeInfo.pokemon);

  // generate the egg
  const egg = {
    species: pokemon.name,
    eggSteps: 0,
    level: 0,
    experience: 0,
    gender: "none",
    isEgg: true,
    isShiny: false,
    sprite: pokemon.egg_sprite
  };

  if (egg.species === "Unown") {
    egg.sprite = "sprites/egg/unown.png";
  }


  // remove the tokens from the inventory
  if (exchangeInfo.type && exchangeInfo.amount) {
    const matchingInventoryTokenIndex = tokenInventory.findIndex(invToken => invToken.type === exchangeInfo.type);
    if (matchingInventoryTokenIndex >= 0) {
      tokenInventory[matchingInventoryTokenIndex].amount -= exchangeInfo.amount;
      if (tokenInventory[matchingInventoryTokenIndex].amount === 0) {
        tokenInventory.splice(matchingInventoryTokenIndex, 1);
      }
    }
  }

  // add the egg to the team
  team.push(egg);
  location.reload();

  // update the local storage
  localStorage.setItem("tokenInventory", JSON.stringify(tokenInventory));
  localStorage.setItem("team", JSON.stringify(team));

  window.alert(`You exchanged ${exchangeInfo.amount} ${exchangeInfo.type} Token(s) for a ${pokemon.name} egg!`);
}


const specialTableBody = document.querySelector(".token-table:first-of-type tbody");
specialTokens.forEach(token => {
  if (token.available) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="../${token.sprite}" alt="${token.pokemon}"></td>
      <td>${token.amount}</td>
      <td><button class="exchange-btn" data-token="${token.pokemon}" onclick="exchangeTokens()">Exchange</button></td>
    `;
    specialTableBody.appendChild(row);
  }
});

const specialTokenAmount = tokenInventory.find(token => token.type === "special")?.amount || 0;
document.getElementById("special-tokens").innerHTML = specialTokenAmount.toLocaleString() || 0;

const missingnoTokenAmount = tokenInventory.find(token => token.type === "missingno")?.amount || 0;
document.getElementById("missingno-tokens").innerHTML = missingnoTokenAmount.toLocaleString() || 0;


const noveltyTableBody = document.querySelector(".token-table:nth-of-type(2) tbody");
noveltyTokens.forEach(token => {
  if (token.available) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="../${token.sprite}" alt="${token.pokemon}"></td>
      <td>${token.amount}</td>
      <td><button class="exchange-btn" data-token="${token.pokemon}" onclick="exchangeTokens()">Exchange</button></td>
    `;
    noveltyTableBody.appendChild(row);
  }
});

const noveltyTokenAmount = tokenInventory.find(token => token.type === "novelty")?.amount || 0;
document.getElementById("novelty-tokens").innerHTML = noveltyTokenAmount.toLocaleString() || 0;

const eventTableBody = document.querySelector(".token-table:nth-of-type(3) tbody");
eventTokens.forEach(token => {
  if (token.available) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="../${token.sprite}" alt="${token.pokemon}"></td>
      <td>${token.amount}</td>
      <td><button class="exchange-btn" data-token="${token.pokemon}" onclick="exchangeTokens()">Exchange</button></td>
    `;
    eventTableBody.appendChild(row);
  }
});

const eventTokenAmount = tokenInventory.find(token => token.type === "event")?.amount || 0;
document.getElementById("event-tokens").innerHTML = eventTokenAmount.toLocaleString() || 0;

const legendaryTableBody = document.querySelector(".token-table:nth-of-type(4) tbody");
let filteredTokens = [...legendaryTokens];

function renderTokens() {
  legendaryTableBody.innerHTML = "";
  filteredTokens.forEach(token => {
    if (token.available) {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td><img src="../${token.sprite}" alt="${token.pokemon}"></td>
      <td>${token.amount}</td>
      <td><button class="exchange-btn" data-token="${token.pokemon}" onclick="exchangeTokens()">Exchange</button></td>
    `;
      legendaryTableBody.appendChild(row);
    }
  });
}

function filterTokensByGeneration(generation) {
  filteredTokens = legendaryTokens.filter(token => token.generation === generation);
  renderTokens();
}

filterTokensByGeneration(1);

const legendaryTokenAmount = tokenInventory.find(token => token.type === "legendary")?.amount || 0;
document.getElementById("legendary-tokens").innerHTML = legendaryTokenAmount.toLocaleString() || 0;

const generationDropdown = document.getElementById("generation-dropdown");
const selectElement = document.createElement("select");
const generationList = [...new Set(legendaryTokens.map(token => token.generation))];
generationList.forEach(generation => {
  const optionElement = document.createElement("option");
  optionElement.textContent = `Generation ${generation}`;
  optionElement.value = generation;
  selectElement.appendChild(optionElement);
});

selectElement.addEventListener("change", (event) => {
  const selectedGeneration = parseInt(event.target.value);
  filterTokensByGeneration(selectedGeneration);
});

generationDropdown.appendChild(selectElement);
renderTokens();