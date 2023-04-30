function solution(num_list) {
  let a = 0;
  let b = 1;
  if (num_list.length >= 11) {
    for (let i = 0; i < num_list.length; i++) {
      a += num_list[i];
    }
    return a;
  } else {
    for (let i = 0; i < num_list.length; i++) {
      b *= num_list[i];
    }
    return b;
  }
}
