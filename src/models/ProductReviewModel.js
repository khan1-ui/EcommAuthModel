const mongoose = require('mongoose')
const ProductReviewDataSchema = mongoose.Schema({
    productID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    userID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    des:{type:String , required:true},
    rating:{type:String , required:true}
},{timeStamps:true,versionKey:false})
const ProductReviewModel = mongoose.model('productReview',ProductReviewDataSchema)
module.exports = ProductReviewModel