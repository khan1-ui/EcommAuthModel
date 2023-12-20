const { default: mongoose } = require('mongoose')
const wishListModel = require('../models/wishListModel')
const objectID = mongoose.Types.ObjectId

const saveWishListService = async(req)=>{
try {
    let user_id = req.headers.user_id;
    let reqBody = req.body 
    reqBody.userID = user_id
    await wishListModel.updateOne(reqBody,{$set:reqBody},{upsert:true})
    return {status:"success",message:"wish list save success"}
} catch (error) {
    return {status:"failed",message:"Something went wrong"} 
}
}
 const removeWishListService = async(req)=>{
    try {
        let user_id = req.headers.user_id
        let reqBody = req.body 
        reqBody.userID = user_id
        await wishListModel.deleteOne(reqBody)
        return {status:"success",message:"wish list delete success"}
    } catch (error) {
        return {status:"failed",message:"Something went wrong"} 
    }
 }
 const wishListService = async(req)=>{
    try {
        let user_id = new objectID(req.headers.user_id)
        let matchStage = {$match:{userID:user_id}}
        let joinWithProductStage ={$lookup:{from:"products",localField:"productID",foreignfield:"_id",as:"product"}}
       let joinWithBrandStage = {$lookup:{from:"brands",localField:"product.brandID",foreignfield:"_id",as:"brand"}}
       let joinWithCategoryStage = {$lookup:{from:"categories",localField:"product.catoryID",foreignfield:"_id",as:"category"}}
       let unwindProductStage = {$unwind:"$product"}
      let unWindBrand = {$unwind:"$brand"}
      let unWindCategory = {$unwind:"category"}
      let projectionStage = {$project:{
        '_id':0,'userID':0,'createAt':0,'updateAt':0,'product._id':0,'product.categoryID':0,'product.brandID':0,
        'brand._id':0,'category._id':0
      }}
      let data = await wishListModel.aggregate([
        matchStage,joinWithProductStage,joinWithBrandStage,joinWithCategoryStage,unwindProductStage,unWindBrand ,
        unWindCategory, projectionStage

      ])
      return {status:"success",data:data}
    } catch (error) {
        return {status:"failed",message:"Something went wrong"}
    }
 }

 module.exports = {
    saveWishListService,removeWishListService,wishListService
 }