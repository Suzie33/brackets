module.exports = function check(str, bracketsConfig) {
  const bracketsList = bracketsConfig.flat();
  let stack = [];

  for (let char of str) {
    let bracketInd = bracketsList.indexOf(char);

    if (bracketsList[bracketInd] === bracketsList[bracketInd+1]) {
      if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (bracketInd % 2 === 0) {
      let closingBracket = bracketsList[bracketInd+1];
      stack.push(closingBracket);
    } else {
      let lastStackChar = stack[stack.length-1];
      if (char === lastStackChar) {
        stack.pop();
      } else {
        return false;
      }
    }

  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  };
}
