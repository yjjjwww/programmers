function solution(n) {
  var answer = [];
  let arr = String(n).split('');
  answer = arr.reverse().map((i) => Number(i));
  return answer;
}
