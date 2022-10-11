function solution(s) {
  var answer = '';
  let mid = 0;
  if (s.length % 2 === 1) {
    mid = (s.length + 1) / 2;
    answer = s.slice(mid - 1, mid);
  } else {
    mid = s.length / 2;
    answer = s.slice(mid - 1, mid + 1);
  }
  return answer;
}
