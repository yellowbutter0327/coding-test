function solution(x) {
  let num2 = 0;
  let num = x.toString().split("");

  for (let i = 0; i < num.length; i++) {
    num2 += Number(num[i]);
  }
  return x % num2 === 0 ? true : false;
}

//다른 사람의 풀이
function solution(x) {
  let num = x
    .toString()
    .split("")
    .reduce((prev, next) => Number(prev) + Number(next), 0);

  return x % num === 0 ? true : false;
}
