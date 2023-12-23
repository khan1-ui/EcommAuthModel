const mongoose = require('mongoose')
const ProductDetailsDataSchema = mongoose.Schema({
    img1:{type:String , required:true},
    img2:{type:String , required:true},
    img3:{type:String , required:true},
    img4:{type:String , required:true},
    img5:{type:String , required:true},
    img6:{type:String },
    img7:{type:String },
    img8:{type:String },
    des:{type:String },
    color:{type:String },
    size:{type:String },
    productID:{type:mongoose.Schema.Types.ObjectId}
},{timeStamps:true,versionKey:false})
const ProductDetailsModel = mongoose.model('productDetails',ProductDetailsDataSchema)
module.exports =ProductDetailsModel