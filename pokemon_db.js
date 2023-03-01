const pokemonDatabase = [
    {
      "id": 1,
      "name": "Bulbasaur",
	  "gen" : 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Grass"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 16,
	  		"evolves_to": "Ivysaur"
	  	},
	  ],
      "gender_rate": 87.5,
      "experience_group": 10599,
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
	  "egg_group": ["Monster", "Grass"],
      "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 32,
	  		"evolves_to": "Venusaur"
	  	},
	  ],
      "gender_rate": 87.5,
      "experience_group": 10599,
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
	  "egg_group": ["Monster", "Grass"],
	  "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Mega Stone",
	  		"evolves_to": "Mega-Venusaur"
	  	},
		{
	  		"method": ["item"],
	  		"value": "Max Mushrooms",
	  		"evolves_to": "Gigantamax-Venusaur-Venusaur"
	  	},
	  ],
      "gender_rate": 87.5,
      "experience_group": 10599,
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
	  "egg_group": ["Monster", "Grass"],
      "gender_rate": 87.5,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/mega-venusaur.png",
	  "shiny_sprite": "sprites/pokemon/shiny/mega-venusaur.png",
	  "rarity": "rare",
	  "evolution_stage": "mega_evolution",
    },
	{
      "id": 3.2,
      "name": "Gigantamax-Venusaur",
	  "gen": 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Grass"],
      "gender_rate": 87.5,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/gigantamax-venusaur.png",
	  "shiny_sprite": "sprites/pokemon/shiny/gigantamax-venusaur.png",
	  "rarity": "rare",
	  "evolution_stage": "gigantamax",
    },
	{
      "id": 4,
      "name": "Charmander",
	  "gen": 1,
      "type": ["Fire"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Dragon"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 16,
	  		"evolves_to": "Charmeleon"
	  	},
	  ],
      "gender_rate": 87.5,
      "experience_group": 10599,
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
	  "egg_group": ["Monster", "Dragon"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 36,
	  		"evolves_to": "Charizard"
	  	},
	  ],
      "gender_rate": 87.5,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/charmeleon.png",
	  "shiny_sprite": "sprites/pokemon/shiny/charmeleon.png",
	  "rarity": "rare",
	  "evolution_stage": "first_stage",
    },
	{
      "id": 6,
      "name": "Charizard",
	  "gen": 1,
      "type": ["Fire", "Flying"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Dragon"],
      "gender_rate": 87.5,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/charizard.png",
	  "shiny_sprite": "sprites/pokemon/shiny/charizard.png",
	  "rarity": "rare",
	  "evolution_stage": "second_stage",
    },
	{
	  "id": 7,
      "name": "Squirtle",
      "gen": 1,
      "type": ["Water"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Water 1"],
      "evolutions": [
		{
			"method": ["level"],
			"value": 16,
			"evolves_to": "Wartortle"
		}
	  ],
      "gender_rate": 87.5,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/squirtle.png",
      "shiny_sprite": "sprites/pokemon/shiny/squirtle.png",
	  "egg_sprite": "sprites/egg/squirtle.png",
      "rarity": "rare",
      "evolution_stage": "base",
	},
	{
	  "id": 8,
	  "name": "Wartortle",
	  "gen": 1,
	  "type": ["Water"],
	  "egg_steps": 5120,
	  "egg_group": ["Monster", "Water 1"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 36,
			"evolves_to": "Blastoise"
		}
	  ],
	  "gender_rate": 87.5,
	  "experience_group": 10599,
	  "sprite": "sprites/pokemon/wartortle.png",
	  "shiny_sprite": "sprites/pokemon/shiny/wartortle.png",
	  "rarity": "uncommon",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 9,
	  "name": "Blastoise",
	  "gen": 1,
	  "type": ["Water"],
	  "egg_steps": 5120,
	  "egg_group": ["Monster", "Water 1"],
	  "gender_rate": 87.5,
	  "experience_group": 10599,
	  "sprite": "sprites/pokemon/blastoise.png",
	  "shiny_sprite": "sprites/pokemon/shiny/blastoise.png",
	  "rarity": "rare",
	  "evolution_stage": "second_stage"
	},
	{
	  "id": 10,
      "name": "Caterpie",
      "gen": 1,
      "type": ["Bug"],
      "egg_steps": 3840,
	  "egg_group": ["Bug"],
      "evolutions": [
		{
			"method": ["level"],
			"value": 7,
			"evolves_to": "Metapod"
		}
	  ],
      "gender_rate": 50,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/caterpie.png",
      "shiny_sprite": "sprites/pokemon/shiny/caterpie.png",
	  "egg_sprite": "sprites/egg/caterpie.png",
      "rarity": "common",
      "evolution_stage": "base",
	},
	{
	  "id": 11,
	  "name": "Metapod",
	  "gen": 1,
	  "type": ["Bug"],
	  "egg_steps": 3840,
	  "egg_group": ["Bug"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 10,
			"evolves_to": "Butterfree"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/metapod.png",
	  "shiny_sprite": "sprites/pokemon/shiny/metapod.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 12,
	  "name": "Butterfree",
	  "gen": 1,
	  "type": ["Bug", "Flying"],
	  "egg_steps": 3840,
	  "egg_group": ["Bug"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/blastoise.png",
	  "shiny_sprite": "sprites/pokemon/shiny/blastoise.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage"
	},
	{
	  "id": 13,
      "name": "Weedle",
      "gen": 1,
      "type": ["Bug", "Poison"],
      "egg_steps": 3840,
	  "egg_group": ["Bug"],
      "evolutions": [
		{
			"method": ["level"],
			"value": 7,
			"evolves_to": "Kakuna"
		}
	  ],
      "gender_rate": 50,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/weedle.png",
      "shiny_sprite": "sprites/pokemon/shiny/weedle.png",
	  "egg_sprite": "sprites/egg/weedle.png",
      "rarity": "common",
      "evolution_stage": "base",
	},
	{
	  "id": 14,
	  "name": "Kakuna",
	  "gen": 1,
	  "type": ["Bug", "Poison"],
	  "egg_steps": 3840,
	  "egg_group": ["Bug"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 10,
			"evolves_to": "Beedrill"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/kakuna.png",
	  "shiny_sprite": "sprites/pokemon/shiny/kakuna.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 15,
	  "name": "Beedrill",
	  "gen": 1,
	  "type": ["Bug", "Poison"],
	  "egg_steps": 3840,
	  "egg_group": ["Bug"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/beedrill.png",
	  "shiny_sprite": "sprites/pokemon/shiny/beedrill.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage"
	},
	{
	  "id": 16,
      "name": "Pidgey",
      "gen": 1,
      "type": ["Normal", "Flying"],
      "egg_steps": 3840,
	  "egg_group": ["Flying"],
      "evolutions": [
		{
			"method": ["level"],
			"value": 18,
			"evolves_to": "Pidgeotto"
		}
	  ],
      "gender_rate": 50,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/pidgey.png",
      "shiny_sprite": "sprites/pokemon/shiny/pidgey.png",
	  "egg_sprite": "sprites/egg/pidgey.png",
      "rarity": "common",
      "evolution_stage": "base",
	},
	{
	  "id": 17,
      "name": "Pidgeotto",
      "gen": 1,
      "type": ["Normal", "Flying"],
      "egg_steps": 3840,
	  "egg_group": ["Flying"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 36,
			"evolves_to": "Pidgeot"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10599,
	  "sprite": "sprites/pokemon/pidgeotto.png",
	  "shiny_sprite": "sprites/pokemon/shiny/pidgeotto.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 18,
      "name": "Pidgeot",
      "gen": 1,
      "type": ["Normal", "Flying"],
      "egg_steps": 3840,
	  "egg_group": ["Flying"],
	  "gender_rate": 50,
	  "experience_group": 10599,
	  "sprite": "sprites/pokemon/pidgeot.png",
	  "shiny_sprite": "sprites/pokemon/shiny/pidgeot.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage"
	},
	{
	  "id": 19,
      "name": "Rattata",
      "gen": 1,
      "type": ["Ground"],
      "egg_steps": 3840,
	  "egg_group": ["Normal"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 20,
			"evolves_to": "Raticate"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/rattata.png",
	  "shiny_sprite": "sprites/pokemon/shiny/rattata.png",
	  "egg_sprite": "sprites/egg/rattata.png",
	  "rarity": "common",
	  "evolution_stage": "base"
	},
	{
	  "id": 20,
      "name": "Raticate",
      "gen": 1,
      "type": ["Ground"],
      "egg_steps": 3840,
	  "egg_group": ["Normal"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/raticate.png",
	  "shiny_sprite": "sprites/pokemon/shiny/raticate.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 21,
      "name": "Spearow",
      "gen": 1,
      "type": ["Normal", "Flying"],
      "egg_steps": 3840,
	  "egg_group": ["Flying"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 20,
			"evolves_to": "Fearow"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/spearow.png",
	  "shiny_sprite": "sprites/pokemon/shiny/spearow.png",
	  "egg_sprite": "sprites/egg/spearow.png",
	  "rarity": "common",
	  "evolution_stage": "base"
	},
	{
	  "id": 22,
      "name": "Fearow",
      "gen": 1,
      "type": ["Normal", "Flying"],
      "egg_steps": 3840,
	  "egg_group": ["Flying"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/fearow.png",
	  "shiny_sprite": "sprites/pokemon/shiny/fearow.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 23,
      "name": "Ekans",
      "gen": 1,
      "type": ["Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Ground", "Dragon"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 22,
			"evolves_to": "Arbok"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/ekans.png",
	  "shiny_sprite": "sprites/pokemon/shiny/ekans.png",
	  "egg_sprite": "sprites/egg/ekans.png",
	  "rarity": "uncommon",
	  "evolution_stage": "base"
	},
	{
	  "id": 24,
      "name": "Arbok",
      "gen": 1,
      "type": ["Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Ground", "Dragon"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/arbok.png",
	  "shiny_sprite": "sprites/pokemon/shiny/arbok.png",
	  "rarity": "uncommon",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 25,
      "name": "Pikachu",
      "gen": 1,
      "type": ["Electric"],
      "egg_steps": 2560,
	  "egg_group": ["Field", "Fairy"],
	  "evolutions": [
		{
			"method": ["item"],
			"value": "Thunder Stone",
			"evolves_to": "Raichu"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/pikachu.png",
	  "shiny_sprite": "sprites/pokemon/shiny/pikachu.png",
	  "rarity": "uncommon",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 26,
      "name": "Raichu",
      "gen": 1,
      "type": ["Electric"],
      "egg_steps": 2560,
	  "egg_group": ["Field", "Fairy"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/raichu.png",
	  "shiny_sprite": "sprites/pokemon/shiny/raichu.png",
	  "rarity": "uncommon",
	  "evolution_stage": "second_stage"
	},
	{
	  "id": 27,
      "name": "Sandshrew",
      "gen": 1,
      "type": ["Ground"],
      "egg_steps": 5120,
	  "egg_group": ["Ground"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 22,
			"evolves_to": "Sandslash"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/sandshrew.png",
	  "shiny_sprite": "sprites/pokemon/shiny/sandshrew.png",
	  "egg_sprite": "sprites/egg/sandshrew.png",
	  "rarity": "common",
	  "evolution_stage": "base"
	},
	{
	  "id": 28,
      "name": "Sandslash",
      "gen": 1,
      "type": ["Ground"],
      "egg_steps": 5120,
	  "egg_group": ["Ground"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/sandslash.png",
	  "shiny_sprite": "sprites/pokemon/shiny/sandslash.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
      "id": 29,
      "name": "Nidoran F",
	  "gen" : 1,
      "type": ["Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Ground"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 16,
	  		"evolves_to": "Nidorina"
	  	},
	  ],
      "gender_rate": 0,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/nidoranf.png",
	  "shiny_sprite": "sprites/pokemon/shiny/nidoranf.png",
	  "egg_sprite": "sprites/egg/nidoranf.png",
	  "rarity": "common",
	  "evolution_stage": "base",
    },
    {
      "id": 30,
      "name": "Nidorina",
	  "gen" : 1,
      "type": ["Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Ground"],
      "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Moon Stone",
	  		"evolves_to": "Nidoqueen"
	  	},
	  ],
      "gender_rate": 0,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/nidorina.png",
	  "shiny_sprite": "sprites/pokemon/shiny/nidorina.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage",
    },
    {
      "id": 31,
      "name": "Nidoqueen",
	  "gen": 1,
      "type": ["Poison", "Ground"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Ground"],
      "gender_rate": 0,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/nidoqueen.png",
	  "shiny_sprite": "sprites/pokemon/shiny/nidoqueen.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
	{
      "id": 32,
      "name": "Nidoran M",
	  "gen" : 1,
      "type": ["Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Ground"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 16,
	  		"evolves_to": "Nidorino"
	  	},
	  ],
      "gender_rate": 100,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/nidoranm.png",
	  "shiny_sprite": "sprites/pokemon/shiny/nidoranm.png",
	  "egg_sprite": "sprites/egg/nidoranm.png",
	  "rarity": "common",
	  "evolution_stage": "base",
    },
    {
      "id": 33,
      "name": "Nidorino",
	  "gen" : 1,
      "type": ["Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Ground"],
      "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Moon Stone",
	  		"evolves_to": "Nidoking"
	  	},
	  ],
      "gender_rate": 100,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/nidorino.png",
	  "shiny_sprite": "sprites/pokemon/shiny/nidorino.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage",
    },
    {
      "id": 34,
      "name": "Nidoking",
	  "gen": 1,
      "type": ["Poison", "Ground"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Ground"],
      "gender_rate": 100,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/nidoking.png",
	  "shiny_sprite": "sprites/pokemon/shiny/nidoking.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
	{
	  "id": 35,
      "name": "Clefairy",
      "gen": 1,
      "type": ["Fairy"],
      "egg_steps": 2560,
	  "egg_group": ["Fairy"],
	  "evolutions": [
		{
			"method": ["item"],
			"value": "Moon Stone",
			"evolves_to": "Clefable"
		}
	  ],
	  "gender_rate": 25,
	  "experience_group": 8000,
	  "sprite": "sprites/pokemon/clefairy.png",
	  "shiny_sprite": "sprites/pokemon/shiny/clefairy.png",
	  "rarity": "uncommon",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 36,
      "name": "Clefable",
      "gen": 1,
      "type": ["Fairy"],
      "egg_steps": 2560,
	  "egg_group": ["Fairy"],
	  "gender_rate": 25,
	  "experience_group": 8000,
	  "sprite": "sprites/pokemon/clefable.png",
	  "shiny_sprite": "sprites/pokemon/shiny/clefable.png",
	  "rarity": "uncommon",
	  "evolution_stage": "second_stage"
	},
	{
	  "id": 37,
      "name": "Vulpix",
      "gen": 1,
      "type": ["Fire"],
      "egg_steps": 5120,
	  "egg_group": ["Ground"],
	  "evolutions": [
		{
			"method": ["item"],
			"value": "Fire Stone",
			"evolves_to": "Ninetales"
		}
	  ],
	  "gender_rate": 25,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/vulpix.png",
	  "shiny_sprite": "sprites/pokemon/shiny/vulpix.png",
	  "egg_sprite": "sprites/egg/vulpix.png",
	  "rarity": "rare",
	  "evolution_stage": "base"
	},
	{
	  "id": 38,
      "name": "Ninetales",
      "gen": 1,
      "type": ["Fire"],
      "egg_steps": 5120,
	  "egg_group": ["Ground"],
	  "gender_rate": 25,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/ninetales.png",
	  "shiny_sprite": "sprites/pokemon/shiny/ninetales.png",
	  "rarity": "rare",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 39,
      "name": "Jigglypuff",
      "gen": 1,
      "type": ["Normal", "Fairy"],
      "egg_steps": 2560,
	  "egg_group": ["Fairy"],
	  "evolutions": [
		{
			"method": ["item"],
			"value": "Moon Stone",
			"evolves_to": "Wigglytuff"
		}
	  ],
	  "gender_rate": 25,
	  "experience_group": 8000,
	  "sprite": "sprites/pokemon/jigglypuff.png",
	  "shiny_sprite": "sprites/pokemon/shiny/jigglypuff.png",
	  "rarity": "uncommon",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 40,
      "name": "Wigglytuff",
      "gen": 1,
      "type": ["Fairy"],
      "egg_steps": 2560,
	  "egg_group": ["Fairy"],
	  "gender_rate": 25,
	  "experience_group": 8000,
	  "sprite": "sprites/pokemon/wigglytuff.png",
	  "shiny_sprite": "sprites/pokemon/shiny/wigglytuff.png",
	  "rarity": "uncommon",
	  "evolution_stage": "second_stage"
	},
	{
      "id": 41,
      "name": "Zubat",
	  "gen" : 1,
      "type": ["Poison", "Flying"],
      "egg_steps": 3840,
	  "egg_group": ["Flying"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 22,
	  		"evolves_to": "Golbat"
	  	},
	  ],
      "gender_rate": 50,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/zubat.png",
	  "shiny_sprite": "sprites/pokemon/shiny/zubat.png",
	  "egg_sprite": "sprites/egg/zubat.png",
	  "rarity": "common",
	  "evolution_stage": "base",
    },
    {
      "id": 42,
      "name": "Golbat",
	  "gen" : 1,
      "type": ["Poison", "Flying"],
      "egg_steps": 3840,
	  "egg_group": ["Flying"],
      "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Soothe Bell",
	  		"evolves_to": "Crobat"
	  	},
	  ],
      "gender_rate": 50,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/golbat.png",
	  "shiny_sprite": "sprites/pokemon/shiny/golbat.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage",
    },
	{
      "id": 43,
      "name": "Oddish",
	  "gen" : 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Grass"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 21,
	  		"evolves_to": "Gloom"
	  	},
	  ],
      "gender_rate": 50,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/oddish.png",
	  "shiny_sprite": "sprites/pokemon/shiny/oddish.png",
	  "egg_sprite": "sprites/egg/oddish.png",
	  "rarity": "common",
	  "evolution_stage": "base",
    },
    {
      "id": 44,
      "name": "Gloom",
	  "gen" : 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Grass"],
      "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Leaf Stone",
	  		"evolves_to": "Vileplume"
	  	},
		{
	  		"method": ["item"],
	  		"value": "Sun Stone",
	  		"evolves_to": "Bellossom"
	  	},
	  ],
      "gender_rate": 50,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/gloom.png",
	  "shiny_sprite": "sprites/pokemon/shiny/gloom.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage",
    },
    {
      "id": 45,
      "name": "Vileplume",
	  "gen": 1,
      "type": ["Grass", "Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Grass"],
      "gender_rate": 50,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/vileplume.png",
	  "shiny_sprite": "sprites/pokemon/shiny/vileplume.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
	{
	  "id": 46,
      "name": "Paras",
      "gen": 1,
      "type": ["Bug", "Grass"],
      "egg_steps": 5120,
	  "egg_group": ["Bug", "Grass"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 24,
			"evolves_to": "Parasect"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/paras.png",
	  "shiny_sprite": "sprites/pokemon/shiny/paras.png",
	  "egg_sprite": "sprites/egg/paras.png",
	  "rarity": "common",
	  "evolution_stage": "base"
	},
	{
	  "id": 47,
      "name": "Parasect",
      "gen": 1,
      "type": ["Bug", "Grass"],
      "egg_steps": 5120,
	  "egg_group": ["Bug", "Grass"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/parasect.png",
	  "shiny_sprite": "sprites/pokemon/shiny/parasect.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
  /*{
      "id": 1,
      "name": "Eevee",
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
	{
      "id": 169,
      "name": "Crobat",
	  "gen": 2,
      "type": ["Poison", "Flying"],
      "egg_steps": 3840,
	  "egg_group": ["Flying"],
      "gender_rate": 50,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/crobat.png",
	  "shiny_sprite": "sprites/pokemon/shiny/crobat.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
	{
	  "id": 172,
      "name": "Pichu",
      "gen": 2,
      "type": ["Electric"],
      "egg_steps": 2560,
	  "egg_group": ["Undiscovered"],
	  "evolutions": [
		{
			"method": ["item"],
			"value": "Soothe Bell",
			"evolves_to": "Pikachu"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/pichu.png",
	  "shiny_sprite": "sprites/pokemon/shiny/pichu.png",
	  "egg_sprite": "sprites/egg/pichu.png",
	  "rarity": "uncommon",
	  "evolution_stage": "base"
	},
	{
	  "id": 173,
      "name": "Cleffa",
      "gen": 2,
      "type": ["Fairy"],
      "egg_steps": 2560,
	  "egg_group": ["Undiscovered"],
	  "evolutions": [
		{
			"method": ["item"],
			"value": "Soothe Bell",
			"evolves_to": "Clefairy"
		}
	  ],
	  "gender_rate": 25,
	  "experience_group": 8000,
	  "sprite": "sprites/pokemon/cleffa.png",
	  "shiny_sprite": "sprites/pokemon/shiny/cleffa.png",
	  "egg_sprite": "sprites/egg/cleffa.png",
	  "rarity": "uncommon",
	  "evolution_stage": "base"
	},
	{
	  "id": 174,
      "name": "Igglybuff",
      "gen": 2,
      "type": ["Normal", "Fairy"],
      "egg_steps": 2560,
	  "egg_group": ["Undiscovered"],
	  "evolutions": [
		{
			"method": ["item"],
			"value": "Soothe Bell",
			"evolves_to": "Jigglypuff"
		}
	  ],
	  "gender_rate": 25,
	  "experience_group": 8000,
	  "sprite": "sprites/pokemon/igglybuff.png",
	  "shiny_sprite": "sprites/pokemon/shiny/igglybuff.png",
	  "egg_sprite": "sprites/egg/igglybuff.png",
	  "rarity": "uncommon",
	  "evolution_stage": "base"
	},
	{
      "id": 182,
      "name": "Bellossom",
	  "gen": 1,
      "type": ["Grass"],
      "egg_steps": 5120,
	  "egg_group": ["Grass"],
      "gender_rate": 50,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/bellossom.png",
	  "shiny_sprite": "sprites/pokemon/shiny/bellossom.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
]
