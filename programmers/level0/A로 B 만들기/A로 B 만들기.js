function solution(before, after) {
  let a = [...before].sort().join("");
  let b = [...after].sort().join("");
  if (a === b) {
    return 1;
  } else {
    return 0;
  }
}
