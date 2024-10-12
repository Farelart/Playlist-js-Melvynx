const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
];

const newArrayForEach = [];
array.forEach((obj) => {
    newArrayForEach.push({...obj, username: `${obj.username}?`});
})
console.log(newArrayForEach);

const newArrayMap = array.map((obj) => ({...obj, username: `${obj.username}?`}));
console.log(newArrayMap);

const newArrayFilter = array.filter((obj) => obj.team === "red");
console.log(newArrayFilter);

const totalScore = array.reduce((acc, curr) => acc + curr.score, 0);
console.log(totalScore);

const newList = array.map((obj) => ({...obj, items: obj.items.map((item) => `${item}!`)}));
console.log(newList);