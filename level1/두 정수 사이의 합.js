function solution(a, b) {
  var answer = 0;
  if (a === b) {
    answer = a;
  }
  if (b - a > 0) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }
  if (a - b > 0) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }
  return answer;
}
