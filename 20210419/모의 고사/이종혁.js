function solution(answers) {
  let answer = [];
  let score = [];
  let personOne = [1, 2, 3, 4, 5];
  let personTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  let personThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = 0;
  let count2 = 0;
  let count3 = 0;

  for (const key in answers) {
    if (answers[key] === personOne[key % 5]) {
      count++;
    }
    if (answers[key] === personTwo[key % 8]) {
      count2++;
    }
    if (answers[key] === personThree[key % 10]) {
      count3++;
    }
  }

  score.push(count);
  score.push(count2);
  score.push(count3);

  let high = Math.max(score[0], score[1], score[2]);

  high === count && answer.push(1);
  high === count2 && answer.push(2);
  high === count3 && answer.push(3);

  return answer;
}
