function solution(n) {
  var answer = 0;
  let result = Math.sqrt(n);
  if (result % 1 === 0) {
    answer = (result + 1) ** 2;
  } else {
    answer = -1;
  }
  return answer;
}
