function solution(my_string, num1, num2) {
    var answer = '';
    const a = my_string.split('')
    const n1 = a[num1] 
    const n2 = a[num2]
    a[num1] = n2
    a[num2] = n1
    return a.join('');
}