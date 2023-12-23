const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const AuthVerification = require('../middleware/authVerification')
const ProductController = require('../controllers/ProductController');
const wishListController = require('../controller/wishListController')

//users api ending point
router.get('/userOTP/:email',userController.userOTP)
router.get('/verifyOtp/:email/:otp',userController.verifyOtp)
router.post('/userLogin/:email',userController.userLogin)
router.get('/userLogout',AuthVerification,userController.userLogout)
router.post('/createProfile',AuthVerification,userController.createProfile)
router.post('/updateProfile',AuthVerification,userController.updateProfile)
router.get('/readProfile',AuthVerification,userController.readProfile)

//product
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandId',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryId',ProductController.ProductListByCategory)
router.get('/ProductListByKeyword/:KeywordId',ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:RemarkId',ProductController.ProductListByRemark)
router.get('/ProductListBySimilar/:SimilarId',ProductController.ProductListBySimilar)
router.get('/ProductDetails/:DetailsId',ProductController.ProductDetails)
router.get('/ProductReviewList/:ReviewId',ProductController.ProductReviewList)

//wish list api ending point
router.post('/saveWishList',AuthVerification,wishListController.saveWishList)
router.post('/removeWishList',AuthVerification,wishListController.removeWishList)
router.get('/wishList',AuthVerification,wishListController.wishList)






module.exports = router