function solution(n) {
  var answer = 0;

  let arr = String(n).split('');
  answer = arr.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);

  return answer;
}
