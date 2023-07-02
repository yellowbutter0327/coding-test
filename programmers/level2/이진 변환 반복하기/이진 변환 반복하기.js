function solution(s) {
  let answer = [0, 0];
  let sLen = 0;

  while (s.length > 1) {
    sLen = s.length;
    s = s.split("0").join("");
    answer[0]++;
    answer[1] += sLen - s.length;
    s = s.length.toString(2);
  }

  return answer;
}

//.toString(2)는 숫자를 이진법으로 변환한다!
