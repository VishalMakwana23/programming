const str = "{}";

const isValidBracketPair = (str) => {
  if (str === "") return "valid";
  const newStr = str.replace("()", "").replace("{}", "").replace("[]", "");
  if (newStr && str.length !== newStr.length) {
    return isValidBracketPair(newStr);
  } else if (str.length === newStr.length) {
    return "invalid";
  }
  return isValidBracketPair(newStr);
};

console.log(isValidBracketPair(str));
