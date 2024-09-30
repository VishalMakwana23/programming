// Understanding Binary Search
// Binary Search is a divide-and-conquer algorithm, that divides the array roughly in half every time it checks whether an element of the array is the one we're looking for.

// In other words, we divide the problem into simpler problems until it becomes simple enough to solve them directly.
// Let's assume we have a sorted array (in ascending order) and take a look at the steps of binary search:

// 1. Find the middle element of the given array.
// 2. Compare the middle element with the value we are looking for (called key).
// - If the key is less than the middle element, search in the left half.
// - If the key is more than the middle element, search in the right half.
// - If the key is equal to the middle element, return the index of the middle element.
// 3. Continue with steps 1, 2 until we are left with a single element.
// 4. If the key is still not found, return -1.

// Example -

const data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const binarySearch = (arr, searchValue) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Find middle index
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === searchValue) {
      // found the key
      return middle;
    } else if (arr[middle] < searchValue) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // continue searching to the right
      end = middle - 1;
    }
  }
  // If key wasn't found
  return -1;
};

const sortedArray = data.sort((a, b) => a - b);
const result = binarySearch(sortedArray, 13);
console.log("🚀 ~ result:", result);

//------------------------------------------------------------------

// Using recursion

function binarySearchRecursion(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; // Element not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Element found
  }

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

const index = binarySearchRecursion(data, 11);

if (index !== -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log("Element not found");
}
