function solution(i, j, k) {
    let count = 0;
    for (let a = i; a <=j; a++) {
        String(a).split('').map((x) => {
            if (x === String(k)) {
                count++
            }})}
    
    return count;
}

// 와.. 여집합 스플릿으로 분리
// function solution(i, j, k) {
//     let a ='';
//     for(i;i<=j;i++){
//         a += i;
//     }

//     return a.split(k).length-1;
// }