function solution(num_list) {
    const last = num_list[num_list.length - 1]
    const lastFromOne = num_list[num_list.length - 2]
    if (last > lastFromOne) { 
        num_list.push(last-lastFromOne)
        return num_list
    }
    else {
        num_list.push(last*2)
        return num_list
    } 
}