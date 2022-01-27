/**
 * https://programmers.co.kr/learn/courses/30/lessons/42842
 * 카펫
 */

function solution(brown, yellow) {
  let sum = brown + yellow;

  for (let i = 3; i <= brown; i++) {
    if (sum % i === 0) {
      let j = sum / i;
      if ((j - 2) * (i - 2) === yellow) {
        return [Math.max(i, j), Math.min(i, j)];
      }
    }
  }
}

console.log(solution(10, 2)); //[4,3]
console.log(solution(24, 24)); //[8,6]
