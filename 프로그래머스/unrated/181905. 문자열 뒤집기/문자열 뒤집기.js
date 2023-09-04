
function solution(my_string, s, e) {
    const sliced = my_string.slice(s,e+1).split('').reverse().join('');
    const front = my_string.slice(0,s)
    const end = my_string.slice(e+1)
    return front+sliced+end
}