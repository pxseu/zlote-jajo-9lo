export interface Answer {
	id: string;
	text: string;
}

export interface Qsts {
	id: number;
	text: string;
	correct: string | null;
	media?: "video" | "image";
	answers: Answer[] | null;
}

export interface Question {
	id: string;
	num: number;
	questions: [Qsts, Qsts, Qsts] | Qsts;
}

export const DANE: Question[] = [
	{
		id: "fMLktCCH5xN9grgzMzuZ2srqxdebkd",
		num: 1,
		questions: [
			{
				id: 1,
				text: "Dokończ zdanie:\n„Kiedy struny dźwięk wydają,\nWargi, język - już czekają,\nOne tworzą z dźwięków słowa,\nTak powstaje nasza...”",
				answers: null,
				correct: "mowa",
			},
			{
				id: 2,
				text: "Dokończ zdanie:\n„W czasie burzy - najpierw błysk,\npotem huk, w tym jest cały sęk,\n... szybciej mknie, niż dźwięk”",
				answers: null,
				correct: "Światło",
			},
			{
				id: 3,
				text: "Co to jest?\n„We dnie w nocy jest na niebie,\nale nie opali ciebie”",
				answers: null,
				correct: "Księżyc.",
			},
		],
	},
	{
		id: "mffmM2fCPWScgq78ZCS94vbkm8dtnK",
		num: 2,
		questions: [
			{
				id: 1,
				text: "Jak nazywa się dawna siedziba królów Polski?",
				correct: "A",
				answers: [
					{ id: "A", text: "Wawel" },
					{
						id: "B",
						text: "Zamość",
					},
					{
						id: "C",
						text: "Gdańsk",
					},
					{
						id: "D",
						text: "Warszawa",
					},
				],
			},
			{
				id: 2,
				text: "Jak nazywała się I stolica Polski?",
				correct: "B",
				answers: [
					{ id: "A", text: "Warszawa" },
					{
						id: "B",
						text: "Gniezno",
					},
					{
						id: "C",
						text: "Zamościu",
					},
					{
						id: "D",
						text: "Gdańsku",
					},
				],
			},
			{
				id: 3,
				text: "Jak nazywała się II stolica Polski?",
				correct: "C",
				answers: [
					{ id: "A", text: "Warszawa" },
					{
						id: "B",
						text: "Gniezno",
					},
					{
						id: "C",
						text: "Kraków",
					},
					{
						id: "D",
						text: "Gdańsku",
					},
				],
			},
		],
	},
	{
		id: "E7GsoQx1ADXhjsWQd3ifRprWO6ejSx",
		num: 3,
		questions: [
			{
				id: 1,
				text: "Zjawisko przejścia ze stanu lotnego w stan stały nazywamy:",
				correct: "A",
				answers: [
					{ id: "A", text: "Resublimacja" },
					{ id: "B", text: "Krzepnięcie" },
					{ id: "C", text: "Sublimacja" },
					{
						id: "D",
						text: "Skraplanie",
					},
				],
			},
			{
				id: 2,
				text: "Zjawisko przejścia ze stanu lotnego w stan ciekły nazywamy:",
				correct: "D",
				answers: [
					{ id: "A", text: "Resublimacja" },
					{ id: "B", text: "Krzepnięcie" },
					{ id: "C", text: "Sublimacja" },
					{
						id: "D",
						text: "Skraplanie",
					},
				],
			},
			{
				id: 3,
				text: "Zjawisko przejścia ze stanu ciekłego w stan stały nazywamy:",
				correct: "B",
				answers: [
					{ id: "A", text: "Resublimacja" },
					{ id: "B", text: "Krzepnięcie" },
					{ id: "C", text: "Sublimacja" },
					{
						id: "D",
						text: "Skraplanie",
					},
				],
			},
		],
	},
	{
		id: "XhWp7THUJoYSjLPtgDMc0i6E20TqVK",
		num: 4,
		questions: [
			{
				id: 1,
				text: "‘Once upon a time ..’tak zazwyczaj zaczynają się:",
				correct: "D",
				answers: [
					{ id: "A", text: "Przesłuchania" },
					{ id: "B", text: "Umowy cywilno-prawne" },
					{ id: "C", text: "Testamenty" },

					{ id: "D", text: "Bajki" },
				],
			},
			{
				id: 2,
				text: "Jak kończy się następujący angielski  idiom: ‘Jack of all skills…’",
				correct: "B",
				answers: [
					{
						id: "A",
						text: "and master of all",
					},
					{
						id: "B",
						text: "and master of none",
					},
					{
						id: "C",
						text: "serves no one",
					},
					{
						id: "D",
						text: "knows all",
					},
				],
			},
			{
				id: 3,
				text: "Ile stanów wchodzi w skład Stanów Zjednoczonych Ameryki?",
				correct: "A",
				answers: [
					{
						id: "A",
						text: "50",
					},
					{
						id: "B",
						text: "51",
					},
					{
						id: "C",
						text: "52",
					},
					{
						id: "D",
						text: "53",
					},
				],
			},
		],
	},
	{
		id: "qP2omUYQ68DTkQfv93TAsz4mtm2dfG",
		num: 5,
		questions: [
			{
				id: 1,
				text: "Najsłynniejszy polski rycerz, wziął udział w bitwie pod Grunwaldem",
				answers: null,
				correct: "Zawisza Czarny",
			},
			{
				id: 2,
				text: "Słynny rycerz z Anglii, który zdobył sławę na turniejach wojskowych",
				answers: null,
				correct: "Wilhelm Marshal",
			},
			{
				id: 3,
				text: "Sławny z podróży Wenus, Niemiecki rycerz",
				answers: null,
				correct: "Ulrich von Liechtenstein",
			},
		],
	},
	{
		id: "NHEzLzIWDHxYrKWQ88wccBArrmOnLY",
		num: 6,
		questions: [
			{
				id: 1,
				text: "Kto napisał „Pana Tadeusza”?",
				answers: null,
				correct: "Adam Mickiewicz",
			},
			{
				id: 2,
				text: "Kto napisał „Lalkę”?",
				answers: null,
				correct: "Bolesław Prus",
			},
			{
				id: 3,
				text: "Kto napisał „Wesele”?",
				answers: null,
				correct: "Stanisław Wyspiański",
			},
		],
	},
	{
		id: "EyDlFaptN0rKsY15TJ9bOz8QqLAovm",
		num: 7,
		questions: [
			{
				id: 1,
				text: "Jak się nazywał kabaret, w którym występował Krzysztof Kolberger?",
				answers: null,
				correct: "Syfon",
			},
			{
				id: 2,
				text: "Czym był pośmiertnie odznaczony Krzysztof Kolberger?",
				answers: null,
				correct: "Krzyżem Komandorskim Orderu Odrodzenia Polski",
			},
			{
				id: 3,
				text: "Jaką karierę początkowo rozmyślał Krzysztof Kolberger?",
				answers: null,
				correct: "Sportowiec",
			},
		],
	},
	{
		id: "L6lTXdJYtAjZBAzmu16nRdhDvdEMOV",
		num: 8,
		questions: [
			{
				id: 1,
				text: "Jaki kolor nie występuje na fladze Australii?",
				correct: "D",
				answers: [
					{ id: "A", text: "Czerwony" },
					{ id: "B", text: "Niebieski" },
					{ id: "C", text: "Biały" },
					{ id: "D", text: "Czarny" },
				],
			},
			{
				id: 2,
				text: "Jaki kolor nie występuje na fladze Nigeru?",
				correct: "A",
				answers: [
					{ id: "A", text: "Czerwony" },
					{ id: "B", text: "Pomarańczowy" },
					{ id: "C", text: "Biały" },
					{ id: "D", text: "Zielony" },
				],
			},
			{
				id: 3,
				text: "Jaki kolor nie występuje na fladze RPA?",
				correct: "B",
				answers: [
					{ id: "A", text: "Czerwony" },
					{ id: "B", text: "Pomarańczowy" },
					{ id: "C", text: "Biały" },
					{ id: "D", text: "Żółty" },
				],
			},
		],
	},
	{
		id: "c7fAfA1pT1ImhxpuKE5oEPeRNjsWOq",
		num: 9,
		questions: [
			{
				id: 1,
				text: "Co się stało w piekarni „Pawełek” 14 lutego 2007?",
				correct: "C",
				answers: [
					{
						id: "A",
						text: "Nic się nie stało",
					},
					{
						id: "B",
						text: "Mm smaczne pączki takie młode",
					},
					{
						id: "C",
						text: "Kazali mi",
					},
					{
						id: "D",
						text: "Dzień jak codzień",
					},
				],
			},
			{
				id: 2,
				text: "Cristiano Ronaldo",
				correct: "A",
				answers: [
					{
						id: "A",
						text: "SUIIIIIIIIIIII",
					},
					{
						id: "B",
						text: "Reseba!!",
					},
					{
						id: "C",
						text: "Ankara ankara",
					},
					{
						id: "D",
						text: "I play a lot of  Fortniter",
					},
				],
			},
			{
				id: 3,
				text: "Kto ukradł rower?",
				correct: "D",
				answers: [
					{
						id: "A",
						text: "Kacper - „To ja ukradłem rower”",
					},
					{
						id: "B",
						text: "Koleżanka Kacpra - „Widziałem jak ten Kacper go ukradł”",
					},
					{
						id: "C",
						text: "Przechodzeń  - „Widziałam jak młody chłopak uciekał z rowerem”",
					},
					{
						id: "D",
						text: "Jamal - „Mieszka w Afryce i śpi”",
					},
				],
			},
		],
	},
	{
		id: "myPRQkDDUTT1eu3EySPNLz9xOQQuk0",
		num: 10,
		questions: [
			{
				id: 1,
				text: "Wiek najstarszego syna Cristiano Ronaldo?",
				correct: "11 lat",
				answers: null,
			},
			{
				id: 2,
				text: "Wiek starszej córki Roberta Lewandowskiego?",
				correct: "4 lata",
				answers: null,
			},
			{
				id: 3,
				text: "Wiek najstarszefgo syna Lionela Messiego?",
				correct: "9 lat",
				answers: null,
			},
		],
	},
	{
		id: "Iqm4a3h76o8sE0YxgJUXUBL0q1CuHc",
		num: 11,
		questions: [
			{
				id: 1,
				text: "Jaki jest najmniejszy ptak na świecie?",
				correct: "Koliber",
				answers: null,
			},
			{
				id: 2,
				text: "Jaki jest najmniejszy ssak na świecie?",
				correct: "Ryjówka",
				answers: null,
			},
			{
				id: 3,
				text: "Jaki jest najmniejszy gad na świecie?",
				correct: "Kameleon",
				answers: null,
			},
		],
	},
	{
		id: "idoi1g1gbL1HllzvxM31fV7ZzWMPuH",
		num: 12,
		questions: [
			{
				id: 1,
				text: "Rok powstania Facebooka.",
				correct: "2004",
				answers: null,
			},
			{
				id: 2,
				text: "Rok powstania Instagrama.",
				correct: "2010",
				answers: null,
			},
			{
				id: 3,
				text: "Rok powstania Snapchata.",
				correct: "2011",
				answers: null,
			},
		],
	},
	{
		id: "v4nHp2rO2bgY4jvQLHCFJOieA2HoXy",
		num: 13,
		questions: [
			{
				id: 1,
				text: "Podaj film, który przyniósł największe zyski w historii.",
				correct: "Avatar",
				answers: null,
			},
			{
				id: 2,
				text: "Podaj serię filmów, które przyniósła największę zyski w historii.",
				correct: "The Avengers",
				answers: null,
			},
			{
				id: 3,
				text: "Podaj najlepiej sprzedającą się grę komputerową w historii.",
				correct: "Tetris",
				answers: null,
			},
		],
	},
	{
		id: "mvua82UWBy98j2OZmkaYyAwOdmbUgf",
		num: 14,
		questions: [
			{
				id: 1,
				text: "Kto jest twórcą Gangnam Style?",
				correct: "PSY",
				answers: null,
			},
			{
				id: 2,
				text: "Kiedy swoją premierę miała piosenka pt. Despacito?",
				correct: "2017",
				answers: null,
			},
			{
				id: 3,
				text: "Skąd jedzie pociąg?",
				correct: "Z daleka",
				answers: null,
			},
		],
	},
	{
		id: "wE4Vg2xO0luMgV9RAgizHzNA8TIcuA",
		num: 15,
		questions: [
			{
				id: 1,
				text: "Tlenek wodoru w mowie potocznej to?",
				correct: "Woda",
				answers: null,
			},
			{
				id: 2,
				text: "Ile krwi w organizmie ma przeciętny człowiek?",
				correct: "Ok 5. litrów",
				answers: null,
			},
			{
				id: 3,
				text: "Chlorek sodu w mowie potocznej to?",
				correct: "Sól kuchenna",
				answers: null,
			},
		],
	},
	// Staszki bellow
	{
		id: "VV-i33Wd0m10Ca28FOBKyGLv4682CgdYL",
		num: 100,
		questions: {
			id: 1,
			text: "Złoty Kod + 2 punkty\nHasło: saracatunga",
			answers: null,
			correct: null,
			media: "image",
		},
	},
	{
		id: "VV-KaFTdazJAFeMtlEh49y20AyM2esEFc",
		num: 101,
		questions: {
			id: 1,
			text: "Obejrzyj film",
			answers: null,
			correct: null,
			media: "video",
		},
	},
	{
		id: "VV-9ow9ELjNlMGVQPlF5khGuerIsw4tfb",
		num: 102,
		questions: {
			id: 1,
			text: "Obejrzyj film",
			answers: null,
			correct: null,
			media: "video",
		},
	},
	{
		id: "VV-jUBdbRjwtAnc11BMzYUpWcY48TJkP1",
		num: 103,
		questions: {
			id: 1,
			text: "Obejrzyj film",
			answers: null,
			correct: null,
			media: "video",
		},
	},
	{
		id: "VV-RZ3p3SU7kSEb9WT6hv8UPLkebEqnAC",
		num: 104,
		questions: {
			id: 1,
			text: "Obejrzyj film",
			answers: null,
			correct: null,
			media: "video",
		},
	},
	{
		id: "VV-Xxt63WuDXOXjWiBx5a7cfEE7l5es3R",
		num: 105,
		questions: {
			id: 1,
			text: "Obejrzyj film",
			answers: null,
			correct: null,
			media: "video",
		},
	},
	{
		id: "VV-mHBDW98eGadiKq6SyFYX8v7iA7O4h2",
		num: 106,
		questions: {
			id: 1,
			text: "Obejrzyj film",
			answers: null,
			correct: null,
			media: "video",
		},
	},

	// Cyberwojna
	{
		id: "VV-YK7mZ7YpIFxxEUgkd3uO2l3XBoMZsh",
		num: 200,
		questions: {
			id: 1,
			text: "Spójrz na obrazek",
			answers: null,
			correct: null,
			media: "image",
		},
	},
];
