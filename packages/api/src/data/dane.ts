export interface Answer {
	id: string;
	text: string;
}

export interface Qsts {
	id: number;
	text: string;
	correct: string | null;
	media?: true;
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
		id: "VV-KaFTdazJAFeMtlEh49y20AyM2esEFc",
		num: 100,
		questions: {
			id: 1,
			text: "Obejrzyj film",
			answers: null,
			correct: null,
			media: true,
		},
	},
	{
		id: "VV-9ow9ELjNlMGVQPlF5khGuerIsw4tfb",
		num: 101,
		questions: {
			id: 1,
			text: "Obejrzyj film",
			answers: null,
			correct: null,
			media: true,
		},
	},
];
