function solution(n) {
  let num;
  for (num = 1; (6 * num) % n !== 0; num++) {}
  return num;
}
