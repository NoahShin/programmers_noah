function solution(rsp) {
    // 각 상황 별 이길 수 있는 수 입력
    const winCase = {
        0: 5,
        2: 0,
        5: 2,
    }
    // 이기는 경우 반환
    return [...rsp].reduce(( a, b ) => a + winCase[b],'')
}