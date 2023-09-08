function solution(sides) {    
    const high = sides[0] >= sides[1] ? sides[0] : sides[1]
    const low = high == sides[0] ? sides[1] : sides[0]
    let count = 0;
    // 가장 긴게 high 일 경우
    for (let i =1; i <= high; i++) {
        if (low + i > high) {
            count++
        }
    }
    // 나머지 하나가 제일 긴 경우
    for (let i =1; i <= high; i++) {
        if (high + i < low + high) {
            count++
        }
    }
    return count
    
    
    
    
    
}