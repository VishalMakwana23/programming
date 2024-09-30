let a = {
  value: 1,
  toString: function () {
    return this.value++;
  },
};

if (a == 1 && a == 2 && a == 3) {
  console.log("called");
}
