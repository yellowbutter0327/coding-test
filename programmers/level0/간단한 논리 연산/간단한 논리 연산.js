function solution(x1, x2, x3, x4) {
  let arr = [];
  if (x1 === true || x2 === true) {
    arr.push(true);
  } else arr.push(false);
  if (x3 === true || x4 === true) {
    arr.push(true);
  } else arr.push(false);

  if (arr[0] !== arr[1]) {
    return false;
  } else if (arr[0] === arr[1] && arr[0] === true) {
    return true;
  } else return false;
}

//다른 사람의 풀이
function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}
