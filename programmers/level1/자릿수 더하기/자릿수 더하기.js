function solution(n) {
  let a = n.toString();
  let c = a.split("");
  let b = 0;
  for (let i = 0; i < c.length; i++) {
    b += Number(c[i]);
  }
  return b;
}
