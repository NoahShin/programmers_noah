function solution(price, money, count) {
  // 놀이기구 이용료 총합 계산
  let totalCost = 0;
  for (let i = 1; i <= count; i++) {
    totalCost += price * i;
  }

  // 모자라는 금액 계산
  let shortage = totalCost - money;

  // 모자라는 금액이 없으면 0을 반환
  return Math.max(0, shortage);
}