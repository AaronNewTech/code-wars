function findMostFrequent(arr) {
  // map to store the number and its frequency
  const frequencyMap = new Map();
  // loop to iterate and populate the frequencyMap with the number and its frequency
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  // find the most frequently occurring numbers
  let maxFrequency = 0;
  let mostFrequentNumbers = [];
  // loop to iterate through the frequencyMap
  for (const [num, frequency] of frequencyMap.entries()) {
    // check if the frequency is the highest
    if (frequency > maxFrequency) {
      // updates the maximum frequency if the current frequency is the highest
      maxFrequency = frequency;
      // erases the array and inserts the most frequent number into the array
      mostFrequentNumbers = [num];
      // if a number's frequency ties with another number it is added to the array
    } else if (frequency === maxFrequency) {
      mostFrequentNumbers.push(num);
    }
  }
  
  // checkes for the largest number in the array if there is a tie in the frequency of numbers using the spread operator to check each value
  return Math.max(...mostFrequentNumbers);
}

// examples
console.log(findMostFrequent([12, 10, 8, 12, 7, 6, 4, 10, 12])); // expected output: 12
console.log(findMostFrequent([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // expected output: 12
console.log(findMostFrequent([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // expected output: 3
