const pokemonDatabase = [
    {
      "id": 1,
      "name": 'Bulbasaur',
	  "gen" : 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 16,
	  		"evolves_to": "Ivysaur"
	  	},
	  ],
      "gender_rate": 87.5,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/bulbasaur.png",
	  "shiny_sprite": "sprites/pokemon/shiny/bulbasaur.png",
	  "egg_sprite": "sprites/egg/bulbasaur.png",
	  "rarity": "rare",
	  "evolution_stage": "base",
    },
    {
      "id": 2,
      "name": "Ivysaur",
	  "gen" : 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
      "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 32,
	  		"evolves_to": "Venusaur"
	  	},
	  ],
      "gender_rate": 87.5,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/ivysaur.png",
	  "shiny_sprite": "sprites/pokemon/shiny/ivysaur.png",
	  "rarity": "rare",
	  "evolution_stage": "first_stage",
    },
    {
      "id": 3,
      "name": "Venusaur",
	  "gen": 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
	  "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Mega Stone",
	  		"evolves_to": "Mega-Venusaur"
	  	},
	  ],
      "gender_rate": 87.5,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/venusaur.png",
	  "shiny_sprite": "sprites/pokemon/shiny/venusaur.png",
	  "rarity": "rare",
	  "evolution_stage": "second_stage",
    },
	{
      "id": 3.1,
      "name": "Mega-Venusaur",
	  "gen": 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
      "gender_rate": 87.5,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/mega-venusaur.png",
	  "shiny_sprite": "sprites/pokemon/shiny/mega-venusaur.png",
	  "rarity": "rare",
	  "evolution_stage": "mega_evolution",
    },
	{
      "id": 4,
      "name": "Charmander",
	  "gen": 1,
      "type": ["Fire"],
      "egg_steps": 5120,
	  "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Fire Stone",
	  		"evolves_to": "Charmeleon"
	  	},
	  ],
      "gender_rate": 87.5,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/charmander.png",
	  "shiny_sprite": "sprites/pokemon/shiny/charmander.png",
	  "egg_sprite": "sprites/egg/charmander.png",
	  "rarity": "rare",
	  "evolution_stage": "base",
    },
	{
      "id": 5,
      "name": "Charmeleon",
	  "gen": 1,
      "type": ["Fire"],
      "egg_steps": 5120,
      "gender_rate": 87.5,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/charmeleon.png",
	  "shiny_sprite": "sprites/pokemon/shiny/charmeleon.png",
	  "rarity": "rare",
	  "evolution_stage": "first_stage",
    },
  /*{
      "id": 1,
      "name": 'Eevee',
	  "gen": 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
	  "evolutions": [
		{
		  "methods": ["level"],
		  "value": 25,
		  "evolves_to": "Vaporeon"
		},
		{
		  "methods": ["gender", "item"],
		  "value": "female",
		  "item_name": "Water Stone",
		  "evolves_to": "Jolteon"
		},
		{
		  "methods": ["level", "item"],
		  "value": 30,
		  "item_name": "Thunder Stone",
		  "evolves_to": "Jolteon"
		}
	],
      "gender_rate": "87.5",
      "experience_group": "Medium Fast",
      "sprite": "bulbasaur.png",
	  "egg_sprite": "bulbasaur_egg.png",
	  "rarity": "rare",
	  "evolution_stage": "base",
    },*/
]