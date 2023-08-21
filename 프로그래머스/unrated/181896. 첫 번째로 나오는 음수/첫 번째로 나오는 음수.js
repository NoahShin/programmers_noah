function solution(num_list) {
    let ans = []
    num_list.map((item, index) => {if (item < 0) ans.push(index) })
    return ans.length > 0 ? ans[0] : -1
    
    
}