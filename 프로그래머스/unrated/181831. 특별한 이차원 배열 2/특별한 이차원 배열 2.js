function solution(arr) {
    let a = 1;
    for (let i=0; i< arr.length; i++) {
        for (let j=0; j < arr[i].length; j++) {
            if(arr[i][j] !== arr[j][i]) a = 0
            
            break;
        }
        
    }
    return a;
}

// 미쳤당...근데 시간복잡도는 똑같지 않을까?
// function solution(arr) {
//     return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
// }