function solution(my_string, is_prefix) {
  for (let i = 0; i < my_string.length; i++) {
    let answer = my_string.slice(0, i);
    if (answer === is_prefix) {
      return 1;
    }
  }
  return 0;
}
