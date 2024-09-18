const productModel = require('../models/productModel')

exports.getProducts = async (req, res, next) =>{
    const products = await productModel.find({})
    res.status(200).json({
        success: true,
        message:'Get products working',
        products
    })
}

exports.getSingleProduct = async (req,res,next) =>{
    try {
        const product = await productModel.findById(req.params.id)
        res.status(200).json({
            success: true,
            message: 'Get Single product Working',
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        })
    }
}

