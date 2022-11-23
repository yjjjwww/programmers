function solution(lottos, win_nums) {
  let correct = 0;
  let zero = 0;
  let high = 1;
  let low = 1;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] !== 0) {
      if (win_nums.indexOf(lottos[i]) !== -1) {
        correct++;
      }
    } else {
      zero++;
    }
  }

  if (correct >= 2) {
    low = 7 - correct;
  } else {
    low = 6;
  }

  if (zero + correct >= 2) {
    high = 7 - (zero + correct);
  } else {
    high = 6;
  }

  var answer = [high, low];
  return answer;
}
