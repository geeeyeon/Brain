function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i ++) {
      const startIndex = commands[i][0] - 1;
      const endIndex = commands[i][1];
      const newArray = array.slice(startIndex, endIndex);
      newArray.sort(function(a, b){ return a-b; });
  
      answer.push(newArray[commands[i][2] - 1]);
    }
  
    return answer;
  }