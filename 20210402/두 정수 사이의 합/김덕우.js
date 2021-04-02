function solution(a, b) {
    if (a === b) {
        return a;
    }
    
    let sum = a + b;
    let absSub = Math.abs(a - b);
    let numberCount = absSub + 1;

    let answer = sum * Math.floor((numberCount / 2));
    
    if ( numberCount % 2 !== 0 ) {
      answer += sum / 2;
    }
    
    return answer;
}