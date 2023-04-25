function solution(n) {
  let a = n
    .toString()
    .split("")
    .reverse()
    .map((b) => parseInt(b));
  return a;
}
