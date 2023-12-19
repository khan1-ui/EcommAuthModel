const  {userOTPService,verifyOTPService,loginService,saveProfileService,readProfileService} = require('../services/userServices')

exports.userOTP = async(req,res)=>{
let result = await userOTPService(req)
return res.status(200).json(result)
}

exports.verifyOtp= async(req,res)=>{
let result = await verifyOTPService(req)
if(result['status']==="success"){
    return res.status(200).json(result)
}else{
    return res.status(200).json(result)
}
}
exports.userLogin= async(req)=>{
    let result = await loginService(req)
    if(result['status']===success){
        let cookieOption={expires:new Date(Date.now()+24*6060*1000),httpOnly:false}
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)
    }else{
        return res.status(200).json(result)
    }
    }
exports.userLogout= async(req,res)=>{
    let result = await verifyOTPService(req)
    let cookieOption={expires:new Date(Date.now()-24*6060*1000),httpOnly:false}
    res.cookie('token',"",cookieOption)
    return res.status(200).json(result)
}
exports.createProfile=async(req,res)=>{
    let result = await saveProfileService(req)
    return res.status(200).json(result)

}
exports.readProfile=async(req,res)=>{
    let result = await readProfileService(req)
    return res.status(200).json(result)

}
exports.updateProfile=async(req,res)=>{
    let result = await saveProfileService(req)
    return res.status(200).json(result)
}