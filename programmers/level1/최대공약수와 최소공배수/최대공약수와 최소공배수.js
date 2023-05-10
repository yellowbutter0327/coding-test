function solution(n, m) {
  let answer = [];

  let G = 0;
  let L = 0;
  // 최대공약수 = G
  // 최소공배수 = L

  let num = n > m ? n : m;

  // 최대공약수 구하기
  for (let i = 1; i <= num; i++) {
    if (n % i == 0 && m % i == 0) {
      G = i;
    }
  }
  // 최소공배수 구하기 - 아래 식 활용
  // 두 수의 곱 = 최대공약수 * 최소공배수
  // n * m = G * L
  L = (n * m) / G;
  answer = [G, L];

  return answer;
}
