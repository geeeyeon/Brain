function solution(array, commands) {
    var answer = [];
    let recursion = function(array, n) {
        if(n > commands.length-1) {
            return
        }
        let start = commands[n][0];
        let last = commands[n][1];
        let index = commands[n][2]
        let newarr = array.slice(start-1, last)
        newarr.sort(function(a, b){return a - b});
        answer.push(newarr[index-1]);
        recursion(array, n+1);
    }
    recursion(array, 0);
    if(answer.length === 0) return;
    return answer;
}