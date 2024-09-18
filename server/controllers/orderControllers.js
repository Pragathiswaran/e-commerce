const orderModel = require('../models/orderModel')

exports.getOrders = async(req, res, next) =>{
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc ,item)=>( acc + item.product.price * item.qty),0)).toFixed(2)
    const status = 'pending'
    const createdAt = new Date()
    const order = await orderModel.create({cartItems,amount,status,createdAt})

    res.json({
        success: true,
        message: 'Get Orders Working',
        data: order
    })
}
