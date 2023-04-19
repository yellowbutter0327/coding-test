function solution(money) {
  let americano = parseInt(money / 5500);
  let restmoney = money - 5500 * americano;
  var answer = [americano, restmoney];
  return answer;
}
