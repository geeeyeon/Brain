/**
 * https://programmers.co.kr/learn/courses/30/lessons/12918
 *
 * 참고사항
 * string.search(정규표현식)
 * 정규표현식과 주어진 스트링간에 첫번째로 매치되는 것의 인덱스를 반환한다.
 * 찾지 못하면 -1 를 반환한다.
 */

function solution(s) {
  var answer = true;

  if (s.length !== 4 || (s.length !== 6 && s.search(/[a-zA-Z]/) > -1)) {
    answer = false;
  }

  return answer;
}
