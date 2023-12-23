const mongoose = require('mongoose')
const ProductSliderDataSchema = mongoose.Schema({
    title:{type:String , unique:true},
    des:{type:String , required:true},
    price:{type:String , required:true},
    image:{type:String , required:true},
    productID:{type:mongoose.Schema.Types.ObjectId , unique:true}
},{timestamps:true,versionKey:false})
const ProductSliderModel = mongoose.model('productSlider',ProductSliderDataSchema)
module.exports = ProductSliderModel
