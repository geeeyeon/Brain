// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    if (s.length === 1) {
        return 1;
    };
    var answer = 1000;

    for (let i = 1; i <= s.length / 2 ; i ++) {
        let archivedStr = "";
        let archivedCount = 1;

        let currentStr = s.substring(0, i);

        for (let j = 0; j < s.length; j += i) {
            if ( archivedStr.length >= answer ) {
                break;
            }

            const nextStr = s.substring(j + i, j + i * 2);
            if (currentStr === nextStr) {
                archivedCount++;
            } else {
                if (archivedCount === 1) {
                    archivedStr += currentStr;
                } else {
                    archivedStr += `${archivedCount}${currentStr}`;
                    archivedCount = 1;
                }
                currentStr = nextStr;
            }
        }
        answer = Math.min(archivedStr.length, answer);
    }
    
    return answer;
}

console.log(solution("abcabcabcabcdededededede"));
