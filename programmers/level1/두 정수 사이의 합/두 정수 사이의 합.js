function solution(a, b) {
  let start = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      start += i;
    }
    return start;
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      start += i;
    }
    return start;
  } else if (a === b) {
    return a;
  }
}

//다른분 풀이
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
