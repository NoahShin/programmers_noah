function solution(chicken) {
    let service = 0;
    
    while(chicken >= 10) {
        const newChicken = Math.floor(chicken / 10) // 10
        
        service += newChicken
        
        chicken = chicken % 10 + newChicken
    }
  return service

}
