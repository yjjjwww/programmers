function solution(a, b, n) {
  var total = n;
  var answer = 0;
  while (total >= a) {
    answer += parseInt(total / a) * b;
    total = parseInt(total / a) * b + (total % a);
  }

  return answer;
}
