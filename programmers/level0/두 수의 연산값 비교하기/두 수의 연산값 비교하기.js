function solution(a, b) {
  let c = a.toString() + b.toString();
  if (Number(c) > 2 * a * b) {
    return Number(c);
  } else return 2 * a * b;
}
