
// initialize db with wishes
createWishList = function () {
	var wishes = [
		{
			title         : 'Kenwood kjøkkenmaskin',
			description   : [
				'Kenwood Major Titanium KMM020 er en ',
				'kraftig kjøkkenmaskin som man kan få et utall',
				'forskjellige deler til, som kjøttkvern, råkostkutter',
				'etc. Ekstradelene står også på ønskelisten :-)'
			].join(" "),
			price         : 5000,
			images        : [
				'http://tubby.scene7.com/is/image/tubby/KMM020?id=M_jqA2&wid=770&hei=800&fmt=jpg'
			],
			url           : 'http://www.elkjop.no/product/hjem-og-husholdning/kjokkenmaskin/KMM020/kenwood-major-titanium-kjokkenmaskin-kmm020',
			amount_wanted : 1
		},


		{
			title         : 'Kenwood Chef råkostkutter',
			description   : [
				'Tilbehør til Kenwood Major Titanium KMM020',
				'Få nøyaktig kutting eller riving med dette råkostjernet tilpasset din kjøkkenmaskin.'
			].join(" "),
			price         : 1700,
			images        : [

			],
			url           : 'http://www.elkjop.no/product/hjem-og-husholdning/kjokkenmaskin/AWAT340/kenwood-chef-rakostkutter',
			amount_wanted : 1
		},

		{
			title         : 'Kenwood Chef kjøttkvern',
			description   : [
				'Tilbehør til Kenwood Major Titanium KMM020',
				'Meget allsidig kjøttkvern som tilbehør til din Kenwood kjøkkenmaskin'
			].join(" "),
			price         : 900,
			images        : [

			],
			url           : 'http://www.elkjop.no/product/hjem-og-husholdning/kjokkenmaskin/AT950/kenwood-chef-kjottkvern',
			amount_wanted : 1
		},

		/**
		{
			title         : 'Kenwood ismaskin A957',
			description   : [
				'Tilbehør til Kenwood Major Titanium KMM020',
				'Lag iskrem, sorbè og sunn frossen yoghurt hjemme på ditt eget kjøkken.'
			].join(" "),
			price         : 500,
			images        : [

			],
			url           : 'http://elkjop.no',
			amount_wanted : 1
		},
		 */

		{
			title         : 'Gassbrenner til mat',
			description   : [
				'Gassbrenner som egner seg til å tilberede mat (svi ribba, brenne biffen, ',
				'creme brulee, etc).'
			].join(" "),
			price         : 150,
			images        : [
				'http://images.biltema.com/PAXToImageService.svc/product/medium/2000033700'
			],
			url           : 'http://www.biltema.no/no/Hjem/Kjokken/Utstyr/Gourmetbrenner-37655/',
			amount_wanted : 1
		},

		{
			title         : 'Anova Sous Vide',
			description   : [
				'Anova Sous Vide Immersion Circulators.',
				'Brukervennlig sous-vide maskin fra Anova.'
			].join(" "),
			price         : 1500,
			images        : [
				'http://cdn.shopify.com/s/files/1/0282/7556/products/trio_1024x1024.jpg?v=1384547025'
			],
			url           : 'http://anovaculinary.com/products/anova',
			amount_wanted : 1
		},


		{
			title         : 'Bakestål/pizzastål',
			description   : [
				'En stålplate som er rundt én centimeter tykk og veier 10 kilo.',
				'Typisk fra PizzaPro, Modernist Cuisine, e.l.'
			].join(" "),
			price         : 900,
			images        : [
				'http://www.sousvidenorge.no/assets/img/570/bilder_nettbutikk/d664dd48ca87c12b7cb6a5ed36b7ddbc-image.jpeg'
			],
			url           : 'http://www.sousvidenorge.no/produkt/kjokkenredskap/pizza-pro-stalplate/pizzapro-stalplate',
			amount_wanted : 1
		},


		{
			title         : 'Elektrisk kaffekvern',
			description   : [
				'Wilfa Svart kaffekvern WSCG-2'
			].join(" "),
			price         : 750,
			url : 'http://www.elkjop.no/product/hjem-og-husholdning/kaffetilbehor/WSCG2/wilfa-svart-kaffekvern-wscg-2',
			images        : [
				'http://www.netonnet.no/ItemImages/hjem-og-fritid/kaffe-og-espresso/kaffekvern/Wilfa-WSCG-2(202352)-Large.jpg'
			],
			amount_wanted : 1
		},


		{
			title         : 'Stekegryte',
			description   : [
				'Le Creuset stekegryte 32cm/7l'
			].join(" "),
			price         : 2000,
			images        : [
				'http://www.lecreuset.no/EInBusinessTemplates/Everything/Images/catalogue/medium/stegegryde_26_roed.jpg'
			],

			url           : 'http://www.lecreuset.no',
			amount_wanted : 1
		},


		{
			title         : 'Melkegryte',
			description   : [
				'Le Creuset 3-Ply melkegryte - 14 cm. ca 1000kr',
				'Oppvarming av melk, sauser og andre retter som inneholder melk.',
				'Helletut for helling uten søl. '
			].join(" "),
			price         : 1000,
			images        : [
				'http://www.lecreuset.no/EInBusinessTemplates/Everything/Images/catalogue/xlarge/3ply-milkpan-14cm.jpg'
			],
			url           : 'http://www.lecreuset.no/3-ply-melkegryte-no.aspx#.U7OfoI1_vvk',
			amount_wanted : 1
		},


		{
			title         : 'Grillpanne',
			description   : [
				'Kvadratisk grillpanne i støpejern, 26 cm. Mange fine farge'
			].join(" "),
			price         : 1000,
			images        : [
				'http://www.lecreuset.no/EInBusinessTemplates/Everything/Images/catalogue/medium/grillpande_rosmarin.jpg'
			],
			url           : 'http://www.lecreuset.no/Kvadratisk-grillpanne-i-stopejern-no.aspx',
			amount_wanted : 1
		},


		{
			title         : 'Ramekin/Minigryte, 10cm',
			description   : [
				'Ramekin/Minigryte. Mange fine farger. Gjerne forskjellige!'
			].join(" "),
			price         : 250,
			images        : [
				'http://www.lecreuset.no/EInBusinessTemplates/Everything/Images/catalogue/xlarge/minigryde_rosmarin.jpg'
			],
			url           : 'http://www.lecreuset.no/Mini-gryte-i-stentoy-no.aspx',
			amount_wanted : 4
		},


		{
			title         : 'Ramekin/Minigryte, 6cm',
			description   : [
				'Ramekin/Minigryte. Mange fine farger. Gjerne forskjellige!'
			].join(" "),
			price         : 150,
			images        : [
				'http://www.lecreuset.no/EInBusinessTemplates/Everything/Images/catalogue/xlarge/minigryde_rosmarin.jpg'
			],
			url           : 'http://www.lecreuset.no/Mini-gryte-i-stentoy-no.aspx',
			amount_wanted : 6
		},


		{
			title         : 'Moomin tallerken',
			description   : [
				'Moomin tallerken (Arabia). Sammen, blå. 22 cm'
			].join(" "),
			price         : 300,
			images        : [
				'http://www.ting.no/content/mma/products/00/34/3405/gwi2000x2000/48005_1_mumi_tallerken.jpg'
			],
			url           :  	'http://www.ting.no/mummi-tallerken-sammen',
			amount_wanted : 1
		},



		{
			title         : 'Moomin tallerken',
			description   : [
				'Moomin tallerken (Arabia). På sprang. 22 cm'
			].join(" "),
			price         : 300,
			images        : [
				'http://www.ting.no/content/mma/products/00/34/3422/gwi2000x2000/48006_1_mumi_tallerken.jpg'
			],
			url           : 'http://www.ting.no/mummi-tallerken-pa-sprang',
			amount_wanted : 1
		},


		{
			title         : 'Kakeboks',
			description   : [
				'Mumin Fest kakeboks. 2,2 liter.',
			].join(" "),
			price         : 450,
			images        : [
				'http://www.scandinaviandesigncenter.no/ProductImages/Arabia/14302/01/338x338/01.jpg',
			],
			url           : 'http://www.scandinaviandesigncenter.no/Products/nok1/Trademark/moomin/14302/Mumin+Fest+kakeboks+',
			amount_wanted : 1
		},



		{
			title         : 'Middagstallerken',
			description   : [
				'Royal Copenhagen. Mussel Mega (blå). 27 cm'
			].join(" "),
			price         : 650,
			images        : [
				'http://www.royalcopenhagen.com/components/com_virtuemart/shop_image/product/2382627_Dinner_plate_27_cm____2_524d718ed810c.png'
			],
			url           : 'http://www.royalcopenhagen.com/da/butik/details/1/stel/5/blue-fluted-mega/145/dinner-plate-27-cm---2',
			amount_wanted : 12
		},


		{
			title         : 'Riedel vinglass',
			description   : [
				'Riedel, Vinum Chianti Classico Riesling.',
				'Anbefalte hvitvinsglass. Fås som <a href="',
				'https://www.kitchn.no/nettbutikk/dekketoy/glass-krus/hvitvinsglass/416/15/"',
				'>enkeltglass</a> eller som <a href=',
				'"https://www.flust.no/kjoekken/servise-og-glass/vinglass/riedel-vinum-chianti-classico-riesling-grand-cru-4pk-741654"',
				'>flerpakning</a>.'
			].join(" "),
			price         : 200,
			images        : [
				'https://www.kitchn.no/getfile.ashx?id=16177&type=.jpg',
			],

			url           : 'https://www.flust.no/kjoekken/servise-og-glass/vinglass/riedel-vinum-chianti-classico-riesling-grand-cru-4pk-741654/',
			amount_wanted : 12
		},


		{
			title         : 'Tagliatelle pastaskjærer',
			description   : [
				'Kenwood AT971a. Italiensk pastakvern med praktisk rulle i rustfritt stål og bronse.'
			].join(" "),
			price         : 1200,
			images        : [
				'http://www.netonnet.no/ItemExtraImages/hjem-og-fritid/kjokkenmaskin/tilbehor-kjokkenmaskiner/Kenwood-AT971a(169648)-0.jpg',
			],
			url           : 'http://www.netonnet.no/art/hjem-og-fritid/kjokkenmaskin/tilbehor-kjokkenmaskiner/Kenwood-AT971a/169648.3410/',
			amount_wanted : 1
		},

		/** Uspesifisert
		{
			title         : 'Sauterpane',
			description   : [
				'Blir oppdatert'
			].join(" "),
			price         : 800,
			images        : [
			],
			amount_wanted : 1
		},

		 Sengetøy
		 Kniver

		 */


	];

	// create wishes
	var ids = wishes.map(function (w) {
		return createWish(w);
	});

	// update any wishes we know of
	//buy({ id : ids[0] , amount : 1}); // kenwood er kjøpt
};