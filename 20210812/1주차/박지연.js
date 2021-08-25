/**
 * 위클리 챌린지 1주차
 * 부족한 금액 계산하기
 * https://programmers.co.kr/learn/courses/30/lessons/82612
 *
 */

function solution(price, money, count) {
  let totalPrice = ((count * (1 + count)) / 2) * price;
  let answer = money - totalPrice;
  if (answer >= 0) {
    return 0;
  }
  return Math.abs(answer);
}
