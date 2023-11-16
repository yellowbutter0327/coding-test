function solution(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i * x);
  }
  return arr;
}

//알게 된 것: Array.fill.map
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
