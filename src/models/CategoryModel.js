const mongoose = require('mongoose')
const CategoriesDataSchema = mongoose.Schema({
    categoryName:{type:String , unique:true},
    categoryImg:{type:String , required:true}
},{timeStamps:true,versionKey:false})
const CategoryModel = mongoose.model('categories',CategoriesDataSchema)
module.exports =CategoryModel