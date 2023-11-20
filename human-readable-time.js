function humanReadable(seconds) {
  if (seconds >= 359999) {
    return "99:59:59";
  }
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let conseconds = Math.floor((seconds % 3600) % 60);

  if (hours < 10) {
    hours = "0" + hours.toString();
  }
  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }
  if (conseconds < 10) {
    conseconds = "0" + conseconds.toString();
  }

  return `${hours}:${minutes}:${conseconds}`;
}
