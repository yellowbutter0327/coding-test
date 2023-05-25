function solution(strArr) {
  let arr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 0) {
      arr.push(strArr[i].toLowerCase());
    } else {
      arr.push(strArr[i].toUpperCase());
    }
  }
  return arr;
}

// 다른 사람의 풀이
const solution = (strs) =>
  strs.reduce(
    (acc, cur, idx) => [
      ...acc,
      idx % 2 === 0 ? cur.toLowerCase() : cur.toUpperCase(),
    ],
    []
  );
