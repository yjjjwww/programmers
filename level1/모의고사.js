function solution(answers) {
  var answer = [];
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % first.length]) score[0]++;
    if (answers[i] === second[i % second.length]) score[1]++;
    if (answers[i] === third[i % third.length]) score[2]++;
  }
  const max = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) answer.push(i + 1);
  }
  return answer;
}
