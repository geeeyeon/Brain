/**
 * 

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

입출력 예
answers	    return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]

입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.
 * @param {*} numbers 
 * @returns 
 */

function solution(numbers) {
  var answer = 0;
  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];
  //   let answerLength = [supo1.length, supo2.length, supo3.length];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < supo1.length; j++) {
      if (numbers[i] === supo1[j] % supo1.length) {
        count[0]++;
      }
    }
    for (let k = 0; k < supo2.length; k++) {
      if (numbers[i] === supo2[k] % supo2.length) {
        count[1]++;
      }
    }
    for (let n = 0; n < supo3.length; n++) {
      if (numbers[i] === supo3[n] % supo3.length) {
        count[2]++;
      }
    }
  }
  console.log("anser!", sort(count));
  return answer;
}
solution([1, 2, 3, 4, 5]);
