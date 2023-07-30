function solution(n, [a, b, c], nums) {
  switch (n) {
    case 1:
      return nums.slice(0, b + 1);
    case 2:
      return nums.slice(a);
    case 3:
      return nums.slice(a, b + 1);
    case 4: {
      const answer = [];
      {
        for (let i = a; i <= b; i += c) {
          answer.push(nums[i]);
        }
      }

      return answer;
    }
  }
}
