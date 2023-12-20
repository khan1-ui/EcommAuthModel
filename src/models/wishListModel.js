const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    productID:{type:mongoose.Schema.Types.ObjectId,required:true},
    userID:{type:mongoose.Schema.Types.ObjectId,required:true}
},{timestamps:true,versionkey:false})
const wishModel = mongoose.model('wishes',dataSchema)
module.exports = wishModel