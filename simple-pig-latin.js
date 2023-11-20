function pigIt(str) {
  let conStr = str.split(" ");
  let punct;
  if (
    conStr[conStr.length - 1] === "!" ||
    conStr[conStr.length - 1] === "." ||
    conStr[conStr.length - 1] === "?"
  ) {
    punct = conStr[conStr.length - 1];
    conStr = conStr.slice(0, conStr.length - 1);
  }

  let output = [];

  for (let i = 0; i < conStr.length; i++) {
    let char = conStr[i][0];
    // console.log(char)
    output.push(conStr[i].slice(1, conStr[i].length) + char + "ay");
    // console.log(output)
  }
  let final = output.join(" ");

  if (punct === undefined) {
    final = final;
    return final;
  } else {
    final = final + " " + punct;
    return final;
  }
}
