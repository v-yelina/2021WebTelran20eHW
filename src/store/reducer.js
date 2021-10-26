const initState = {
  scoreTable: [],
  quizzes: [
    {
      id: 1,
      title: "Geography",
      // tags: ["", ""]
      questions: [
        {
          id: 1,
          title: "Which of these U.S. states does NOT border Canada?",
          answers: [
            {
              id: 1,
              title: "Indiana",
              correct: true,
              // points: 10,
            },
            {
              id: 2,
              title: "Alaska",
              correct: false,
            },
            {
              id: 3,
              title: "Minnesota",
              correct: false,
            },

            {
              id: 4,
              title: "Montana",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          title: "Which of these countries was NOT a part of the Soviet Union?",
          answers: [
            {
              id: 1,
              title: "Poland",
              correct: true,
              // points: 10,
            },
            {
              id: 2,
              title: "Georgia",
              correct: false,
            },
            {
              id: 3,
              title: "Belarus",
              correct: false,
            },
            {
              id: 4,
              title: "Ukraine",
              correct: false,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "General Knowledge",
      // tags: ["", ""]
      questions: [
        {
          id: 1,
          title: "What is the longest that an elephant has ever lived?",
          answers: [
            {
              id: 1,
              title: "86 years",
              correct: true,
              // points: 10,
            },
            {
              id: 2,
              title: "142 years",
              correct: false,
            },
            {
              id: 3,
              title: "82 years",
              correct: false,
            },
            {
              id: 4,
              title: "42 years",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          title: "How many rings are on the Olympic flag?",
          answers: [
            {
              id: 1,
              title: "5",
              correct: true,
              // points: 10,
            },
            {
              id: 2,
              title: "7",
              correct: false,
            },
            {
              id: 3,
              title: "none",
              correct: false,
              // points: 10,
            },
            {
              id: 4,
              title: "4",
              correct: false,
            },
          ],
        },
        {
          id: 3,
          title:
            " In darts, what's the most points you can score with a single throw?",
          answers: [
            {
              id: 1,
              title: "20",
              correct: false,
              // points: 10,
            },
            {
              id: 2,
              title: "50",
              correct: false,
            },
            {
              id: 3,
              title: "60",
              correct: true,
              // points: 10,
            },
            {
              id: 4,
              title: "100",
              correct: false,
            },
          ],
        },
        {
          id: 4,
          title:
            " Which of these animals does NOT appear in the Chinese zodiac?",
          answers: [
            {
              id: 1,
              title: "Bear",
              correct: true,
              // points: 10,
            },
            {
              id: 2,
              title: "Rabbit",
              correct: false,
            },
            {
              id: 3,
              title: "Dragon",
              correct: false,
              // points: 10,
            },
            {
              id: 4,
              title: "Dog",
              correct: false,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Movie",
      // tags: ["", ""]
      questions: [
        {
          id: 1,
          title:
            " Which of these is NOT a real job title that appears in movie credits?",
          answers: [
            {
              id: 1,
              title: "Best boy",
              correct: false,
              // points: 10,
            },
            {
              id: 2,
              title: "Key grip",
              correct: false,
            },
            {
              id: 3,
              title: "Gaffer",
              correct: false,
            },

            {
              id: 4,
              title: "Splicer",
              correct: true,
            },
          ],
        },
        {
          id: 2,
          title: "What was the first movie in the Marvel Cinematic Universe?",
          answers: [
            {
              id: 1,
              title: "Iron Man",
              correct: true,
              // points: 10,
            },
            {
              id: 2,
              title: "Batman",
              correct: false,
            },
            {
              id: 3,
              title: "Spider-Man",
              correct: false,
            },
            {
              id: 4,
              title: "The Avengers",
              correct: false,
            },
          ],
        },
        {
          id: 3,
          title:
            " Which of the following characters would you be most likely to see in a film noir movie?",
          answers: [
            {
              id: 1,
              title: "A cynical private investigator",
              correct: true,
              // points: 10,
            },
            {
              id: 2,
              title: "An African tribal leader",
              correct: false,
            },
            {
              id: 3,
              title: "A fighter pilot",
              correct: false,
            },
            {
              id: 4,
              title: "A beach volleyball player",
              correct: false,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Japan",
      // tags: ["", ""]
      questions: [
        {
          id: 1,
          title:
            "In Japanese, the country of Japan is represented by the characters: '日本'. What is the literal meaning of these characters?",
          answers: [
            {
              id: 1,
              title: "Long cloud",
              correct: false,
              // points: 10,
            },
            {
              id: 2,
              title: "Heavenly kingdom",
              correct: false,
            },
            {
              id: 3,
              title: "Sea people",
              correct: false,
            },
            {
              id: 4,
              title: "Sun origin",
              correct: true,
            },
          ],
        },
        {
          id: 2,
          title:
            "Which company manufactures both musical instruments and motorcycles?",
          answers: [
            {
              id: 1,
              title: "Isuzu",
              correct: false,
              // points: 10,
            },
            {
              id: 2,
              title: "Kawasaki",
              correct: false,
            },
            {
              id: 3,
              title: "Mitsubishi",
              correct: false,
              // points: 10,
            },
            {
              id: 4,
              title: "Yamaha",
              correct: true,
            },
          ],
        },
        {
          id: 3,
          title: "What is a torii?",
          answers: [
            {
              id: 1,
              title: "A playing card",
              correct: false,
              // points: 10,
            },
            {
              id: 2,
              title: "A sea urchin",
              correct: false,
            },
            {
              id: 3,
              title: "A traditional Japanese gate",
              correct: true,
              // points: 10,
            },
            {
              id: 4,
              title: "A traditional sash",
              correct: false,
            },
          ],
        },
      ],
    },
  ],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SEND_SCORE":
      return { ...state, scoreTable: [...state.scoreTable, action.payload] };

    default:
      return state;
  }
};
