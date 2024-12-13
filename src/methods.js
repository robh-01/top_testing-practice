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

const calculator = (function () {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  };

  return { add, subtract, multiply, divide };
})();

function containsOnlyNumber(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] !== "number") {
      return false;
    }
  }
  return true;
}

function findAverage(arr) {
  let average =
    arr.reduce((total, number) => {
      return total + number;
    }, 0) / arr.length;
  return average;
}

function findMinimumValue(arr) {
  let minimum = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    minimum = arr[i] < minimum ? arr[i] : minimum;
  }
  return minimum;
}

function findMaximumValue(arr) {
  let maximum = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    maximum = arr[i] > maximum ? arr[i] : maximum;
  }
  return maximum;
}

function analyzeArray(arr) {
  if (!Array.isArray(arr) || !containsOnlyNumber(arr) || arr.length == 0) {
    throw new Error("Input must be an array of numbers");
  }
  return {
    average: findAverage(arr),
    min: findMinimumValue(arr),
    max: findMaximumValue(arr),
    length: arr.length,
  };
}
export { capitalize, reverseString, caesarCipher, calculator, analyzeArray };
