export interface Question {
  id: string;
  num: number;
  questions: {
    id: number;
    text: string;
    correct: string;
    answers:
      | {
          id: string;
          text: string;
        }[]
      | null;
  }[];
}

export const DANE: Question[] = [
  {
    id: "fMLktCCH5xN9grgzMzuZ2srqxdebkd",
    num: 1,
    questions: [
      {
        id: 1,
        text: "Kiedy struny dźwięk wydają,\nWargi, język - już czekają,\nOne tworzą z dźwięków słowa,\nTak powstaje nasza...",
        answers: null,
        correct: "mowa.",
      },
    ],
  },
  {
    id: "mffmM2fCPWScgq78ZCS94vbkm8dtnK",
    num: 1,
    questions: [
      {
        id: 1,
        text: "Jak nazywa się dawna siedziba królów Polski?",
        correct: "A",
        answers: [
          { id: "A", text: "Wawel" },
          {
            id: "B",
            text: "Zamościu",
          },
          {
            id: "C",
            text: "",
          },
        ],
      },
    ],
  },
];
