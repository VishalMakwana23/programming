// Understanding Linear Search
// The Linear Search algorithm is a set of instructions to traverse the given list and check every element in the list until we find whatever element we are looking for.
//  The technical term for the element we are looking for is - key.

// The algorithm goes from the leftmost (or starting) element and continues searching until it either finds the desired element or goes through all the elements in the list.

// If the element is found, we will return the position (or index) of the element. If the element we are looking for doesn't exist in the list, we generally return -1.

// ------------------------------------------------------------------------
// Example - Linear Search

const data = [12, 8, 9, 11, 5, 11];

function linearSearch(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

const result = linearSearch(data, 5);
console.log("🚀 ~ linearSearch  result:", result);

// ------------------------------------------------------------------------
// Example - Global Linear Search

function globalLinearSearch(arr, key) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      results.push(i);
    }
  }

  // If results array is empty, return -1
  if (!results) {
    return -1;
  }

  return results;
}

const globalSearchResult = globalLinearSearch(data, 11);
console.log("🚀 ~ globalLinearSearch result :", globalSearchResult);
