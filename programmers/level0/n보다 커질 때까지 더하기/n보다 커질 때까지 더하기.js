function solution(numbers, n) {
  let a = 0;
  for (let i = 0; i < numbers.length; i++) {
    a += numbers[i];
    if (a > n) {
      return a;
    }
  }
}
