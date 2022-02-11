/**
 * https://programmers.co.kr/learn/courses/30/lessons/67256
 * 키패드 누르기
 */

function solution(numbers, hand) {
  let answer = "";
  let lKey = [1, 4, 7];
  let rKey = [3, 6, 9];
  let cKey = [2, 5, 8, 11];
  let lVal = 10;
  let rVal = 12;

  numbers.forEach((element) => {
    if (element === 0) element = 11;
    if (lKey.includes(element)) {
      answer += "L";
      lVal = element;
    } else if (rKey.includes(element)) {
      answer += "R";
      rVal = element;
    } else {
      let leftDis, rightDis;

      leftDis = cKey.includes(lVal)
        ? Math.abs(element - lVal) / 3
        : Math.abs(element - lVal - 1) / 3 + 1;
      rightDis = cKey.includes(rVal)
        ? Math.abs(element - rVal) / 3
        : Math.abs(element - (rVal - 1)) / 3 + 1;

      if (leftDis > rightDis) {
        answer += "R";
        rVal = element;
      } else if (rightDis > leftDis) {
        answer += "L";
        lVal = element;
      } else {
        if (hand === "right") {
          rVal = element;
          answer += "R";
        } else {
          lVal = element;
          answer += "L";
        }
      }
    }
  });
  return answer;
}

console.log("---->", solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); //"LRLLLRLLRRL"
console.log("---->", solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); //"LRLLRRLLLRR"
console.log("---->", solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); //"LLRLLRLLRL"
