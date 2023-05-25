function solution(arr, k) {
  let arr1 = [...arr];
  for (let i = 0; i < arr1.length; i++) {
    if (k % 2 === 0) {
      arr1[i] += k;
    } else {
      arr1[i] *= k;
    }
  }
  return arr1;
}

// 다른 사람 풀이

const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));
