const BrandModel = require('../models/BrandModel')
const CategoryModel = require('../models/CategoryModel')
const ProductSliderModel = require('../models/ProductSliderModel')
const ProductModel = require('../models/ProductsModel')
const ProductDetailsModel = require('../models/ProductDetailsModel')
const ReviewModel = require('../models/ProductReviewModel')

const ProductBrandListServices = async(req,res)=>{
try {
   const data = await BrandModel.find()
   return {status:"success",data:data}
} catch (error) {
   return {status:"fail",data:error}.toString()
}
}
const ProductCategoryListServices = async(req,res)=>{
   try {
      const data = await CategoryModel.find()
      
      return {status:"success",data:data}
   } catch (error) {
      return {status:"fail",data:error}.toString()
   }
}
const ProductSliderListServices = async(req,res)=>{
   try {

      const data = await ProductSliderModel.find()
      console.log(data)
       return {status:"success",data:data}
   } catch (error) {
      return {status:"fail",data:error}.toString()
   }
}
const ProductListByBrandServices = async(req,res)=>{

}
const ProductListByCategoryServices = async(req,res)=>{

}
const ProductListBySimilarServices = async(req,res)=>{

}
const ProductListByKeywordServices = async(req,res)=>{

}
const ProductListByRemarkServices = async(req,res)=>{

}
const ProductDetailsServices = async(req,res)=>{

}
const ProductReviewListServices = async(req,res)=>{

}
 module.exports = {
    ProductBrandListServices,ProductCategoryListServices,ProductSliderListServices,ProductListByBrandServices,ProductListByCategoryServices,
    ProductListBySimilarServices,ProductListByKeywordServices,ProductListByRemarkServices,ProductReviewListServices,ProductDetailsServices
 }