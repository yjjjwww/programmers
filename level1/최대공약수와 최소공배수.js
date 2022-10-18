function solution(n, m) {
  let answer = [];
  let num1 = 0;
  for (let i = Math.min(n, m); i >= 1; i--) {
    if (n % i === 0 && m % i === 0) {
      num1 = i;
      answer.push(num1);
      answer.push((n * m) / num1);
      break;
    }
  }
  return answer;
}
