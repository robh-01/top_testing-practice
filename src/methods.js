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

function isSmallAlphabet(characterCode) {
  return characterCode >= 97 && characterCode <= 122;
}

function isCapitalAlphabet(characterCode) {
  return characterCode >= 65 && characterCode <= 90;
}

function shiftCharacterCode(characterCode, shiftFactor) {
  
  // shift the code of small letters by shiftFactor
  if (isSmallAlphabet(characterCode)) {
    let shiftedCode = characterCode + shiftFactor;
    if (shiftedCode > 122) {
      return 96 + (shiftedCode - 122);
    }
    if (shiftedCode < 97) {
      return 123 - (97 - shiftedCode);
    }
    return shiftedCode;
  }

  // shift the code of capital letters by shiftFactor
  if (isCapitalAlphabet(characterCode)) {
    let shiftedCode = characterCode + shiftFactor;
    if (shiftedCode > 90) {
      return 64 + (shiftedCode - 90);
    }
    if (shiftedCode < 65) {
      return 91 - (65 - shiftedCode);
    }

    return shiftedCode;
  }

  //if the code is not of an alphabet & return the code as it is
  return characterCode;
}

function caesarCipher(str, shiftFactor) {
  const arrayOfCharactersCode = [];
  for (let i = 0; i <= str.length - 1; i++) {
    arrayOfCharactersCode.push(str.charCodeAt(i));
  }
  let crypticText = arrayOfCharactersCode.reduce(
    (crypticText, characterCode) => {
      return (
        crypticText +
        String.fromCharCode(shiftCharacterCode(characterCode, shiftFactor))
      );
    },
    ""
  );

  return crypticText;
}

export { capitalize, reverseString, caesarCipher };
