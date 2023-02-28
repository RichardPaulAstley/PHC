const pcTeamBoxes = document.querySelectorAll(".pc-team-box");

for (let i = 0; i < team.length; i++) {
  const pokemon = team[i];
  const pcTeamBox = pcTeamBoxes[i];
  const pcTeamSprite = pcTeamBox.querySelector(".pc-team-sprite");
  pcTeamSprite.src = pokemon.sprite;
}

const pokemonBoxes = document.querySelectorAll(".pc-team-box");
  pokemonBoxes.forEach((pokemonBox, index) => {
  pokemonBox.addEventListener("click", (event) => {
  if (event.shiftKey || (event.type === "touchstart" && event.type === "touchend")) {
	if (event.ctrlKey && event.shiftKey) {
	const confirmRelease = window.confirm(`Are you sure you want to release all non-egg and non-Shiny Pokemon from your team?`);
	  if (confirmRelease) {
	  team = team.filter((pokemon) => pokemon.isEgg || pokemon.isShiny);
	  renderTeam();
	  localStorage.setItem("team", JSON.stringify(team));
	  location.reload();
	  }
	} else {
	  if (team[index].isEgg) {
	  window.alert("You can't release eggs");
	  return;
}
	const confirmRelease = window.confirm(`Are you sure you want to release ${team[index].species}?`);
	if (confirmRelease) {
	  team.splice(index, 1);
	  renderTeam();
	  localStorage.setItem("team", JSON.stringify(team));
	  location.reload();
	  }
	}
  }
});
});

/* PC Système */

const pcContainer = document.querySelector(".pc-team-container");
const storageContainer = document.querySelector(".pc-storage-container");

let numExtensions = 0;
inventory.forEach((item) => {
  if (item.name === "PC Extension") {
    numExtensions += item.amount;
  }
});

const totalBoxes = 10 + numExtensions;
const boxCapacity = 30;
const totalSlots = totalBoxes * boxCapacity;

let nwBox = 0;
for (let i = 0; i < totalSlots; i++) {
  if (i % boxCapacity === 0) {
    nwBox++;

    const newBox = document.createElement("div");
    newBox.classList.add("pc-box");

    const newBoxHeader = document.createElement("h2");
    newBoxHeader.textContent = "Box " + nwBox;
    newBox.appendChild(newBoxHeader);

    storageContainer.appendChild(newBox);
  }

  const newSlot = document.createElement("div");
  newSlot.classList.add("pc-storage-box");
  newSlot.id = `slot-${i + 1}`;

 const newSprite = document.createElement("img");
newSprite.src = "sprites/none.png";
newSprite.alt = "Pokemon sprite";
newSprite.classList.add("pc-storage-sprite");

  const lastBox = storageContainer.lastChild;
  lastBox.appendChild(newSlot);
}

function renderTeam(arr, container) {
  var container = document.getElementById(container);
  container.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var pokeball = document.createElement("div");
    pokeball.className = "pokeball";
    pokeball.style.backgroundImage = "url(" + getPokeballSprite(arr[i].ball) + ")";
    var img = document.createElement("img");
    img.src = arr[i].sprite;
    img.addEventListener("click", function() {
      swapPokeballs(this, arr, container);
    });
    pokeball.appendChild(img);
    container.appendChild(pokeball);
  }
}

renderTeam(team, "pc-team-box");
renderTeam(storage, "pc-storage-box");

/* Moving */