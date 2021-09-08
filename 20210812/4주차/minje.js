function solution(table, languages, preference) {
  var answer = '';
  let result = {};
  let company = {};
  let myScore = {};
  
  //테이블의 있는 모든 값들을 가공한후 company에 넣어준다
  for(let i =0; i< table.length; i++) {
      let arr = table[i].split(' ');
      let obj = {};
      for(let j = 1; j < 6; j++) {
          if(languages.filter(itm => itm === arr[j]).length > 0) {
              obj[arr[j]] = 6-j; 
          } 
      }
      if(Object.keys(obj).length > 0) company[arr[0]] = obj;
  }
  
  //내가 선호하는 언어의 점수를 매긴 myScore를 만든다
  for(let i = 0; i< languages.length; i++) {
      myScore[languages[i]] = preference[i];
  }
  
  //각 회사별 요구 스펙과 내 점수를 곱한 값을 결과에 넣어준다
  for(let com in company) {
      let score = 0;
      for(let lan in company[com]) {
          score += company[com][lan] * myScore[lan];
      }
      if(result[score]) {
          result[score].push(com)
      }else {
          result[score] = [com]
      }
  }
  
  answer = result[Object.keys(result)[Object.keys(result).length-1]].sort();
  
  return answer[0]
}