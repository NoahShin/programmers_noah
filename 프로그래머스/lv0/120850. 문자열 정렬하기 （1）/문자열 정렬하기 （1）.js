function solution(my_string) {
    var answer = [];
    
    answer = my_string.split('').map(x => Number(x)).sort().filter(x=> Number.isInteger(x))
    
    return answer;
}