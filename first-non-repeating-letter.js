function firstNonRepeatingLetter(s) {
  a = s.toLowerCase();

  if (s.length === 0) {
    return "";
  }

  if (s.length === 1) {
    return s;
  }

  let n = s.length;
  for (let i = 1; i < n; i++) {
    if (a[i] != a[0]) {
      let arr = Array.from(a);

      for (let str of arr) {
        // this compares the last index of a char
        if (arr.indexOf(str) === arr.lastIndexOf(str)) {
          return s[arr.indexOf(str)];
        }
      }
    }
  }

  return "";
}

function firstNonRepeatingLetter(s) {
  let l = s.toLowerCase();

  for (let i = 0; i < l.length; i++) {
    if (l.indexOf(l[i]) === l.lastIndexOf(l[i])) {
      return s[i];
    }
  }
  return "";
}
