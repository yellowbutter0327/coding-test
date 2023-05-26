function solution(my_string) {
  return my_string.split(" ").filter((v) => v);
}

// 다른 사람의 풀이
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
function solution(my_string) {
  let res = [];
  let arr = my_string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      res.push(arr[i]);
    }
  }
  return res;
}
