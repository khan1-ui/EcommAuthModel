const mongoose = require('mongoose')
const ProductsDataSchema = mongoose.Schema({
    title:{type:String , unique:true},
    shortDe:{type:String , required:true},
    price:{type:String , unique:true},
    discount:{type:String , required:true},
    discountPrice:{type:String , unique:true},
    image:{type:String , required:true},
    star:{type:String , unique:true},
    stock:{type:String , required:true},
    remark:{type:String , unique:true},
    categoryID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    brandID:{type:mongoose.Schema.Types.ObjectId , unique:true}
},{timeStamps:true,versionKey:false})
const ProductsModel = mongoose.model('products',ProductsDataSchema)
module.exports =ProductsModel