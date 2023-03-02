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
      "sprite": "sprites/pokemon/1.png",
	  "shiny_sprite": "sprites/pokemon/shiny/1.png",
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
      "sprite": "sprites/pokemon/2.png",
	  "shiny_sprite": "sprites/pokemon/shiny/2.png",
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
      "sprite": "sprites/pokemon/3.png",
	  "shiny_sprite": "sprites/pokemon/shiny/3.png",
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
      "sprite": "sprites/pokemon/3.1.png",
	  "shiny_sprite": "sprites/pokemon/shiny/3.1.png",
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
      "sprite": "sprites/pokemon/3.2.png",
	  "shiny_sprite": "sprites/pokemon/shiny/3.2.png",
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
      "sprite": "sprites/pokemon/4.png",
	  "shiny_sprite": "sprites/pokemon/shiny/4.png",
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
      "sprite": "sprites/pokemon/5.png",
	  "shiny_sprite": "sprites/pokemon/shiny/5.png",
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
      "sprite": "sprites/pokemon/6.png",
	  "shiny_sprite": "sprites/pokemon/shiny/6.png",
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
      "sprite": "sprites/pokemon/7.png",
      "shiny_sprite": "sprites/pokemon/shiny/7.png",
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
	  "sprite": "sprites/pokemon/8.png",
	  "shiny_sprite": "sprites/pokemon/shiny/8.png",
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
	  "sprite": "sprites/pokemon/9.png",
	  "shiny_sprite": "sprites/pokemon/shiny/9.png",
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
      "sprite": "sprites/pokemon/10.png",
      "shiny_sprite": "sprites/pokemon/shiny/10.png",
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
	  "sprite": "sprites/pokemon/11.png",
	  "shiny_sprite": "sprites/pokemon/shiny/11.png",
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
	  "sprite": "sprites/pokemon/12.png",
	  "shiny_sprite": "sprites/pokemon/shiny/12.png",
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
      "sprite": "sprites/pokemon/13.png",
      "shiny_sprite": "sprites/pokemon/shiny/13.png",
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
	  "sprite": "sprites/pokemon/14.png",
	  "shiny_sprite": "sprites/pokemon/shiny/14.png",
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
	  "sprite": "sprites/pokemon/15.png",
	  "shiny_sprite": "sprites/pokemon/shiny/15.png",
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
      "sprite": "sprites/pokemon/16.png",
      "shiny_sprite": "sprites/pokemon/shiny/16.png",
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
	  "sprite": "sprites/pokemon/17.png",
	  "shiny_sprite": "sprites/pokemon/shiny/17.png",
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
	  "sprite": "sprites/pokemon/18.png",
	  "shiny_sprite": "sprites/pokemon/shiny/18.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage"
	},
	{
	  "id": 19,
      "name": "Rattata",
      "gen": 1,
      "type": ["Normal"],
      "egg_steps": 3840,
	  "egg_group": ["Ground"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 20,
			"evolves_to": "Raticate"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/19.png",
	  "shiny_sprite": "sprites/pokemon/shiny/19.png",
	  "egg_sprite": "sprites/egg/rattata.png",
	  "rarity": "common",
	  "evolution_stage": "base"
	},
	{
	  "id": 20,
      "name": "Raticate",
      "gen": 1,
      "type": ["Normal"],
      "egg_steps": 3840,
	  "egg_group": ["Ground"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/20.png",
	  "shiny_sprite": "sprites/pokemon/shiny/20.png",
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
	  "sprite": "sprites/pokemon/21.png",
	  "shiny_sprite": "sprites/pokemon/shiny/21.png",
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
	  "sprite": "sprites/pokemon/22.png",
	  "shiny_sprite": "sprites/pokemon/shiny/22.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 23,
      "name": "Ekans",
      "gen": 1,
      "type": ["Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Field", "Dragon"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 22,
			"evolves_to": "Arbok"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/23.png",
	  "shiny_sprite": "sprites/pokemon/shiny/23.png",
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
	  "egg_group": ["Field", "Dragon"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/24.png",
	  "shiny_sprite": "sprites/pokemon/shiny/24.png",
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
	  "sprite": "sprites/pokemon/25.png",
	  "shiny_sprite": "sprites/pokemon/shiny/25.png",
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
	  "sprite": "sprites/pokemon/26.png",
	  "shiny_sprite": "sprites/pokemon/shiny/26.png",
	  "rarity": "uncommon",
	  "evolution_stage": "second_stage"
	},
	{
	  "id": 27,
      "name": "Sandshrew",
      "gen": 1,
      "type": ["Ground"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 22,
			"evolves_to": "Sandslash"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/27.png",
	  "shiny_sprite": "sprites/pokemon/shiny/27.png",
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
	  "egg_group": ["Field"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/28.png",
	  "shiny_sprite": "sprites/pokemon/shiny/28.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
      "id": 29,
      "name": "Nidoran F",
	  "gen" : 1,
      "type": ["Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Field"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 16,
	  		"evolves_to": "Nidorina"
	  	},
	  ],
      "gender_rate": 0,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/29.png",
	  "shiny_sprite": "sprites/pokemon/shiny/29.png",
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
	  "egg_group": ["Monster", "Field"],
      "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Moon Stone",
	  		"evolves_to": "Nidoqueen"
	  	},
	  ],
      "gender_rate": 0,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/30.png",
	  "shiny_sprite": "sprites/pokemon/shiny/30.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage",
    },
    {
      "id": 31,
      "name": "Nidoqueen",
	  "gen": 1,
      "type": ["Poison", "Ground"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Field"],
      "gender_rate": 0,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/31.png",
	  "shiny_sprite": "sprites/pokemon/shiny/31.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
	{
      "id": 32,
      "name": "Nidoran M",
	  "gen" : 1,
      "type": ["Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Field"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 16,
	  		"evolves_to": "Nidorino"
	  	},
	  ],
      "gender_rate": 100,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/32.png",
	  "shiny_sprite": "sprites/pokemon/shiny/32.png",
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
	  "egg_group": ["Monster", "Field"],
      "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Moon Stone",
	  		"evolves_to": "Nidoking"
	  	},
	  ],
      "gender_rate": 100,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/33.png",
	  "shiny_sprite": "sprites/pokemon/shiny/33.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage",
    },
    {
      "id": 34,
      "name": "Nidoking",
	  "gen": 1,
      "type": ["Poison", "Ground"],
      "egg_steps": 5120,
	  "egg_group": ["Monster", "Field"],
      "gender_rate": 100,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/34.png",
	  "shiny_sprite": "sprites/pokemon/shiny/34.png",
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
	  "sprite": "sprites/pokemon/35.png",
	  "shiny_sprite": "sprites/pokemon/shiny/35.png",
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
	  "sprite": "sprites/pokemon/36.png",
	  "shiny_sprite": "sprites/pokemon/shiny/36.png",
	  "rarity": "uncommon",
	  "evolution_stage": "second_stage"
	},
	{
	  "id": 37,
      "name": "Vulpix",
      "gen": 1,
      "type": ["Fire"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
	  "evolutions": [
		{
			"method": ["item"],
			"value": "Fire Stone",
			"evolves_to": "Ninetales"
		}
	  ],
	  "gender_rate": 25,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/37.png",
	  "shiny_sprite": "sprites/pokemon/shiny/37.png",
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
	  "egg_group": ["Field"],
	  "gender_rate": 25,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/38.png",
	  "shiny_sprite": "sprites/pokemon/shiny/38.png",
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
	  "sprite": "sprites/pokemon/39.png",
	  "shiny_sprite": "sprites/pokemon/shiny/39.png",
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
	  "sprite": "sprites/pokemon/40.png",
	  "shiny_sprite": "sprites/pokemon/shiny/40.png",
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
      "sprite": "sprites/pokemon/41.png",
	  "shiny_sprite": "sprites/pokemon/shiny/41.png",
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
      "sprite": "sprites/pokemon/42.png",
	  "shiny_sprite": "sprites/pokemon/shiny/42.png",
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
      "sprite": "sprites/pokemon/43.png",
	  "shiny_sprite": "sprites/pokemon/shiny/43.png",
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
      "sprite": "sprites/pokemon/44.png",
	  "shiny_sprite": "sprites/pokemon/shiny/44.png",
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
      "sprite": "sprites/pokemon/45.png",
	  "shiny_sprite": "sprites/pokemon/shiny/45.png",
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
	  "sprite": "sprites/pokemon/46.png",
	  "shiny_sprite": "sprites/pokemon/shiny/46.png",
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
	  "sprite": "sprites/pokemon/47.png",
	  "shiny_sprite": "sprites/pokemon/shiny/47.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 48,
      "name": "Venonat",
      "gen": 1,
      "type": ["Bug", "Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Bug"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 31,
			"evolves_to": "Venomoth"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/48.png",
	  "shiny_sprite": "sprites/pokemon/shiny/48.png",
	  "egg_sprite": "sprites/egg/venonat.png",
	  "rarity": "common",
	  "evolution_stage": "base"
	},
	{
	  "id": 49,
      "name": "Venomoth",
      "gen": 1,
      "type": ["Bug", "Poison"],
      "egg_steps": 5120,
	  "egg_group": ["Bug"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/49.png",
	  "shiny_sprite": "sprites/pokemon/shiny/49.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 50,
      "name": "Diglett",
      "gen": 1,
      "type": ["Ground"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 26,
			"evolves_to": "Dugtrio"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/50.png",
	  "shiny_sprite": "sprites/pokemon/shiny/50.png",
	  "egg_sprite": "sprites/egg/diglett.png",
	  "rarity": "common",
	  "evolution_stage": "base"
	},
	{
	  "id": 51,
      "name": "Dugtrio",
      "gen": 1,
      "type": ["Ground"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/51.png",
	  "shiny_sprite": "sprites/pokemon/shiny/51.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 52,
      "name": "Meowth",
      "gen": 1,
      "type": ["Normal"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 28,
			"evolves_to": "Persian"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/52.png",
	  "shiny_sprite": "sprites/pokemon/shiny/52.png",
	  "egg_sprite": "sprites/egg/meowth.png",
	  "rarity": "uncommon",
	  "evolution_stage": "base"
	},
	{
	  "id": 53,
      "name": "Dugtrio",
      "gen": 1,
      "type": ["Normal"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/53.png",
	  "shiny_sprite": "sprites/pokemon/shiny/53.png",
	  "rarity": "uncommon",
	  "evolution_stage": "first_stage"
	},
	{
	  "id": 54,
      "name": "Psyduck",
      "gen": 1,
      "type": ["Water"],
      "egg_steps": 5120,
	  "egg_group": ["Water 1", "Field"],
	  "evolutions": [
		{
			"method": ["level"],
			"value": 33,
			"evolves_to": "Golduck"
		}
	  ],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/54.png",
	  "shiny_sprite": "sprites/pokemon/shiny/54.png",
	  "egg_sprite": "sprites/egg/psyduck.png",
	  "rarity": "uncommon",
	  "evolution_stage": "base"
	},
	{
	  "id": 55,
      "name": "Golduck",
      "gen": 1,
      "type": ["Water"],
      "egg_steps": 5120,
	  "egg_group": ["Water 1", "Field"],
	  "gender_rate": 50,
	  "experience_group": 10000,
	  "sprite": "sprites/pokemon/55.png",
	  "shiny_sprite": "sprites/pokemon/shiny/55.png",
	  "rarity": "uncommon",
	  "evolution_stage": "first_stage"
	},
	{
      "id": 56,
      "name": "Mankey",
	  "gen" : 1,
      "type": ["Fighting"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 28,
	  		"evolves_to": "Primeape"
	  	},
	  ],
      "gender_rate": 50,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/56.png",
	  "shiny_sprite": "sprites/pokemon/shiny/56.png",
	  "egg_sprite": "sprites/egg/mankey.png",
	  "rarity": "common",
	  "evolution_stage": "base",
    },
    {
      "id": 57,
      "name": "Primeape",
	  "gen" : 1,
      "type": ["Fighting"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
      "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Evolution TM",
	  		"evolves_to": "Annihilape"
	  	},
	  ],
      "gender_rate": 50,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/57.png",
	  "shiny_sprite": "sprites/pokemon/shiny/57.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage",
    },
	{
	  "id": 58,
      "name": "Growlithe",
      "gen": 1,
      "type": ["Fire"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
	  "evolutions": [
		{
			"method": ["item"],
			"value": "Fire Stone",
			"evolves_to": "Arcanine"
		}
	  ],
	  "gender_rate": 75,
	  "experience_group": 12500,
	  "sprite": "sprites/pokemon/58.png",
	  "shiny_sprite": "sprites/pokemon/shiny/58.png",
	  "egg_sprite": "sprites/egg/growlithe.png",
	  "rarity": "uncommon",
	  "evolution_stage": "base"
	},
	{
	  "id": 59,
      "name": "Golduck",
      "gen": 1,
      "type": ["Fire"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
	  "gender_rate": 75,
	  "experience_group": 12500,
	  "sprite": "sprites/pokemon/59.png",
	  "shiny_sprite": "sprites/pokemon/shiny/59.png",
	  "rarity": "uncommon",
	  "evolution_stage": "first_stage"
	},
	{
      "id": 60,
      "name": "Poliwag",
	  "gen" : 1,
      "type": ["Water"],
      "egg_steps": 5120,
	  "egg_group": ["Water 1"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 25,
	  		"evolves_to": "Poliwhirl"
	  	},
	  ],
      "gender_rate": 50,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/60.png",
	  "shiny_sprite": "sprites/pokemon/shiny/60.png",
	  "egg_sprite": "sprites/egg/poliwag.png",
	  "rarity": "common",
	  "evolution_stage": "base",
    },
    {
      "id": 61,
      "name": "Poliwhirl",
	  "gen" : 1,
      "type": ["Water"],
      "egg_steps": 5120,
	  "egg_group": ["Water 1"],
      "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Water Stone",
	  		"evolves_to": "Poliwrath"
	  	},
		{
	  		"method": ["item"],
	  		"value": "King\'s Rock",
	  		"evolves_to": "Bellossom"
	  	},
	  ],
      "gender_rate": 50,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/61.png",
	  "shiny_sprite": "sprites/pokemon/shiny/61.png",
	  "rarity": "common",
	  "evolution_stage": "first_stage",
    },
    {
      "id": 62,
      "name": "Poliwrath",
	  "gen": 1,
      "type": ["Water", "Fighting"],
      "egg_steps": 5120,
	  "egg_group": ["Water 1"],
      "gender_rate": 50,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/62.png",
	  "shiny_sprite": "sprites/pokemon/shiny/62.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
	{
      "id": 63,
      "name": "Abra",
	  "gen" : 1,
      "type": ["Psychic"],
      "egg_steps": 5120,
	  "egg_group": ["Human-Like"],
	  "evolutions": [
	  	{
	  		"method": ["level"],
	  		"value": 16,
	  		"evolves_to": "Kadabra"
	  	},
	  ],
      "gender_rate": 75,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/63.png",
	  "shiny_sprite": "sprites/pokemon/shiny/63.png",
	  "egg_sprite": "sprites/egg/abra.png",
	  "rarity": "uncommon",
	  "evolution_stage": "base",
    },
    {
      "id": 64,
      "name": "Kadabra",
	  "gen" : 1,
      "type": ["Psychic"],
      "egg_steps": 5120,
	  "egg_group": ["Human-Like"],
      "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Link Cable",
	  		"evolves_to": "Alakazam"
	  	},
	  ],
      "gender_rate": 75,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/64.png",
	  "shiny_sprite": "sprites/pokemon/shiny/64.png",
	  "rarity": "uncommon",
	  "evolution_stage": "first_stage",
    },
    {
      "id": 65,
      "name": "Alakazam",
	  "gen": 1,
      "type": ["Psychic"],
      "egg_steps": 5120,
	  "egg_group": ["Human-Like"],
	  "evolutions": [
	  	{
	  		"method": ["item"],
	  		"value": "Mega Stone",
	  		"evolves_to": "Mega-Alakazam"
	  	},
	  ],
      "gender_rate": 75,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/65.png",
	  "shiny_sprite": "sprites/pokemon/shiny/65.png",
	  "rarity": "uncommon",
	  "evolution_stage": "second_stage",
    },
	{
      "id": 65.1,
      "name": "Mega-Alakazam",
	  "gen": 1,
      "type": ["Psychic"],
      "egg_steps": 5120,
	  "egg_group": ["Human-Like"],
      "gender_rate": 75,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/65.1.png",
	  "shiny_sprite": "sprites/pokemon/shiny/65.1.png",
	  "rarity": "uncommon",
	  "evolution_stage": "mega_evolution",
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
      "sprite": "sprites/pokemon/169.png",
	  "shiny_sprite": "sprites/pokemon/shiny/169.png",
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
	  "sprite": "sprites/pokemon/172.png",
	  "shiny_sprite": "sprites/pokemon/shiny/172.png",
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
	  "sprite": "sprites/pokemon/173.png",
	  "shiny_sprite": "sprites/pokemon/shiny/173.png",
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
	  "sprite": "sprites/pokemon/174.png",
	  "shiny_sprite": "sprites/pokemon/shiny/174.png",
	  "egg_sprite": "sprites/egg/igglybuff.png",
	  "rarity": "uncommon",
	  "evolution_stage": "base"
	},
	{
      "id": 182,
      "name": "Bellossom",
	  "gen": 2,
      "type": ["Grass"],
      "egg_steps": 5120,
	  "egg_group": ["Grass"],
      "gender_rate": 50,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/182.png",
	  "shiny_sprite": "sprites/pokemon/shiny/182.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
	{
      "id": 186,
      "name": "Politoed",
	  "gen": 2,
      "type": ["Water"],
      "egg_steps": 5120,
	  "egg_group": ["Water 1"],
      "gender_rate": 50,
      "experience_group": 10599,
      "sprite": "sprites/pokemon/186.png",
	  "shiny_sprite": "sprites/pokemon/shiny/186.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
	{
      "id": 979,
      "name": "Annihilape",
	  "gen" : 9,
      "type": ["Fighting", "Ghost"],
      "egg_steps": 5120,
	  "egg_group": ["Field"],
      "gender_rate": 50,
      "experience_group": 10000,
      "sprite": "sprites/pokemon/979.png",
	  "shiny_sprite": "sprites/pokemon/shiny/979.png",
	  "rarity": "common",
	  "evolution_stage": "second_stage",
    },
]
