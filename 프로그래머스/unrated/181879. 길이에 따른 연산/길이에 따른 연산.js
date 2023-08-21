function solution(num_list) {
    let ans = 0;
    if (num_list.length > 10) {
        ans = num_list.reduce((acc, cur) => acc + cur)
    } else {
        ans = num_list.reduce((acc, cur) => acc * cur)
    }
    return ans;
}