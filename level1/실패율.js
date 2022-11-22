function solution(N, stages) {
  var answer = [];
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    let stage = stages.filter((e) => e === i).length;
    let failure = 0;
    if (stage === 0) {
      failure = 0;
    } else {
      failure = stage / total;
    }
    total -= stage;
    answer.push({ idx: i, failure: failure });
  }

  answer.sort((a, b) => {
    if (a.failure > b.failure) {
      return -1;
    } else if (a.failure < b.failure) {
      return 1;
    } else {
      if (a.idx > b.idx) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return answer.map((e) => e.idx);
}
