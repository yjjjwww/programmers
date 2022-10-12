function solution(phone_number) {
  var answer = '';
  let num = phone_number.slice(-4);
  answer = '*'.repeat(phone_number.length - 4) + num;
  return answer;
}
