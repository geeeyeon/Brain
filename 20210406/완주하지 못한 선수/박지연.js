/**
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 *
 */
function solution(participant, completion) {
  let sortpart = participant.sort();
  let sortcomp = completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (sortpart[i] !== sortcomp[i]) {
      return sortpart[i];
    }
  }
}
