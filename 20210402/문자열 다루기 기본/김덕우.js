function solution(s) {
    var answer = true;
    if ( s.length !== 4 && s.length !== 6 ) {
        answer = false;
    }

    
    for (let i = 0; i < s.length ; i ++) {
        if (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57 ) {
            answer = false;
            break;
        }
    }
    return answer;
}

