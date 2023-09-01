function solution(date1, date2) {
    
    return new Date(date1.join('.')) < new Date(date2.join('.')) ? 1: 0
    
}
// 이게 된다고?
// const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0
