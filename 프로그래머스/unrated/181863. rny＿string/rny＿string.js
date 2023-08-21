function solution(rny_string) {
    var answer = '';
    answer = rny_string.split('').map((item) => {
        if (item === 'm') return 'rn'
        else return item
    }).join('')
    
    return answer;
}