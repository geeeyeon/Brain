/**
 * https://programmers.co.kr/learn/courses/30/lessons/12912
 *
 * 참고사항
 * Math함수를 잘 활용하기
 */
function solution(a, b) {
  var answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}
