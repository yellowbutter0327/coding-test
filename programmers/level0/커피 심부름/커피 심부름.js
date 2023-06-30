function solution(order) {
  let result = 0;
  for (let i = 0; i < order.length; i++) {
    if (order[i].includes("cafelatte")) {
      result += 5000;
    } else {
      result += 4500;
    }
  }

  return result;
}

// 다른 사람의 풀이
function solution(order) {
  return order.reduce((acc, cur) => {
    if (cur.includes("americano")) {
      return acc + 4500;
    } else if (cur.includes("cafelatte")) {
      return acc + 5000;
    } else {
      return acc + 4500;
    }
  }, 0);
}

const solution = (order) =>
  order.reduce((acc, cur) => acc + (cur.includes("latte") ? 5000 : 4500), 0);
