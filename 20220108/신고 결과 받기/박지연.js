/**
 * https://programmers.co.kr/learn/courses/30/lessons/92334
 * 신고 결과 받기
 */

function solution(id_list, report, k) {
  let count = {};
  let result = {};

  for (let id of id_list) {
    result[id] = 0;
  }

  for (let items of report) {
    let tmp = items.split(" ");
    let id = tmp[0];
    let res = tmp[1];
    if (!count[res]) count[res] = [];
    count[res].push(id);
  }

  for (let warn in count) {
    let tmp = new Set(count[warn]);
    if (tmp.size >= k) {
      for (let id of tmp) {
        result[id]++;
      }
    }
  }

  return Object.values(result);
}

console.log(
  "-->",
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); //[2,1,1,0]
console.log(
  "-->",
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 2)
); //[0,0]
