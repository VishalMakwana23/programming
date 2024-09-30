const str = "Mayur";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i])
    if (i === str.length - 1) {
        reverseStr += str[i].toUpperCase();
    } else if (i === 0) {
        reverseStr += str[i].toLowerCase();
    } else {
        reverseStr += str[i];
    }
}
console.log("🚀 :====== reverseStr:", reverseStr)