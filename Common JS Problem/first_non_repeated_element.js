const str = "bbcabcdefe";



const strObject =  {};

for (let index = 0; index < str.length; index++) {
  const element = str[index];
  if(strObject[element]){
    strObject[element] += 1;
  } else {
    strObject[element] = 1;
  }
}

let firstNonRepeated = ""
for (const key in strObject) {
  const element = strObject[key];
  if(element == 1){
    firstNonRepeated = key;
    break;
  }
}
console.log("🚀 :====== strObject:", strObject)
console.log("🚀 :====== firstNonRepeated:", firstNonRepeated)
