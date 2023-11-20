function toCamelCase(str) {
  if (str === "") {
    return str;
  } else {
    let newString = str.replace(/-/g, " ");

    console.log(newString);

    newString = newString.replace(/_/g, " ");

    if (str[0] === newString[0].toLowerCase()) {
      let finalSentence = newString.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );

      str = finalSentence.replace(/\s/g, "");
      str = str[0].toLowerCase() + str.substring(1);
    } else {
      let finalSentence = newString.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );

      str = finalSentence.replace(/\s/g, "");
    }

    return str;
  }
}
