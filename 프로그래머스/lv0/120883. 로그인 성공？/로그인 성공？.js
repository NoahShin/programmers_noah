function solution(id_pw, db) {
    var answer = 'fail';
    
    db.forEach(([id,pw]) => {
        if (id == id_pw[0] && pw == id_pw[1]) answer = 'login';
        if (id == id_pw[0] && pw != id_pw[1]) answer = 'wrong pw';
        
    })
    return answer
    
}