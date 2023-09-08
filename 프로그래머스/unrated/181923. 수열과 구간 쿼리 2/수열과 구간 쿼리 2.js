
function solution(arr, queries) {
    var answer = [];
    
    for(const [s,e,k] of queries){
        let min = [];
        for(let i=s; i<e+1; i++){
            if(arr[i] > k){
                min.push(arr[i]);
            }
        }
        
        if(min.length > 0){
            answer.push(Math.min.apply(null, min) );    
        }else{
            answer.push(-1);
        }  
    }
    
    return answer;
}

// 내가 문제를 이해 못 한 듯
// function solution(arr, queries) {
//     return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
// }