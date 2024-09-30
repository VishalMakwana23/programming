const num = 371;
const numStr = num.toString();
let count = 0;
for (let i = 0; i < numStr.length; i++) {
  const element = numStr[i];
  const cube = element * element * element;
  count += cube;
}

if(count === num){
    console.log("armstrong  number")
} else {
    console.log("not armstrong  number")
}
