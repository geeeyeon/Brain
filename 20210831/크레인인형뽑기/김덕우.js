function solution(board, moves) {
    var answer = 0;
    let stack = [];
    for (let i = 0; i < moves.length; i++) {
        const moveIndex = moves[i] - 1;
        for (let j = 0; j < board.length ; j++ ) {
            if (board[j][moveIndex] === 0) {
                continue;
            } else {
                stack.push(board[j][moveIndex]);
                board[j][moveIndex] = 0;

                for (let k = 1; k < stack.length ; k++) {
                    if ( stack[k] === stack[k-1] ) {
                        answer += 2;
                        stack = stack.slice(0, k-1);
                        break;
                    }
                }
                break;
            }
        }
    }
    return answer;
}

console.log(solution([
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]], [1,5,3,5,1,2,1,4]));