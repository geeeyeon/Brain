function solution(s) {
    var answer = false;
    if (s.length === 4 || s.length === 6) {
        answer=isNaN(s) ?false:true;
          
    }
      return answer;
  }