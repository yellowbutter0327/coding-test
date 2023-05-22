function solution(num_list) {
  let arr = [...num_list];
  let answer = arr.slice(-2);
  if (answer[0] < answer[1]) {
    arr.push(answer[1] - answer[0]);
  } else {
    arr.push(answer[1] * 2);
  }
  return arr;
}
