const test = {
  a: {
    b: {
      c: 1,
    },
    d: 2,
  },
  e: 3,
};

function flattenObj(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object") {
      flattenObj(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

console.log("🚀 :====== flattenObj:", flattenObj(test));

// const obj1 = {
//   name: "Mayur Rana",
//   age: 25,
//   getInfo: function () {
//     return `${this.name} is ${this.age} years old.`;
//   },
// };

// const obj2 = {
//   city: "surat",
// };
// obj2.__proto__ = obj1;
// console.log("==========:", obj2.getInfo());
