const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    rating : String,
    images:[
        {
            image:String
        }
    ],
    category : String,
    seller : String,
    stock : String,
    numOfRevives : String,
    CreatedAt : Date,
})

const productModel = mongoose.model("Product", productSchema)

module.exports = productModel