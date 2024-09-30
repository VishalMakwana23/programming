// - Filter data in between ages
const array = [
  {
    name: "vishal",
    age: 23,
  },
  {
    name: "vishal1",
    age: 115,
  },
  {
    name: "vishal2",
    age: 119,
  },
  {
    name: "vishal3",
    age: 121,
  },
  {
    name: "vishal4",
    age: 120,
  },
];

const result = {};

array.forEach((item) => {
  const start = parseInt(item.age / 10) * 10;
  const end = parseInt(item.age / 10) * 10 + 9;
  result[`${start}-${end}`] = [
    ...(Object.keys(result).includes(`${start}-${end}`)
      ? result[`${start}-${end}`]
      : []),
    item,
  ];
});

console.log("Result : ", result)

// Output : 
// {
//   '20-29': [ { name: 'vishal', age: 23 } ],
//   '110-119': [ { name: 'vishal1', age: 115 }, { name: 'vishal2', age: 119 } ],
//   '120-129': [ { name: 'vishal3', age: 121 }, { name: 'vishal4', age: 120 } ]
// }