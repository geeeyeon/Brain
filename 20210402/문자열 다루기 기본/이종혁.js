function solution(s) {
  var answer = true;
  if (s.length === 4 || s.length === 6) {
    const regExp = /\D/.test(s);
    regExp === true ? (answer = false) : (answer = true);
    return answer;
  } else return false;
}
