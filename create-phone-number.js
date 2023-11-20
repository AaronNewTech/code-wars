function createPhoneNumber(numbers) {
  let string = numbers.toString();

  let cleanedString = string.replace(/[,\s[\]]/g, "");

  const edit =
    "(" +
    cleanedString.slice(0, 3) +
    ")" +
    " " +
    cleanedString.slice(3, 6) +
    "-" +
    cleanedString.slice(6, 10);

  return edit;
}
