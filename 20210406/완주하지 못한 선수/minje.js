function solution(participant, completion) {
    let answer = '';
    participant.sort();
    completion.sort();
    let recursion = (arr) => {
        for(let i = 0; i<arr.length; i++) {
            if(arr[i] !== completion[i]) {
                return arr[i];
            }
        }
    }
    answer = recursion(participant);
    return answer;
}