const tags = [
  {
    title: "Tag 1",
    emoji:
      "https://em-content.zobj.net/source/microsoft/379/high-voltage_26a1.png",
  },
  {
    title: "Tag 2",
    emoji:
      "https://em-content.zobj.net/source/microsoft/379/deciduous-tree_1f333.png",
  },
];

const questions = [
  {
    title: "Question 1",
    answers: [
      {
        title: "Answer 1",
        isRight: false,
      },
      {
        title: "Answer 2",
        isRight: true,
      },
    ],
    explanation: {
      knowMore: "https://google.com",
      content: "Lorem ipsum",
    },
    tag: tags[0],
  },
  {
    title: "Question 2",
    answers: [
      {
        title: "Answer 1",
        isRight: true,
      },
      {
        title: "Answer 2",
        isRight: false,
      },
    ],
    explanation: {
      knowMore: "https://google.com",
      content: "Lorem ipsum",
    },
    tag: tags[1],
  },
];

const categories = [
  {
    emoji:
      "https://em-content.zobj.net/source/microsoft/379/high-voltage_26a1.png",
    title: "Catégorie 1",
    tag: tags[0],
  },
  {
    emoji:
      "https://em-content.zobj.net/source/microsoft/379/deciduous-tree_1f333.png",
    title: "Catégorie 2",
    tag: tags[1],
  },
];

export { tags, questions, categories };
