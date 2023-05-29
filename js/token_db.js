const tokenDatabase = [
	{
		"name": "Special Token",
		"type": "special",
		"count": 1500
	},
	{
		"name": "Event Token",
		"type": "event",
		"count": 2500
	},
	{
		"name": "Novelty Token",
		"type": "novelty",
		"count": 1000
	},
	{
		"name": "Legendary Token",
		"type": "legendary",
		"count": 5000
	},
	{
		"name": "404 Not Found",
		"type": "missingno",
		"count": 44404
	},
]

const tokenExchange = [
	{
		"pokemon": "Ditto",
		"sprite": "sprites/egg/ditto.png",
		"type": "special",
		"available": true,
		"amount": 50
	},
	{
		"pokemon": "Unown",
		"sprite": "sprites/egg/unown.png",
		"type": "special",
		"available": true,
		"amount": 15
	},
	{
		"pokemon": "Nihilego",
		"sprite": "sprites/egg/nihilego.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Buzzwole",
		"sprite": "sprites/egg/buzzwole.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Pheromosa",
		"sprite": "sprites/egg/pheromosa.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Xurkitree",
		"sprite": "sprites/egg/xurkitree.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Celesteela",
		"sprite": "sprites/egg/celesteela.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Kartana",
		"sprite": "sprites/egg/kartana.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Guzzlord",
		"sprite": "sprites/egg/guzzlord.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Poipole",
		"sprite": "sprites/egg/poipole.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Stakataka",
		"sprite": "sprites/egg/stakataka.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Blacephalon",
		"sprite": "sprites/egg/blacephalon.png",
		"type": "special",
		"generation": 7,
		"available": true,
		"amount": 30
	},
	{
		"pokemon": "Spiky-eared Pichu",
		"sprite": "sprites/egg/pichu.png",
		"type": "event",
		"available": true,
		"amount": 5
	},
	{
		"pokemon": "Shadow Lugia",
		"sprite": "sprites/egg/shadowlugia.png",
		"type": "event",
		"available": true,
		"amount": 82
	},
	{
		"pokemon": "MissingNo.",
		"sprite": "sprites/egg/missingno.png",
		"type": "missingno",
		"available": false,
		"amount": 1
	},
	{
		"pokemon": "Articuno",
		"sprite": "sprites/egg/articuno.png",
		"type": "legendary",
		"generation": 1,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Galarian Articuno",
		"sprite": "sprites/egg/articuno.1.png",
		"type": "legendary",
		"generation": 1,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Zapdos",
		"sprite": "sprites/egg/zapdos.png",
		"type": "legendary",
		"generation": 1,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Galarian Zapdos",
		"sprite": "sprites/egg/zapdos.1.png",
		"type": "legendary",
		"generation": 1,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Moltres",
		"sprite": "sprites/egg/moltres.png",
		"type": "legendary",
		"generation": 1,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Galarian Moltres",
		"sprite": "sprites/egg/moltres.1.png",
		"type": "legendary",
		"generation": 1,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Mewtwo",
		"sprite": "sprites/egg/mewtwo.png",
		"type": "legendary",
		"generation": 1,
		"available": true,
		"amount": 5
	},
	{
		"pokemon": "Mew",
		"sprite": "sprites/egg/mew.png",
		"type": "legendary",
		"generation": 1,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Raikou",
		"sprite": "sprites/egg/raikou.png",
		"type": "legendary",
		"generation": 2,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Entei",
		"sprite": "sprites/egg/entei.png",
		"type": "legendary",
		"generation": 2,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Suicune",
		"sprite": "sprites/egg/suicune.png",
		"type": "legendary",
		"generation": 2,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Lugia",
		"sprite": "sprites/egg/lugia.png",
		"type": "legendary",
		"generation": 2,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Ho-oh",
		"sprite": "sprites/egg/hooh.png",
		"type": "legendary",
		"generation": 2,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Celebi",
		"sprite": "sprites/egg/celebi.png",
		"type": "legendary",
		"generation": 2,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Regirock",
		"sprite": "sprites/egg/regirock.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Regice",
		"sprite": "sprites/egg/regice.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Registeel",
		"sprite": "sprites/egg/registeel.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Latias",
		"sprite": "sprites/egg/latias.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Latios",
		"sprite": "sprites/egg/latios.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Kyogre",
		"sprite": "sprites/egg/kyogre.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Groudon",
		"sprite": "sprites/egg/groudon.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Rayquaza",
		"sprite": "sprites/egg/rayquaza.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 4
	},
	{
		"pokemon": "Jirachi",
		"sprite": "sprites/egg/jirachi.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Deoxys",
		"sprite": "sprites/egg/deoxys.png",
		"type": "legendary",
		"generation": 3,
		"available": true,
		"amount": 4
	},
	{
		"pokemon": "Uxie",
		"sprite": "sprites/egg/uxie.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Mesprit",
		"sprite": "sprites/egg/mesprit.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Azelf",
		"sprite": "sprites/egg/azelf.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Dialga",
		"sprite": "sprites/egg/dialga.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Palkia",
		"sprite": "sprites/egg/palkia.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Heatran",
		"sprite": "sprites/egg/heatran.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Regigigas",
		"sprite": "sprites/egg/regigigas.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Giratina",
		"sprite": "sprites/egg/giratina.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 4
	},
	{
		"pokemon": "Cresselia",
		"sprite": "sprites/egg/cresselia.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Manaphy",
		"sprite": "sprites/egg/manaphy.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Darkrai",
		"sprite": "sprites/egg/darkrai.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Shaymin",
		"sprite": "sprites/egg/shaymin.png",
		"type": "legendary",
		"generation": 4,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Arceus",
		"sprite": "sprites/egg/arceus.png",
		"type": "legendary",
		"generation": 4,
		"available": false,
		"amount": 10
	},
	{
		"pokemon": "Victini",
		"sprite": "sprites/egg/victini.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Cobalion",
		"sprite": "sprites/egg/cobalion.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Terrakion",
		"sprite": "sprites/egg/terrakion.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Virizion",
		"sprite": "sprites/egg/virizion.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Tornadus",
		"sprite": "sprites/egg/tornadus.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Thundurus",
		"sprite": "sprites/egg/thundurus.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Reshiram",
		"sprite": "sprites/egg/reshiram.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Zekrom",
		"sprite": "sprites/egg/zekrom.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Landorus",
		"sprite": "sprites/egg/landorus.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 4
	},
	{
		"pokemon": "Kyurem",
		"sprite": "sprites/egg/kyurem.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 4
	},
	{
		"pokemon": "Keldeo",
		"sprite": "sprites/egg/keldeo.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Meloetta",
		"sprite": "sprites/egg/meloetta.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Genesect",
		"sprite": "sprites/egg/genesect.png",
		"type": "legendary",
		"generation": 5,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Xerneas",
		"sprite": "sprites/egg/xerneas.png",
		"type": "legendary",
		"generation": 6,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Yveltal",
		"sprite": "sprites/egg/yveltal.png",
		"type": "legendary",
		"generation": 6,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Zygarde",
		"sprite": "sprites/egg/zygarde.png",
		"type": "legendary",
		"generation": 6,
		"available": true,
		"amount": 4
	},
	{
		"pokemon": "Diancie",
		"sprite": "sprites/egg/diancie.png",
		"type": "legendary",
		"generation": 6,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Hoopa",
		"sprite": "sprites/egg/hoopa.png",
		"type": "legendary",
		"generation": 6,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Volcanion",
		"sprite": "sprites/egg/volcanion.png",
		"type": "legendary",
		"generation": 6,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Type: Null",
		"sprite": "sprites/egg/typenull.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 1
	},
	{
		"pokemon": "Tapu Koko",
		"sprite": "sprites/egg/tapukoko.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Tapu Lele",
		"sprite": "sprites/egg/tapulele.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Tapu Bulu",
		"sprite": "sprites/egg/tapubulu.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Tapu Fini",
		"sprite": "sprites/egg/tapufini.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 2
	},
	{
		"pokemon": "Cosmog",
		"sprite": "sprites/egg/cosmog.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Necrozma",
		"sprite": "sprites/egg/necrozma.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 4
	},
	{
		"pokemon": "Magearna",
		"sprite": "sprites/egg/magearna.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Marshadow",
		"sprite": "sprites/egg/marshadow.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 3
	},
	{
		"pokemon": "Zeraora",
		"sprite": "sprites/egg/zeraora.png",
		"type": "legendary",
		"generation": 7,
		"available": true,
		"amount": 3
	},
]