function solution(numbers) {
  const test = numbers.reduce((a1, a2) => {
    return a1 + a2;
  });
  return test / numbers.length;
}
