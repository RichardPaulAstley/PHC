function addBuyEvent(itemActionButton, item) {
  itemActionButton.addEventListener("click", function () {
    let amount = parseInt(prompt("How many items would you like to buy?"));
    if (isNaN(amount) || amount <= 0) {
      return alert("Invalid input.");
    }

    if (amount > item.max_amount) {
      return alert(`You can't buy more than ${item.max_amount} ${item.name}s.`);
    }

    let totalPrice = amount * item.price;
    if (totalPrice > balance.pokeDollar) {
      return alert("Not enough funds.");
    }

    let inventoryItem = inventory.find(i => i.name === item.name);
    let maxInventoryAmount = item.max_amount;
    if (inventoryItem) {
      maxInventoryAmount -= inventoryItem.amount;
    }

    if (amount > maxInventoryAmount) {
      return alert(`You already own the max amount of this item.`);
    }

    if (!confirm(`Would you like to buy ${amount} ${item.name} for ${totalPrice} Pokédollars?`)) {
      return;
    }

    balance.pokeDollar -= totalPrice;
    if (inventoryItem) {
      inventoryItem.amount += amount;
    } else {
      inventory.push({ name: item.name, amount: amount });
    }

    localStorage.setItem("balance", JSON.stringify(balance));
    localStorage.setItem("inventory", JSON.stringify(inventory));
    document.getElementById("currency-amount").innerHTML = balance.pokeDollar.toLocaleString();
    location.reload();

    alert(`Successfully bought ${amount} ${item.name} for ${totalPrice} Pokédollars.`);

  });
}


let inventoryItems = document.querySelector("#inventory-items");

itemDatabase.forEach(function (item) {
  let itemRow = document.createElement("tr");

  let itemName = document.createElement("td");
  let itemImage = document.createElement("img");
  itemImage.src = `../` + item.sprite;
  itemImage.style.width = "32px";
  itemImage.style.height = "32px";
  itemName.appendChild(itemImage);

  let itemNameText = document.createElement("div");
  itemNameText.textContent = item.name;
  itemNameText.style.fontSize = "10px";
  itemName.appendChild(itemNameText);

  itemRow.appendChild(itemName);

  let itemDescription = document.createElement("td");
  itemDescription.textContent = item.description;
  itemRow.appendChild(itemDescription);

  let itemPrice = document.createElement("td");
  let formattedPrice = new Intl.NumberFormat().format(item.price);
  itemPrice.textContent = formattedPrice;
  itemRow.appendChild(itemPrice);

  let itemActions = document.createElement("td");
  let itemActionButton = document.createElement("button");
  itemActionButton.textContent = "Buy";
  itemActionButton.style.width = "40px";
  itemActionButton.style.height = "30px";
  itemActions.appendChild(itemActionButton);
  itemRow.appendChild(itemActions);

  addBuyEvent(itemActionButton, item);

  inventoryItems.appendChild(itemRow);
});


/* Inventory */

function addSellButton(item, itemData, sellButton) {
  sellButton.addEventListener('click', () => {
    let sellAmount = prompt("How many items would you like to sell?");
    if (sellAmount > item.amount) {
      alert("You don't have enough items to sell");
      return;
    }

    if (sellAmount <= 0) {
      alert("Invalid amount");
      return;
    }

    let sellPrice = itemData.price * 0.6;

    if (!confirm(`Are you sure you want to sell ${sellAmount} of ${item.name} for a total of ${sellPrice * sellAmount} PokéDollars?`)) return;

    item.amount -= sellAmount;
    balance.pokeDollar += sellPrice * sellAmount;

    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("balance", JSON.stringify(balance));
    location.reload();
  });
}

let sellingItems = document.querySelector('#selling-items');


for (let item of inventory) {
  if (item.amount <= 0) continue;

  let itemData = itemDatabase.find(i => i.name === item.name);
  let row = document.createElement('tr');

  let itemCell = document.createElement('td');
  let itemImage = document.createElement('img');
  itemImage.src = `../` + itemData.sprite;
  itemImage.width = 32;
  itemImage.height = 32;
  itemCell.appendChild(itemImage);

  let itemName = document.createElement('p');
  itemName.textContent = item.name;
  itemName.style.fontSize = "10px";
  itemCell.appendChild(itemName);
  row.appendChild(itemCell);

  let descriptionCell = document.createElement('td');
  descriptionCell.textContent = itemData.description;
  row.appendChild(descriptionCell);

  let amountCell = document.createElement('td');
  amountCell.textContent = item.amount;
  row.appendChild(amountCell);

  let useCell = document.createElement('td');
  if (itemData.effect) {
    let useButton = document.createElement('button');
    useButton.textContent = 'Use';
    useButton.style.width = '40px';
    useButton.style.height = '30px';
    useCell.appendChild(useButton);
  }
  row.appendChild(useCell);

  if (itemData.type !== "Upgrade") {
    let sellButton = document.createElement('button');
    sellButton.textContent = 'Sell';
    sellButton.style.width = '40px';
    sellButton.style.height = '30px';

    addSellButton(item, itemData, sellButton);

    let sellCell = document.createElement('td');
    sellCell.appendChild(sellButton);
    row.appendChild(sellCell);
  }

  sellingItems.appendChild(row);
}