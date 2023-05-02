function solution(num_list, n) {
  let a = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] === n) {
      a += 1;
    }
  }
  if (a > 0) {
    return 1;
  } else return 0;
}

//다른 풀이
function solution(num_list, n) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] === n) {
      return 1;
    }
  }
  return 0;
}
