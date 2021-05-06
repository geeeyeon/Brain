function solution(answers) {
    var answer = [];
    let randomAnswer = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

    let answerLengthArray = [randomAnswer[0].length, randomAnswer[1].length, randomAnswer[2].length];
    let pointArray = [0, 0, 0];
    
    for (let i = 0 ; i < answers.length ; i ++) {
        for (let j = 0 ; j < randomAnswer.length ; j ++ ) {
            if ( answers[i] === randomAnswer[j][i % answerLengthArray[j]] ) {
                pointArray[j] += 1;
            }
        }
    }
    const highestScore = Math.max(...pointArray);
    let index = pointArray.indexOf(highestScore); 
    while (index != -1) { 
        answer.push(index + 1); 
        index = pointArray.indexOf(highestScore, index + 1); 
    }

    return answer;
}