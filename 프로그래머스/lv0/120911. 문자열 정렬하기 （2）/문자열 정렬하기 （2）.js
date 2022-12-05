function solution(my_string) {
    let answer = '';
        let newArr = my_string.toLowerCase().split('');
        newArr = newArr.sort();
        console.log(newArr)
        answer = answer.concat(...newArr)
    return answer;
}
