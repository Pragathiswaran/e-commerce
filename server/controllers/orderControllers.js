const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')

exports.getOrders = async (req, res, next) => {
    try {
        const cartItems = req.body;

        // Log cartItems for debugging
        // console.log(cartItems);

        // Calculate total amount
        const amount = Number(
            cartItems.reduce((acc, item) => {
                // Access nested product and productQty
                const price = Number(item.product.price); // price from product
                const qty = Number(item.productQty); // quantity from the current item
                if (!isNaN(price) && !isNaN(qty)) {
                    return acc + price * qty;
                }
                return acc; // Skip invalid items
            }, 0).toFixed(2)
        );

        // Check if amount is NaN
        if (isNaN(amount)) {
            return res.status(400).json({
                success: false,
                message: 'Calculation error: Amount is NaN.'
            });
        }

        const status = 'pending';
        const createdAt = new Date();

        // Create order
        const order = await orderModel.create({ cartItems, amount, status, createdAt });

        // Update product stock
        await Promise.all(cartItems.map(async (item) => {
            const product = await productModel.findById(item.product._id);
            if (product && item.productQty) {
                product.stock = Number(product.stock) - item.productQty; // Update stock correctly
                await product.save();
            }
        }));

        // Respond with the created order
        res.json({
            success: true,
            message: 'Order placed successfully',
            data: order
        });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({
            success: false,
            message: 'An error occurred while processing the order.'
        });
    }
};
