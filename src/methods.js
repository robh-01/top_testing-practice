function capitalize(str) {
  let firstCharacterASCIIcode = str.charCodeAt(0);
  if (firstCharacterASCIIcode >= 97 && firstCharacterASCIIcode <= 122) {
    return String.fromCharCode(firstCharacterASCIIcode - 32) + str.slice(1);
  } else {
    return str;
  }
}

function reverseString(str) {
  const arrayOfCharacters = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arrayOfCharacters.push(str.charAt(i));
  }
  let reversedString = arrayOfCharacters.reduce(
    (revStr, char) => revStr + char,
    ""
  );
    return reversedString;
}

export { capitalize, reverseString };
