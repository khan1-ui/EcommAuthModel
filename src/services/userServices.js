const EmailSend = require('../utility/EmailHelper')
const UserModel = require('../models/usersModel')
const profileModel =require('../models/profilesModel')
const {EncodedToken} =require('../utility/TokenHelper')

const userOTPService = async(req)=>{
    try{
        let email= req.params.email
        let code = Math.floor(100000+Math.random()*900000)
        let EmailText =` Your varification code = ${code}`
        let EmailSubject ="Email verification"
        await EmailSend(email,EmailText,EmailSubject)
        await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})
        return { status:"success" , message:"6 digit otp has been send"}

    }catch(e){
   return{status:"failed",message:"Something went wrong"}
    }
}
const verifyOTPService = async()=>{
try {
    let email=req.params.email
    let otp = req.params.otp
    let total = await UserModel.find({email:email,otp:otp})
    console.log(total)
    if(otp===total.otp){
       // let user_id = await UserModel.find({email:email,otp:otp}).select('_id')
       // let token = EncodedToken(email,user_id[0]['_id'].toString())
        await UserModel.updateOne({email:email},{$set:{otp:"0",verify:true}})
        return {status:"success",message:"Otp verified"}
    }else{
        return {status:"failed",message:"Somthing went wrong"} 
    }
} catch (error) {
    return {status:"failed",data : error}
}
}
const loginService = async()=>{
    try {
        let email=req.params.email
       
        let total = await UserModel.find({email:email}).count('total')
        if(total===1){
           let user_id = await UserModel.find({email:email}).select('_id')
            let token = EncodedToken(email,user_id[0]['_id'].toString())
            await UserModel.updateOne({email:email},{$set:{otp:"0",verify:true,token:token}})
            return {status:"success",message:"User loged in successfully"}
        }else{
            return {status:"failed",message:"Somthing went wrong"} 
        }
    } catch (error) {
        return {status:"failed",data : error}
    }
    }

const saveProfileService = async(req)=>{
try {
    let user_id = req.params.user_id
    let reqBody = req.reqBody
    reqBody.userID = user_id
    await profileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
    return { status:"success" , message:"profile save successfull"}
} catch (error) {
    return {status:"failed",data:error} 
}
}
const readProfileService = async(req)=>{
    try {
        let user_id = req.params.user_id
        let result = await profileModel.find({userID:user_id})
        return { status:"success" , data:result}
    } catch (error) {
        return {status:"failed",data:error} 
    }
}

module.exports = {userOTPService,verifyOTPService,loginService,saveProfileService,readProfileService}