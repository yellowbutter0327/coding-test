function solution(arr) {
  let num = Math.min(...arr);
  let newArr = arr.filter((element) => element !== num);
  if (newArr.length === 0) {
    return [-1];
  } else {
    return newArr;
  }
}

// 인상깊은 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
