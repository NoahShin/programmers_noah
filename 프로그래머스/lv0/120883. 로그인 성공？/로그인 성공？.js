function solution(id_pw, db) {
    var answer = 'fail';
    
    db.forEach(([id,pw]) => {
        if (id == id_pw[0] && pw == id_pw[1]) answer = 'login';
        if (id == id_pw[0] && pw != id_pw[1]) answer = 'wrong pw';
        
    })
    return answer
    
}


// 아.. key value,, Map...
// function solution(id_pw, db) {
//   const [id, pw] = id_pw;
//   const map = new Map(db);
//   return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
// }
