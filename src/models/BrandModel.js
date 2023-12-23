const mongoose = require('mongoose')
const BrandDataSchema = mongoose.Schema({
    brandName:{type:String , unique:true},
    brandImg:{type:String , required:true}
},{timestamps:true,versionKey:false})
const BrandsModel = mongoose.model('brands',BrandDataSchema)
module.exports = BrandsModel
