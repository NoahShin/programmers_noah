function solution(my_string, letter) {
    var answer = '';
    let arr = my_string.split('');
    arr = arr.filter(function(item) {
    return item !== letter
})
    console.log(arr)
    let joing = arr.join('')
    answer = joing
    
    return answer;
}