function solution(id_list, report, k) {
    const answer = Array(id_list.length).fill(0);
    const reportCountObject = {};
    
    for (let i = 0; i < report.length; i++) {
        const reporter = report[i].split(' ')[0];
        const target = report[i].split(' ')[1];
        
        if (!reportCountObject[target]) {
            reportCountObject[target] = [];
        }
        reportCountObject[target].push(reporter);
    }

    for (let i = 0; i < Object.keys(reportCountObject).length; i++) {
        const key = Object.keys(reportCountObject)[i];
        const reporterArray = reportCountObject[key];
        const reporterSet = new Set(reporterArray);
        if (reporterSet.size >= k) {
            // for (let j = 0; j < id_list.length ; j ++) {
            //     if (reporterSet.has(id_list[j])) {
            //         answer[j]++;
            //     }
            // }
            reporterSet.forEach(function(value) {
                const reporterIndex = id_list.indexOf(value);
                answer[reporterIndex]++;
            });
        }
    }
    return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2));
// [2, 1, 1, 0]

// [[frodo, neo], [neo], [frodo, muzi], []]