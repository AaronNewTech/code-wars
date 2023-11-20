function arrayDiff(a, b) {
  //  item is the element in a that is filtered.
  //  it is checked against b and if not in b assigned to a
  a = a.filter((item) => !b.includes(item));
  return a;
}
