function solution(scores) {
    let answer = '';
    // 첫번째 최고점과 최저점이 자신이 낸 점수 라면 그 점수는 뺀다
    // 재귀함수 안의 새로운 배열안의 자신의 해당하는 점수들의 집합을 모두 넣는다
    // 재귀함수과 끝나는 시점에서 결과값의 최종 평균값의 매칭되는 점수를 반환한다
    
    //점수의 평균치를 학점으로 반환해주는 함수
    let findAvgScore = (arr) => {
        let score = ''
        let total = arr.reduce((acc, cur) => {
            return acc + cur
        });
        let avg = total / arr.length
        switch(Math.floor(avg/10)) {
            case 10 :
            case 9 : score = 'A';
            break;
            case 8 : score = 'B';
            break;
            case 7 : score = 'C';
            break;
            case 6 :
            case 5 : score = 'D';
            break;
            default: score = 'F';
        }
        return score;
    }
    
    for(let person = 0; person < scores.length; person++) {
        //자신이 매긴 점수를 제외한 모든 점수
        let totalScore = [];
        // 자신이 매긴 점수
        let myScore = 0;
        scores.map((item,idx) => {
            if(person !== idx) totalScore.push(item[person])
            else myScore = item[person];
        });
        totalScore.sort((a,b) => a-b);
        if(totalScore[0] <= myScore && totalScore[totalScore.length-1] >= myScore) {
            totalScore.push(myScore);
        }
        answer += findAvgScore(totalScore);
    }
    
    return answer;
}