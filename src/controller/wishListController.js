 const {saveWishListService,removeWishListService,wishListService} =require('../services/wishListService')


 exports.wishList = async(req,res)=>{
    let result = await wishListService(req)
    if(result['status']==="success"){
        return res.status(200).json(result)
    }else{
        return res.status(200).json(result)
    }
 }

 exports.saveWishList = async(req,res)=>{
    let result = await saveWishListService(req)
    if(result['status']==="success"){
        return res.status(200).json(result)
    }else{
        return res.status(200).json(result)
    }
 }
 
 exports.removeWishList = async(req,res)=>{
    let result = await removeWishListService(req)
    if(result['status']==="success"){
        return res.status(200).json(result)
    }else{
        return res.status(200).json(result)
    }
 }