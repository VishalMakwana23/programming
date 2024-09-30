const arr = [10, [1, 2], [3, 4], [5, 7], 55, 77, [23, 98, 31, [40, 9]]];


// /**
//  * Using JS method
//  */

const result = arr.flat(2);

// /**
//  * Without JS method
//  */

function flatArr(arr, result = []) {
  arr.forEach((element) => {
    console.log("🚀 :====== element:", element);
    if (Array.isArray(element)) {
      flatArr(element, result);
    } else {
      result.push(element);
    }
  });
  return result;
}


console.log("🚀 :====== result:", flatArr(arr));

