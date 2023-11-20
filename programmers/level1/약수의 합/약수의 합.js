//첫번째 풀이
function solution(n) {
  let arr = [];
  let b = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  arr.forEach((item) => (b += item));
  return b;
}

//두번째 풀이
function solution(n) {
  let a = [];
  let b = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      a.push(i);
    }
  }
  for (let j = 0; j < a.length; j++) {
    b += a[j];
  }
  return b;
}
