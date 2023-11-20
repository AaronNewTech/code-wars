function order(words) {
  let array = words.split(" ");
  let arrayCopy = [];
  console.log(array);
  let counter = 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j].includes(counter)) {
        arrayCopy.push(array[j]);
        console.log(j);
        counter++;
      }
    }
  }

  let sortedString = arrayCopy.toString().replaceAll(",", " ");
  return sortedString;
}
