function solution(a, b) {
  let c = String(a);
  let d = String(b);
  return c + d >= d + c ? Number(c + d) : Number(d + c);
}

//다른 사람 풀이
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
