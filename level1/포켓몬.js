function solution(nums) {
  let halfNum = nums.length / 2;
  let arr = new Set(nums);
  let array = [...arr];
  return Math.min(array.length, halfNum);
}
