function solution(a, b) {
  var answer = 0;
  if (a === b) {
    return a;
  }
  let start;
  let end;
  if (a > b) {
    start = b;
    end = a + 1;
  } else {
    start = a;
    end = b + 1;
  }
  for (let i = start; i < end; i++) {
    answer = answer + i;
  }
  return answer;
}
