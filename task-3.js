// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


function findMostFrequentElement(arr) {
    const freqMap = {};
    for (const num of arr) {
      freqMap[num] = (freqMap[num] || 0) + 1;
    }
  
    let mostFrequentElement;
    let maxFrequency = 0;
  
    for (const num in freqMap) {
      if (freqMap[num] > maxFrequency) {
        mostFrequentElement = num;
        maxFrequency = freqMap[num];
      }
    }
  
    return mostFrequentElement;
  }
  
  const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = findMostFrequentElement(arr);
  console.log("Most frequent element is :", result); 
  