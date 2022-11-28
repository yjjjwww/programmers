function solution(X, Y) {
  var answer = '';
  let arrX = X.split('').sort();
  let arrY = Y.split('').sort();
  for (let i = 0; i < 10; i++) {
    const curX = arrX.filter((e) => Number(e) === i).length;
    const curY = arrY.filter((e) => Number(e) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }
  if (answer === '') return '-1';
  if (Number(answer) === 0) return '0';
  return answer
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join('');
}
