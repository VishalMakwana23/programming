// character count

const str = "#$^&&*())[];fgfg";

const recur = (str, ans = {}) => {
  console.count("recur");
  if (str) {
    if (".()[]{}$#^*+".includes(str[0])) {
      const tottal = str.match(new RegExp("\\" + str[0], "g")).length;
      ans[str[0]] = tottal;
      const a = str.replace(new RegExp("\\" + str[0], "g"), "");
      return recur(a, ans);
    }
    const total = str.match(new RegExp(str[0], "g")).length;
    ans[str[0]] = total;
    str.replace(new RegExp(str[0], "g"), "");
    return recur(str.replace(new RegExp(str[0], "g"), ""), ans);
  } else {
    return ans;
  }
};
console.log(recur(str));

// -- using reduce

const data = [...str].reduce((accu, curr) => {
  console.count("reduce");
  if (!accu[curr]) {
    accu[curr] = [...str].filter((i) => i == curr).length;
  }
  // accu[curr] = accu[curr] ? accu[curr] + 1 : 1
  return accu;
}, {});
