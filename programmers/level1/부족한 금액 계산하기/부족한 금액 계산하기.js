function solution(price, money, count) {
  let a = 0;
  for (let i = 0; i <= count; i++) {
    a += price * [i];
  }
  if (money - a < 0) {
    return a - money;
  } else return 0;
}
