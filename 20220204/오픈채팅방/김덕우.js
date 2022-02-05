function solution(record) {
    var answer = [];
    const actions = [];
    const nicks = {};
    const getMessage = (nick, method) => {
        if ( method === 'Enter' ) {
            return `${nick}님이 들어왔습니다.`;
        } else if ( method === 'Leave' ) {
            return `${nick}님이 나갔습니다.`;
        }
    }

    for (let i = 0; i < record.length ; i++) {
        const splitArray = record[i].split(" ");
        const method = splitArray[0];
        const userId = splitArray[1];
        const userNick = splitArray[2];
        if ( userNick ) {
            nicks[userId] = userNick;
        }

        if(method !== "Change") {
            actions.push([method, userId]);
        }
    }

    for (const action of actions) {
        const method = action[0];
        const userId = action[1];

        const newMessage = getMessage(nicks[userId], method);
        if ( newMessage ) {
            answer.push(newMessage);
        }
    }
    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
