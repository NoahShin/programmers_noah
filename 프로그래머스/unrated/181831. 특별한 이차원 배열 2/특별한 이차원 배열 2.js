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