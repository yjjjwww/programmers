function solution(arr) {
  var answer = [];
  if (arr.length === 1) {
    answer = [-1];
  } else {
    let newarr = [...arr];
    newarr = newarr.sort((a, b) => a - b);
    let index = arr.indexOf(newarr[0]);
    answer = [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  return answer;
}
