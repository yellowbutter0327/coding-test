function solution(s) {
  let ans = [];
  let sArr = s.split("");
  sArr.forEach((letter) => {
    if (s.indexOf(letter) === s.lastIndexOf(letter)) {
      ans.push(letter);
    }
  });
  return ans.sort().join("");
}
