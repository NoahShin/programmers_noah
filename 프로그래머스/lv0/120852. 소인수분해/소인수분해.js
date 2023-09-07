function solution(n) {
  let result = [];
  let prime = 2;
  
  while (n >= 2) {
    if (n % prime === 0) {
      result.push(prime)
      n = n / prime;
    }
    
     else prime++; 
  }
  
  return [...new Set(result)];
}