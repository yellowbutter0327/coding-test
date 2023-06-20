function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.substring(i, i + pat.length) === pat) {
      count++;
    }
  }
  return count;
}
