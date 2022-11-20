function solution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = b + 4;
  for (let i = 0; i < a - 1; i++) {
    day += months[i];
  }
  return days[day % 7];
}
