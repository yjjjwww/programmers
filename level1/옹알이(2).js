function solution(babbling) {
  var answer = 0;

  let arr = ['ayaaya', 'yeye', 'woowoo', 'mama'];
  while (babbling.length) {
    let b = babbling.pop();
    if (arr.some((v) => b.includes(v))) continue;

    b = b
      .replaceAll('aya', '1')
      .replaceAll('ye', '2')
      .replaceAll('woo', '3')
      .replaceAll('ma', '4');

    b = b.replace(/[1234]/g, '');

    if (b.length === 0) answer++;
  }
  return answer;
}
