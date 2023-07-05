function solution(denum1, num1, denum2, num2) {
  let num = denum1 * num2 + denum2 * num1;
  let denum = num1 * num2;

  for (let i = 2; i <= Math.min(num, denum); i++) {
    if (num / i < 1 || denum / i < 1) break;
    if (num % i === 0 && denum % i === 0 && i != 1) {
      [num, denum, i] = [num / i, denum / i, i - 1];
    }
  }
  return [num, denum];
}
