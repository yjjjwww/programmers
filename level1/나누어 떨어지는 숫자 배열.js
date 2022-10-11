function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((e) => e % divisor === 0);
  answer = answer.sort((a, b) => a - b);
  if (answer.length === 0) {
    answer = [-1];
  }
  return answer;
}
