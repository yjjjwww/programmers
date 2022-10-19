function solution(price, money, count) {
  var answer = 0;
  let sum = 0;
  if (count === 1) {
    sum = price;
  }
  if (count === 2) {
    sum = price * 3;
  }
  sum = (price * count * (count + 1)) / 2;
  if (money - sum >= 0) {
    return 0;
  } else {
    answer = sum - money;
  }
  return answer;
}
