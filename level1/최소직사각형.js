function solution(sizes) {
  var answer = 0;
  let arr = sizes.map((e) => e.sort((a, b) => a - b));
  console.log(arr);
  let max = [];
  let min = [];
  for (let i = 0; i < arr.length; i++) {
    max.push(arr[i][1]);
    min.push(arr[i][0]);
  }
  answer = Math.max(...max) * Math.max(...min);
  return answer;
}
