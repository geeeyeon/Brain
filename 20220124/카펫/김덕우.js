function solution(brown, yellow) {
    var answer = [];
    const start = brown / 2 - 1;
    for (let i = start; i > 0 ; i --) {
        const yellowHeight = (brown - i * 2) / 2;
        const yellowSize = (i-2) * yellowHeight;
        
        if ( yellowSize === yellow) {
            return [i, yellowHeight + 2];
        }
    }
    
    return answer;
}

console.log(solution(24, 24));
