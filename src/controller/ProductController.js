const { ProductBrandListServices,ProductCategoryListServices,ProductSliderListServices,ProductListByBrandServices,ProductListByCategoryServices,ProductListBySimilarServices,ProductListByKeywordServices,ProductListByRemarkServices,ProductReviewListServices,ProductDetailsServices} = require('../services/ProductServices')


exports.ProductBrandList = async(req,res)=>{
let result = await ProductBrandListServices()
return res.status(200).json(result)
}
exports.ProductCategoryList = async(req,res)=>{
    let result = await ProductCategoryListServices()
    return res.status(200).json(result)
}
exports.ProductSliderList = async(req,res)=>{
    let result = await ProductSliderListServices()
    return res.status(200).json(result)
}
exports.ProductListByBrand = async(req,res)=>{

}
exports.ProductListByCategory= async(req,res)=>{

}
exports.ProductListBySimilar = async(req,res)=>{

}
exports.ProductListByKeyword = async(req,res)=>{

}
exports.ProductListByRemark = async(req,res)=>{

}
exports.ProductDetails = async(req,res)=>{

}
exports.ProductReviewList = async(req,res)=>{

}