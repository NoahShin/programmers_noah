function solution(num_list) {
    let count = 0;
    num_list.forEach((x) => {
        while (x > 1) {
            if (!x%2) x = x / 2 
            else x = (x-1) / 2
            ++count;
            
        }
    })
    return count;
}