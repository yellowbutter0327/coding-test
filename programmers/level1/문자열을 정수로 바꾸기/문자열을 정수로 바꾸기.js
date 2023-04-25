function solution(s) {
  if (s[0] === "-") {
    return -1 * Number(s * -1);
  } else return Number(s);
}
