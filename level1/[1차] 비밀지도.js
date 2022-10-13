function solution(n, arr1, arr2) {
  var answer = [];
  let newarr1 = arr1.map((e) => e.toString(2));
  let newarr2 = arr2.map((e) => e.toString(2));

  for (let i = 0; i < n; i++) {
    if (newarr1[i].length < n) {
      newarr1[i] = '0'.repeat(n - newarr1[i].length) + newarr1[i];
    }
    if (newarr2[i].length < n) {
      newarr2[i] = '0'.repeat(n - newarr2[i].length) + newarr2[i];
    }
  }
  let resultArr = [];

  for (let i = 0; i < n; i++) {
    let result = '';
    for (let j = 0; j < n; j++) {
      if (newarr1[i][j] === '1' || newarr2[i][j] === '1') {
        result = result + '1';
      } else {
        result = result + '0';
      }
    }
    resultArr.push(result);
  }

  for (let i = 0; i < n; i++) {
    let resultAnswer = resultArr[i].replace(/1/gi, '#');
    let resultAnswer1 = resultAnswer.replace(/0/gi, ' ');
    answer.push(resultAnswer1);
  }

  return answer;
}
