function solution(my_string) {
  const arr = my_string.split(" ").filter((e) => e);
  while (arr.length > 1)
    arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift());
  return arr[0];
}

// 다른 사람의 풀이
var solution = eval;
