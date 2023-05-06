function solution(A, B) {
  let arrayA = A.sort((a, b) => a - b);
  let arrayB = B.sort((a, b) => b - a);
  let result = 0;

  arrayA.forEach((a, i) => {
    result += a * arrayB[i];
  });

  return result;
}
