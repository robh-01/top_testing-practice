function capitalize(str) {
  let firstCharacterASCIIcode = str.charCodeAt(0);
  if (firstCharacterASCIIcode >= 97 && firstCharacterASCIIcode <= 122) {
    return String.fromCharCode(firstCharacterASCIIcode - 32) + str.slice(1);
  } else {
    return str;
  }
}

export { capitalize };
