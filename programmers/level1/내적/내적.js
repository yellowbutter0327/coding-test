function solution(a, b) {
  let c = 0;
  for (let i = 0; i <= a.length - 1; i++) {
    c += a[i] * b[i];
  }
  return c;
}
