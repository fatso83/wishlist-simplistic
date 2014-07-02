// initialize db with wishes
createWishList = function () {
	var wishes = [
		new Wish({
			title         : 'Kenwood Major Titanium KMM020',
			description   : [
				'Kenwood Major Titanium KMM020 er en ',
				'kraftig kjøkkenmaskin som man kan få et utall',
				'forskjellige deler til, som kjøttkvern, råkostkutter',
				'etc. Ekstradelene står også på ønskelisten :-)'
			].join(" "),
			price         : 5000,
			images        : [

			],
			url           : 'http://elkjop.no',
			wanted_amount : 1
		}),


		new Wish({
			title         : 'Kenwood Chef råkostkutter',
			description   : [
				'Tilbehør til Kenwood Major Titanium KMM020',
				'Få nøyaktig kutting eller riving med dette råkostjernet tilpasset din kjøkkenmaskin.'
			].join(" "),
			price         : 300,
			images        : [

			],
			url           : 'http://elkjop.no',
			wanted_amount : 1
		}),

		new Wish({
			title         : 'Kenwood Chef kjøttkvern',
			description   : [
				'Tilbehør til Kenwood Major Titanium KMM020',
				'Meget allsidig kjøttkvern som tilbehør til din Kenwood kjøkkenmaskin'
			].join(" "),
			price         : 300,
			images        : [

			],
			url           : 'http://elkjop.no',
			wanted_amount : 1
		}),

		new Wish({
			title         : 'Kenwood ismaskin A957',
			description   : [
				'Tilbehør til Kenwood Major Titanium KMM020',
				'Lag iskrem, sorbè og sunn frossen yoghurt hjemme på ditt eget kjøkken.'
			].join(" "),
			price         : 500,
			images        : [

			],
			url           : 'http://elkjop.no',
			wanted_amount : 1
		}),


		new Wish({
			title         : 'Gassbrenner til mat',
			description   : [
				'Gassbrenner som egner seg til å tilberede mat (svi ribba, brenne biffen, '
				'creme brulee, etc).'
			].join(" "),
			price         : 150,
			images        : [
			],
			url           : 'http://biltema.no/no/Verktoy/Sveising-og-lodding/Gassbrenner/Minibrenner-Gourmet-17612',
			wanted_amount : 1
		}),

		new Wish({
			title         : 'Anova Sous Vide Immersion Circulators',
			description   : [
				'Rimelig og brukervennlig sous-vide maskin fra Anova.'
			].join(" "),
			price         : 1500,
			images        : [

			],
			url           : 'http://anovaculinary.com/products/anova',
			wanted_amount : 1
		}),


		new Wish({
			title         : 'Baking Steel (PizzaPro, Modernist Cuisine, e.l.)',
			description   : [
				'En stålplate som er 8mm tykk og veier 10 kilo '
			].join(" "),
			price         : 900,
			images        : [

			],
			url           : 'http://www.sousvidenorge.no/produkt/kjokkenredskap/pizza-pro-stalplate/pizzapro-stalplate',
			wanted_amount : 1
		}),


		new Wish({
			title         : 'Manuell kaffekvern',
			description   : [
				'En god, gammeldags, solid, manuell kaffekvern med flere innstillingsgrader. ',
				'Må ha grader fra filterkaffe <-> presskanne <-> kokmalt'

			].join(" "),
			price         : 300,
			images        : [
			],
			url           : '',
			wanted_amount : 1
		}),


		new Wish({
			title         : 'Stekegryte',
			description   : [
				'Le Creuset stekegryte 32cm/7l'
			].join(" "),
			price         : 2000,
			images        : [
			],
			url           : '',
			wanted_amount : 1
		}),


		new Wish({
			title         : 'Melkegryte',
			description   : [
				'Le Creuset 3-Ply melkegryte - 14 cm. ca 1000kr'
			].join(" "),
			price         : 1000,
			images        : [
			],
			url           : 'http://www.lecreuset.no',
			wanted_amount : 1
		}),


		new Wish({
			title         : 'Grillpanne',
			description   : [
				'Kvadratisk grillpanne i støpejern, 26 cm. Mange fine farge'
			].join(" "),
			price         : 1000,
			images        : [
			],
			url           : 'http://www.lecreuset.no/Kvadratisk-grillpanne-i-stopejern-no.aspx',
			wanted_amount : 1
		}),


		new Wish({
			title         : 'Ramekin/Minigryte, 10cm',
			description   : [
				'Ramekin/Minigryte. Mange fine farger. Gjerne forskjellige!'
			].join(" "),
			price         : 250,
			images        : [
			],
			url           : 'http://www.lecreuset.no/Mini-gryte-i-stentoy-no.aspx',
			wanted_amount : 4
		}),


		new Wish({
			title         : 'Ramekin/Minigryte, 6cm',
			description   : [
				'Ramekin/Minigryte. Mange fine farger. Gjerne forskjellige!'
			].join(" "),
			price         : 150,
			images        : [
			],
			url           : 'http://www.lecreuset.no/Mini-gryte-i-stentoy-no.aspx',
			wanted_amount : 6
		})

	];

	wishes.forEach(function (w) {
		createWish(w);
	})
};