function solution(s) {
  var answer = true;

  let arr = s.toLowerCase().split('');
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'p') {
      pCount++;
    }
    if (arr[i] === 'y') {
      yCount++;
    }
  }
  if (pCount === yCount) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
