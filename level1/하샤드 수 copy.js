function solution(x) {
  var answer = true;
  let arr = String(x).split('');
  let sum = arr.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);
  if (x % sum === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
