// Bubble sort algorithm is an algorithm that sorts the array by comparing two adjacent elements and swaps them if they are not in the intended order.
// Here order can be anything like increasing order or decreasing order.

// Step-by-step guide:

// · Start by comparing the first two elements in an array.

// · Swap them if required.

// · Continue till the end of the array. At this point, you have made a series of inner passes and completed an outer pass.

// Example - Bubble Sort

const arr = [3, 4, 9, 3, 1];

function bubbleSort(arr) {
  if (!arr) return;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Return Sorted Array
  return arr;
}

const sortedArray = bubbleSort(arr);
console.log("🚀 ~ sortedArray:", sortedArray);
