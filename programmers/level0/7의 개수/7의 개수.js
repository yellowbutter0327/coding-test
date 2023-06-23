function solution(array) {
  let arr = [];
  let b = 0;
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i].toString().split(""));
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "7") {
        b += 1;
      }
    }
  }
  return b;
}

//다른 사람의 풀이
function solution(array) {
  return array.join("").split("7").length - 1;
}

//다른 사람의 풀이
function solution(array) {
  return Array.from(array.join("")).filter((v) => v === "7").length;
}
