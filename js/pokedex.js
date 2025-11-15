// Fonction pour charger les données du Pokédex depuis localStorage
function getPokedexData() {
  const pokedexData = localStorage.getItem("pokedex");
  return pokedexData ? JSON.parse(pokedexData) : {};
}

// Fonction pour obtenir les statistiques d'un Pokémon
function getPokedexEntry(pokemonId) {
  const pokedex = getPokedexData();
  const idString = String(pokemonId);
  return pokedex[idString] || { "n": 0, "s": 0 };
}

// Fonction pour grouper les Pokémon par génération
function groupPokemonByGeneration() {
  const grouped = {};
  
  pokemonDatabase.forEach(pokemon => {
    const gen = pokemon.gen;
    if (!grouped[gen]) {
      grouped[gen] = [];
    }
    grouped[gen].push(pokemon);
  });
  
  // Trier chaque génération par ID
  Object.keys(grouped).forEach(gen => {
    grouped[gen].sort((a, b) => {
      // Gérer les IDs décimaux (comme 3.1, 3.2)
      return a.id - b.id;
    });
  });
  
  return grouped;
}

// Fonction pour trier les générations (numériques d'abord, puis alphabétiques)
function sortGenerations(generations) {
  const numeric = [];
  const nonNumeric = [];
  
  generations.forEach(gen => {
    const num = Number(gen);
    if (!isNaN(num) && isFinite(num)) {
      numeric.push({ gen, value: num });
    } else {
      nonNumeric.push({ gen, value: gen });
    }
  });
  
  numeric.sort((a, b) => a.value - b.value);
  nonNumeric.sort((a, b) => a.value.localeCompare(b.value));
  
  return [...numeric.map(g => g.gen), ...nonNumeric.map(g => g.gen)];
}

// Fonction pour créer une carte de Pokémon
function createPokemonCard(pokemon, pokedexEntry) {
  const card = document.createElement('div');
  card.className = 'pokedex-pokemon-card';
  
  const isObtained = pokedexEntry.n > 0;
  const hasShiny = pokedexEntry.s >= 1;
  
  // Image du sprite
  const imgContainer = document.createElement('div');
  imgContainer.className = 'pokedex-sprite-container';
  
  const img = document.createElement('img');
  // Utiliser le sprite shiny si le Pokémon a au moins 1 shiny obtenu
  const defaultSprite = hasShiny && pokemon.shiny_sprite ? pokemon.shiny_sprite : pokemon.sprite;
  img.src = `../${defaultSprite}`;
  img.alt = pokemon.name;
  img.className = 'pokedex-sprite';
  
  // Appliquer le filtre noir si non obtenu
  if (!isObtained) {
    img.classList.add('not-obtained');
  }
  
  // Gérer le basculement entre sprite normal et egg_sprite au double-clic
  let isShowingEgg = false;
  const normalSprite = hasShiny && pokemon.shiny_sprite ? pokemon.shiny_sprite : pokemon.sprite;
  const eggSprite = pokemon.egg_sprite;
  
  if (eggSprite) {
    img.addEventListener('dblclick', function() {
      if (isShowingEgg) {
        // Revenir au sprite normal
        img.src = `../${normalSprite}`;
        isShowingEgg = false;
      } else {
        // Afficher le sprite d'œuf
        img.src = `../${eggSprite}`;
        isShowingEgg = true;
      }
      // Maintenir le filtre noir si le Pokémon n'est pas obtenu
      if (!isObtained) {
        img.classList.add('not-obtained');
      }
    });
  }
  
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);
  
  // Afficher les compteurs (toujours affichés, même si 0/0)
  const counters = document.createElement('div');
  counters.className = 'pokedex-counters';
  
  const totalCounter = document.createElement('span');
  totalCounter.className = 'pokedex-counter-total';
  totalCounter.textContent = `${pokedexEntry.n}`;
  counters.appendChild(totalCounter);
  
  const separator = document.createElement('span');
  separator.textContent = ' / ';
  separator.style.margin = '0 2px';
  counters.appendChild(separator);
  
  const shinyCounter = document.createElement('span');
  shinyCounter.className = 'pokedex-counter-shiny';
  shinyCounter.textContent = `${pokedexEntry.s}`;
  counters.appendChild(shinyCounter);
  
  card.appendChild(counters);
  
  // Tooltip avec egg_steps et rarity
  card.title = `Egg Steps: ${pokemon.egg_steps}\nRarity: ${pokemon.rarity}`;
  
  // Ajouter l'ID du Pokémon comme attribut pour le filtrage
  card.setAttribute('data-pokemon-id', pokemon.id);
  
  return card;
}

// Fonction pour calculer les statistiques d'une liste de Pokémon
function calculateStats(pokemonList) {
  const total = pokemonList.length;
  let normal = 0;
  let shiny = 0;
  
  pokemonList.forEach(pokemon => {
    const entry = getPokedexEntry(pokemon.id);
    if (entry.n > 0) {
      normal++;
    }
    if (entry.s >= 1) {
      shiny++;
    }
  });
  
  const normalPercent = total > 0 ? ((normal / total) * 100).toFixed(1) : 0;
  const shinyPercent = total > 0 ? ((shiny / total) * 100).toFixed(1) : 0;
  
  return {
    total,
    normal,
    shiny,
    normalPercent,
    shinyPercent
  };
}

// Fonction pour créer un élément de statistiques
function createStatsElement(stats) {
  const statsDiv = document.createElement('div');
  statsDiv.className = 'pokedex-stats';
  
  const normalText = document.createElement('span');
  normalText.textContent = `(${stats.normal} / ${stats.total}) [${stats.normalPercent}%]`;
  normalText.className = 'pokedex-stat-normal';
  
  const shinyText = document.createElement('span');
  shinyText.textContent = `(${stats.shiny} / ${stats.total}) [${stats.shinyPercent}%]`;
  shinyText.className = 'pokedex-stat-shiny';
  
  statsDiv.appendChild(normalText);
  statsDiv.appendChild(document.createTextNode(' '));
  statsDiv.appendChild(shinyText);
  
  return statsDiv;
}

// Fonction pour créer un bouton de filtre
function createFilterButton(type, tableElement) {
  const button = document.createElement('button');
  button.className = 'pokedex-filter-button';
  button.textContent = type === 'normal' ? 'Normal' : 'Shiny';
  
  let showObtained = true;
  
  button.addEventListener('click', function() {
    showObtained = !showObtained;
    
    const cards = tableElement.querySelectorAll('.pokedex-pokemon-card');
    cards.forEach(card => {
      const pokemonId = card.getAttribute('data-pokemon-id');
      if (pokemonId) {
        const entry = getPokedexEntry(parseFloat(pokemonId));
        
        let shouldShow = false;
        if (type === 'normal') {
          shouldShow = showObtained ? entry.n > 0 : entry.n === 0;
        } else {
          shouldShow = showObtained ? entry.s >= 1 : entry.s === 0;
        }
        
        card.style.display = shouldShow ? 'flex' : 'none';
      }
    });
    
    // Mettre à jour le texte du bouton
    button.textContent = showObtained 
      ? (type === 'normal' ? 'Normal' : 'Shiny')
      : (type === 'normal' ? 'Normal (Missing)' : 'Shiny (Missing)');
  });
  
  return button;
}

// Fonction pour créer un tableau pour une génération
function createGenerationTable(gen, pokemonList) {
  const section = document.createElement('section');
  section.className = 'pokedex-generation';
  
  const titleContainer = document.createElement('div');
  titleContainer.className = 'pokedex-generation-header';
  
  const title = document.createElement('h2');
  // Afficher "Génération X" pour les numériques, sinon juste le nom
  const isNumeric = !isNaN(Number(gen)) && isFinite(Number(gen));
  title.textContent = isNumeric ? `Generation ${gen}` : gen;
  titleContainer.appendChild(title);
  
  // Calculer et afficher les statistiques de la génération
  const genStats = calculateStats(pokemonList);
  const genStatsElement = createStatsElement(genStats);
  titleContainer.appendChild(genStatsElement);
  
  // Créer les boutons de filtre
  const filterButtonsContainer = document.createElement('div');
  filterButtonsContainer.className = 'pokedex-filter-buttons';
  
  const table = document.createElement('div');
  table.className = 'pokedex-table';
  
  pokemonList.forEach(pokemon => {
    const pokedexEntry = getPokedexEntry(pokemon.id);
    const card = createPokemonCard(pokemon, pokedexEntry);
    table.appendChild(card);
  });
  
  // Créer les boutons de filtre avec référence à la table
  const normalButton = createFilterButton('normal', table);
  const shinyButton = createFilterButton('shiny', table);
  
  filterButtonsContainer.appendChild(normalButton);
  filterButtonsContainer.appendChild(shinyButton);
  titleContainer.appendChild(filterButtonsContainer);
  
  section.appendChild(titleContainer);
  section.appendChild(table);
  return section;
}

// Fonction principale pour afficher le Pokédex
function displayPokedex() {
  const container = document.getElementById('pokedex-container');
  if (!container) return;
  
  // Vider le conteneur
  container.innerHTML = '';
  
  // Calculer et afficher les statistiques globales
  const globalStats = calculateStats(pokemonDatabase);
  const globalStatsElement = createStatsElement(globalStats);
  globalStatsElement.className = 'pokedex-stats pokedex-stats-global';
  container.appendChild(globalStatsElement);
  
  // Grouper les Pokémon par génération
  const groupedByGen = groupPokemonByGeneration();
  
  // Obtenir les générations triées (numériques d'abord, puis alphabétiques)
  const allGenerations = Object.keys(groupedByGen);
  const sortedGenerations = sortGenerations(allGenerations);
  
  // Créer un tableau pour chaque génération d'abord
  const generationSections = [];
  sortedGenerations.forEach(gen => {
    const section = createGenerationTable(gen, groupedByGen[gen]);
    generationSections.push(section);
    container.appendChild(section);
  });
  
  // Créer les boutons de filtre globaux (qui filtrent toutes les générations)
  const globalFilterContainer = document.createElement('div');
  globalFilterContainer.className = 'pokedex-filter-buttons pokedex-filter-buttons-global';
  
  const globalNormalButton = document.createElement('button');
  globalNormalButton.className = 'pokedex-filter-button';
  globalNormalButton.textContent = 'Normal';
  
  const globalShinyButton = document.createElement('button');
  globalShinyButton.className = 'pokedex-filter-button';
  globalShinyButton.textContent = 'Shiny';
  
  let globalNormalShowObtained = true;
  let globalShinyShowObtained = true;
  
  globalNormalButton.addEventListener('click', function() {
    globalNormalShowObtained = !globalNormalShowObtained;
    generationSections.forEach(section => {
      const table = section.querySelector('.pokedex-table');
      const cards = table.querySelectorAll('.pokedex-pokemon-card');
      cards.forEach(card => {
        const pokemonId = card.getAttribute('data-pokemon-id');
        if (pokemonId) {
          const entry = getPokedexEntry(parseFloat(pokemonId));
          const shouldShow = globalNormalShowObtained ? entry.n > 0 : entry.n === 0;
          card.style.display = shouldShow ? 'flex' : 'none';
        }
      });
    });
    globalNormalButton.textContent = globalNormalShowObtained ? 'Normal' : 'Normal (Missing)';
  });
  
  globalShinyButton.addEventListener('click', function() {
    globalShinyShowObtained = !globalShinyShowObtained;
    generationSections.forEach(section => {
      const table = section.querySelector('.pokedex-table');
      const cards = table.querySelectorAll('.pokedex-pokemon-card');
      cards.forEach(card => {
        const pokemonId = card.getAttribute('data-pokemon-id');
        if (pokemonId) {
          const entry = getPokedexEntry(parseFloat(pokemonId));
          const shouldShow = globalShinyShowObtained ? entry.s >= 1 : entry.s === 0;
          card.style.display = shouldShow ? 'flex' : 'none';
        }
      });
    });
    globalShinyButton.textContent = globalShinyShowObtained ? 'Shiny' : 'Shiny (Missing)';
  });
  
  globalFilterContainer.appendChild(globalNormalButton);
  globalFilterContainer.appendChild(globalShinyButton);
  
  // Insérer les boutons globaux après les stats globales
  globalStatsElement.insertAdjacentElement('afterend', globalFilterContainer);
}

// Initialiser le Pokédex quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
  displayPokedex();
});

