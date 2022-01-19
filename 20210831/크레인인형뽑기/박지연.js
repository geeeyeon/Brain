/**
 * https://programmers.co.kr/learn/courses/30/lessons/64061
 * 크레인 인형뽑기 게임
 */

function solution(board, moves) {
  let answer = 0;
  let tmp = [];
  let result = [];

  for (let j = 0; j < moves.length; j++) {
    let move = moves[j];
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        tmp.push(board[i][move - 1]);
        if (tmp.length > 1 && tmp[tmp.length - 1] === tmp[tmp.length - 2]) {
          tmp.pop();
          tmp.pop();
          answer += 2;
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(
  "--->",
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); //4
