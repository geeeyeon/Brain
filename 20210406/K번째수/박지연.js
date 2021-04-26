/**
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 *
 * 참고사항 - 숫자정렬
 * arr.sort(function(a, b){return a - b;}) : 오름차순 정렬
 * arr.sort(function(a, b){return b - a;}) : 내림차순 정렬
 */

function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let tmparry = array.slice(commands[i][0] - 1, commands[i][1]);
    tmparry.sort(function (a, b) {
      return a - b;
    });
    answer.push(tmparry[commands[i][2] - 1]);
  }
  return answer;
}
