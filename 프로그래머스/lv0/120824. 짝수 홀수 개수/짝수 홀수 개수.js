function solution(num_list) {
    var answer = [];
    let even = 0;
    let odd = 0;
    num_list.filter(x => {
        if(x%2 == 0) {
            even ++
        } else {
            odd++
        }
    })
    answer.push(even,odd)
    return answer;
}