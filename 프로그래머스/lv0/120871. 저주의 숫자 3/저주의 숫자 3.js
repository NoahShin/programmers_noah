function solution(n) {
    let n10 = 1, townNumber = 1

    while(n> n10){
        n10++
        townNumber++

        while(townNumber % 3 === 0 || String(townNumber).includes('3')){
            townNumber++
        }
    }

    return townNumber
}