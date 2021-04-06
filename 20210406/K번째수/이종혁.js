function solution(array, commands) {
  var answer = [];
  for (const iterator of commands) {
    let start = iterator[0] - 1;
    let end = iterator[1];
    let index = iterator[2] - 1;
    // let sliced = array.slice(start, end);
    // let sorted = sliced.sort((a, b) => a - b);
    // let result = sorted[index];
    // 1줄로 정리
    answer.push(array.slice(start, end).sort((a, b) => a - b)[index]);
  }
  return answer;
}
