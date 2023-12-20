const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const AuthVerification = require('../middleware/authVerification')
const wishListController = require('../controller/wishListController')

//users api ending point
router.get('/userOTP/:email',userController.userOTP)
router.get('/verifyOtp/:email/:otp',userController.verifyOtp)
router.post('/userLogin/:email',userController.userLogin)
router.get('/userLogout',AuthVerification,userController.userLogout)
router.post('/createProfile',AuthVerification,userController.createProfile)
router.post('/updateProfile',AuthVerification,userController.updateProfile)
router.get('/readProfile',AuthVerification,userController.readProfile)

//wish list api ending point
router.post('/saveWishList',AuthVerification,wishListController.saveWishList)
router.post('/removeWishList',AuthVerification,wishListController.removeWishList)
router.get('/wishList',AuthVerification,wishListController.wishList)






module.exports = router