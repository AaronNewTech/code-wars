function friend(friends) {
  let array = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      array.push(friends[i]);
    }
  }
  return array;
}
