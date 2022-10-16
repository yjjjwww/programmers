function solution(d, budget) {
  var answer = 0;
  let arr = [...d];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (budget < arr[i]) {
      break;
    }
    budget -= arr[i];
    answer++;
  }
  return answer;
}
