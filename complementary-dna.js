function DNAStrand(dna) {
  //your code here
  let dnaCopy = "";
  for (i = 0; i < dna.length; i++) {
    console.log(dnaCopy[i]);
    if (dna[i] === "A") {
      dnaCopy += "T";
    } else if (dna[i] === "T") {
      dnaCopy += "A";
    } else if (dna[i] === "C") {
      dnaCopy += "G";
    } else if (dna[i] === "G") {
      dnaCopy += "C";
    }
  }

  return dnaCopy;
}
