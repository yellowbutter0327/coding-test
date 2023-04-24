function solution(x, n) {
  let arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(x * i);
  }
  return arr;
}
