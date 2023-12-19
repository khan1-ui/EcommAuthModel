const jwt = require('jsonwebtoken')
exports.EncodedToken = (email,user_id)=>{
    let key ="123-ABC-XYZ"
    let expire ={expireIn:"24h"}
    let payload={email:email,user_id:user_id}
    returnjwt.sign(payload,key,expire)
}
exports.DecodedToken =(token)=>{
    try{
        let key = "123-ABC-XYZ"
        return jwt.verify(token,key)
    }catch(e){
        return null
    }
}