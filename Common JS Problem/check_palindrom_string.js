const str = "ama";

/**
 * Using JS method
 */
// const reversedStr = str.split("").reverse().join("");
// if (reversedStr === str) {
//     console.log("String is palindrome.");
// } else {
//     console.log("String is not palindrome.");
// }

/**
 * Without JS method
 */
let reversedStr = ""
for(let i= str.length-1;i>=0 ;i--){
    reversedStr +=str[i];
}
console.log("🚀 :====== reversedStr:", reversedStr)
if (reversedStr === str) {
    console.log("String is palindrome.");
} else {
    console.log("String is not palindrome.");
}