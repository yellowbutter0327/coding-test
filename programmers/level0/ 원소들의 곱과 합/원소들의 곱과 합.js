function solution(num_list) {
  let a = 1;
  let b = 0;
  for (let i = 0; i < num_list.length; i++) {
    a *= num_list[i];
    b += num_list[i];
  }
  if (a < b * b) {
    return 1;
  } else return 0;
}

//Math.pow -> 제곱근 구할 때 사용 기억하자.
