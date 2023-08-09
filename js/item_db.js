const itemDatabase = [
	{
		"name": "PC Extension",
		"sprite": "sprites/items/pcextension.png",
		"type": "Upgrade",
		"description": "Gives access to another box (+30 Pokemon Storage)",
		"max_amount": 40,
		"price": 20000
	},
	{
		"name": "Mega Stone",
		"sprite": "sprites/items/megastone.png",
		"type": "Evolution",
		"description": "A weird gem that seems to react with some Pokemon. It seems really precious...",
		"price": 50000
	},
	{
		"name": "Max Mushrooms",
		"sprite": "sprites/items/maxmushrooms.png",
		"type": "Evolution",
		"description": "Mushrooms that have the power of changing Dynamax forms. They boost all stats of a Pokémon during battle.",
		"price": 50000
	},
	{
		"name": "Primal Orb",
		"sprite": "sprites/items/primalorb.png",
		"type": "Evolution",
		"description": "An orb that radiates an immense power. It seems to react to two specific Pokémon...",
		"price": 75000
	},
	{
		"name": "Meteorite",
		"sprite": "sprites/items/meteorite.png",
		"type": "Form",
		"description": "A strange rock that irradiate an incredible power.",
		"price": 75000
	},
	{
		"name": "Origin Orb",
		"sprite": "sprites/items/originorb.png",
		"type": "Form",
		"description": "An item to be held by Dialga, Palkia or Giratina. This large, glowing orb wells with power and allows the Pokémon to change form.",
		"price": 75000
	},
	{
		"name": "Gracidea",
		"sprite": "sprites/items/gracidea.png",
		"type": "Form",
		"description": "A flower sometimes bundled into a bouquet to be given as an expression of gratitude on special occasions, such as birthdays and anniversaries.",
		"price": 75000
	},
	{
		"name": "Reveal Glass",
		"sprite": "sprites/items/revealglass.png",
		"type": "Form",
		"description": "A mysterious looking glass that reveals the truth. It can return a Pokémon to its original shape.",
		"price": 75000
	},
	{
		"name": "Sun Flute",
		"sprite": "sprites/items/sunflute.png",
		"type": "Evolution",
		"description": "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the sun.",
		"price": 100000
	},
	{
		"name": "Moon Flute",
		"sprite": "sprites/items/moonflute.png",
		"type": "Evolution",
		"description": "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the moon.",
		"price": 100000
	},
	{
		"name": "400 Meltan Candies",
		"sprite": "sprites/items/400meltancandies.png",
		"type": "Evolution",
		"description": "That's a lot of candies! That does explain the price...",
		"price": 100000
	},
	{
		"name": "Rusted Sword",
		"sprite": "sprites/items/rustedsword.png",
		"type": "Evolution",
		"description": "It is said that a hero used this sword to halt a terrible disaster in ancient times. But it\'s grown rusty and worn.",
		"price": 75000
	},
	{
		"name": "Rusted Shield",
		"sprite": "sprites/items/rustedshield.png",
		"type": "Evolution",
		"description": "It is said that a hero used this shield to halt a terrible disaster in ancient times. But it\'s grown rusty and worn.",
		"price": 75000
	},
	{
		"name": "Scroll of Darkness",
		"sprite": "sprites/items/scrollofdarkness.png",
		"type": "Evolution",
		"description": "A peculiar scroll that can make a certain species of Pokémon evolve. Written upon it are the true secrets of the path of darkness.",
		"price": 100000
	},
	{
		"name": "Scroll of Waters",
		"sprite": "sprites/items/scrollofwaters.png",
		"type": "Evolution",
		"description": "A peculiar scroll that can make a certain species of Pokémon evolve. Written upon it are the true secrets of the path of water.",
		"price": 100000
	},
	{
		"name": "999 Gimmighoul Coins",
		"sprite": "sprites/items/999gimmighoulcoins.png",
		"description": "That's a lot of coins... I wonder who could gather so much money?",
		"price": 99990
	},
	{
		"name": "Thunder Stone",
		"sprite": "sprites/items/thunderstone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It has a distinct thunderbolt pattern.",
		"price": 3000
	},
	{
		"name": "Fire Stone",
		"sprite": "sprites/items/firestone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It has a fiery orange heart.",
		"price": 3000
	},
	{
		"name": "Water Stone",
		"sprite": "sprites/items/waterstone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It is the clear blue of a deep pool.",
		"price": 3000
	},
	{
		"name": "Leaf Stone",
		"sprite": "sprites/items/leafstone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It has an unmistakable leaf pattern.",
		"price": 3000
	},
	{
		"name": "Moon Stone",
		"sprite": "sprites/items/moonstone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It is dark like the night sky.",
		"price": 3000
	},
	{
		"name": "Sun Stone",
		"sprite": "sprites/items/sunstone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It burns as red as the evening sun.",
		"price": 3000
	},
	{
		"name": "Soothe Bell",
		"sprite": "sprites/items/soothebell.png",
		"type": "Evolution",
		"description": "An item to be held by a Pokémon. The comforting chime of this bell calms the holder, making it friendly.",
		"price": 3500
	},
	{
		"name": "Link Cable",
		"sprite": "sprites/items/linkcable.png",
		"type": "Evolution",
		"description": "An item that looks like something used in the past in order to connect trainers together...",
		"price": 3500
	},
	{
		"name": "Evolution TM",
		"sprite": "sprites/items/evolutiontm.png",
		"type": "Evolution",
		"description": "It looks like a regular-blank TM. But some Pokemon seems to react to this item.",
		"price": 3500
	},
	{
		"name": "Town Map",
		"sprite": "sprites/items/townmap.png",
		"type": "Evolution",
		"description": "It looks like a classic map. But some Pokemon seems to react to this item.",
		"price": 3500
	},
	{
		"name": "King\'s Rock",
		"sprite": "sprites/items/kingsrock.png",
		"type": "Evolution",
		"description": "An item to be held by a Pokémon. It may cause the target to flinch whenever the holder successfully inflicts damage on them with an attack.",
		"price": 3500
	},
	{
		"name": "Metal Coat",
		"sprite": "sprites/items/metalcoat.png",
		"type": "Evolution",
		"description": "An item to be held by a Pokémon. It's a special metallic coating that boosts the power of the holder's Steel-type moves.",
		"price": 3500
	},
	{
		"name": "Up-Grade",
		"sprite": "sprites/items/upgrade.png",
		"type": "Evolution",
		"description": "A transparent device somehow filled with all sorts of data. It's loved by a certain Pokémon.",
		"price": 3500
	},
	{
		"name": "Dragon Scale",
		"sprite": "sprites/items/dragonscale.png",
		"type": "Evolution",
		"description": "A very tough and inflexible scale. Dragon-type Pokémon may be holding this item when caught.",
		"price": 3500
	},
	{
		"name": "Weather Rock",
		"sprite": "sprites/items/weatherrock.png",
		"type": "Form",
		"description": "An item which shines differently based on the weather. It could react with some specifics Pokémon.",
		"price": 2000
	},
	{
		"name": "Shiny Stone",
		"sprite": "sprites/items/shinystone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It shines with a dazzling light.",
		"price": 3000
	},
	{
		"name": "Oval Stone",
		"sprite": "sprites/items/ovalstone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make a certain species of Pokémon evolve. It is round and smooth.",
		"price": 3500
	},
	{
		"name": "Remoraid Toy",
		"sprite": "sprites/items/remoraidtoy.png",
		"type": "Evolution",
		"description": "A toy of a Remoraid. It seems to be enough realistic to fool a certain Pokemon thinking it's a real one.",
		"price": 2000
	},
	{
		"name": "Prism Scale",
		"sprite": "sprites/items/prismscale.png",
		"type": "Evolution",
		"description": "A mysterious scale that causes a certain Pokémon to evolve. It shines in rainbow colors.",
		"price": 5000
	},
	{
		"name": "Deep Sea Tooth",
		"sprite": "sprites/items/deepseatooth.png",
		"type": "Evolution",
		"description": "An item to be held by Clamperl. This fang gleams a sharp silver and raises the holder's Sp. Atk stat.",
		"price": 4000
	},
	{
		"name": "Deep Sea Scale",
		"sprite": "sprites/items/deepseascale.png",
		"type": "Evolution",
		"description": "An item to be held by Clamperl. This scale shines with a faint pink and raises the holder's Sp. Def stat.",
		"price": 4000
	},
	{
		"name": "Protector",
		"sprite": "sprites/items/protector.png",
		"type": "Evolution",
		"description": "A protective item of some sort. It is extremely stiff and heavy. It's loved by a certain Pokémon.",
		"price": 3500
	},
	{
		"name": "Electirizer",
		"sprite": "sprites/items/electirizer.png",
		"type": "Evolution",
		"description": "A box packed with a tremendous amount of electric energy. It's loved by a certain Pokémon.",
		"price": 3500
	},
	{
		"name": "Magmarizer",
		"sprite": "sprites/items/magmarizer.png",
		"type": "Evolution",
		"description": "A box packed with a tremendous amount of magma energy. It's loved by a certain Pokémon.",
		"price": 3500
	},
	{
		"name": "Razor Fang",
		"sprite": "sprites/items/razorfang.png",
		"type": "Evolution",
		"description": "A sharp and pointed fang that seems as though it might be able to pierce straight through anything at all. It's loved by a certain Pokémon.",
		"price": 3500
	},
	{
		"name": "Razor Claw",
		"sprite": "sprites/items/razorclaw.png",
		"type": "Evolution",
		"description": "A sharp and pointed claw that seems as though it might be able to cut through anything at all. It's loved by a certain Pokémon.",
		"price": 3500
	},
	{
		"name": "Reaper Cloth",
		"sprite": "sprites/items/reapercloth.png",
		"type": "Evolution",
		"description": "A cloth imbued with horrifyingly strong spiritual energy. It's loved by a certain Pokémon.",
		"price": 3500
	},
	{
		"name": "Dawn Stone",
		"sprite": "sprites/items/dawnstone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It sparkles like a glittering eye.",
		"price": 3000
	},
	{
		"name": "Dusk Stone",
		"sprite": "sprites/items/duskstone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It holds dark shadows within it.",
		"price": 3000
	},
	{
		"name": "Dubious Disc",
		"sprite": "sprites/items/dubiousdisc.png",
		"type": "Evolution",
		"description": "A transparent device overflowing with dubious data. Its producer is unknown.",
		"price": 5000
	},
	{
		"name": "Household Appliance",
		"sprite": "sprites/items/householdappliance.png",
		"type": "Form",
		"description": "An odd item that has been possessed in the past...",
		"price": 10000
	},
	{
		"name": "Fairy Ribbon",
		"sprite": "sprites/items/fairyribbon.png",
		"type": "Evolution",
		"description": "An item to be held by a Pokèmon. It is a beautiful pink ribbon that seems to be enjoyed by a specific Pokémon.",
		"price": 3500
	},
	{
		"name": "Ice Stone",
		"sprite": "sprites/items/icestone.png",
		"type": "Evolution",
		"description": "A peculiar stone that can make certain species of Pokémon evolve. It has a snowflake pattern in it.",
		"price": 3000
	},
	{
		"name": "Leek",
		"sprite": "sprites/items/leek.png",
		"type": "Evolution",
		"description": "An item to be held by Farfetch'd. This very long and stiff stalk of leek boosts its critical-hit ratio.",
		"price": 3500
	},
	{
		"name": "Galarica Cuff",
		"sprite": "sprites/items/galaricacuff.png",
		"type": "Evolution",
		"description": "A cuff made from woven-together Galarica Twigs. Giving it to a Galarian Slowpoke makes the Pokémon very happy.",
		"price": 3500
	},
	{
		"name": "Galarica Wreath",
		"sprite": "sprites/items/galaricawreath.png",
		"type": "Evolution",
		"description": "A wreath made from woven-together Galarica Twigs. Placing it on the head of a Galarian Slowpoke makes the Pokémon very happy.",
		"price": 3500
	},
	{
		"name": "Peat Block",
		"sprite": "sprites/items/peatblock.png",
		"type": "Evolution",
		"description": "A block of muddy material that can be used as fuel for burning when it is dried. It\'s loved by a certain Pokémon.",
		"price": 4000
	},
	{
		"name": "Black Augurite",
		"sprite": "sprites/items/blackaugurite.png",
		"type": "Evolution",
		"description": "A glassy black stone that produces a sharp cutting edge when split. It\'s loved by a certain Pokémon.",
		"price": 4000
	},
	{
		"name": "Leader\'s Crest",
		"sprite": "sprites/items/leadercrest.png",
		"type": "Evolution",
		"description": "A shard of what appears to be an old blade of some sort. It is held only by Bisharp that head up a group of Pawniard.",
		"price": 4000
	},
	{
		"name": "Postcard",
		"sprite": "sprites/items/postcard.png",
		"type": "Evolution",
		"description": "An item sent from far away ! A Pokémon seems to react when being in contact with...",
		"price": 10000
	},
	{
		"name": "Sachet",
		"sprite": "sprites/items/sachet.png",
		"type": "Evolution",
		"description": "A sachet filled with fragrant perfumes that are just slightly too overwhelming. Yet it's loved by a certain Pokémon.",
		"price": 3500
	},
	{
		"name": "Whipped Dream",
		"sprite": "sprites/items/whippeddream.png",
		"type": "Evolution",
		"description": "A soft and sweet treat made of fluffy, puffy, whipped and whirled cream. It's loved by a certain Pokémon.",
		"price": 3500
	},
	/*{
		"name": "Wishiwashi Toy",
		"sprite": "sprites/items/wishiwashitoy.png",
		"type": "Evolution",
		"description": "A toy of a Wishiwashi. It seems to be enough realistic to fool a certain Pokemon thinking it's a real one.",
		"price": 2000
	},*/
	{
		"name": "Tart Apple",
		"sprite": "sprites/items/tartapple.png",
		"description": "A peculiar apple that can make a certain species of Pokémon evolve. It\'s exceptionally tart.",
		"price": 5000
	},
	{
		"name": "Sweet Apple",
		"sprite": "sprites/items/sweetapple.png",
		"description": "A peculiar apple that can make a certain species of Pokémon evolve. It\'s exceptionally sweet.",
		"price": 5000
	},
	{
		"name": "Cracked Pot",
		"sprite": "sprites/items/crackedpot.png",
		"description": "A peculiar teapot that can make a certain species of Pokémon evolve. It may be cracked, but tea poured from it is delicious.",
		"price": 5000
	},
	{
		"name": "Candy Jar",
		"sprite": "sprites/items/candyjar.png",
		"description": "A jar full of sweets. It seems to be put on a Pokémon",
		"price": 3000
	},
	{
		"name": "Running Shoes",
		"sprite": "sprites/items/runningshoes.png",
		"description": "A pair of shoes that seems to help to create a bound between some Pokemon and their owners... Weird right ?",
		"price": 3500
	},
	{
		"name": "Auspicious Armor",
		"sprite": "sprites/items/auspiciousarmor.png",
		"description": "A peculiar set of armor that can make a certain species of Pokémon evolve. Auspicious wishes live within it.",
		"price": 5000
	},
	{
		"name": "Malicious Armor",
		"sprite": "sprites/items/maliciousarmor.png",
		"description": "A peculiar set of armor that can make a certain species of Pokémon evolve. Malicious will lurks within it.",
		"price": 5000
	},
	{
		"name": "Ability Capsule",
		"sprite": "sprites/items/abilitycapsule.png",
		"description": "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
		"price": 2500
	},
	/*{
	  "name": "Big Malasada",
	  "sprite": "sprites/items/bigmalasada.png",
	  "type": "Evolution",
	  "description": "The Alola region's local specialty—fried bread. Some Pokémon could eat these all the day.",
	  "price": 3500
	},*/
	/*	{
		  "name": "",
		  "sprite": "sprites/items/",
		  "type": "Summonable, Activable, Evolution, Upgrade, Other",
		  "effect": "",
		  "description": "",
		  "max_amount": 
		  "price":
		} */
]