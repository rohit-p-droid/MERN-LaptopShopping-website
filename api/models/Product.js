const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema (
    {
        brandName: {type: String, required: true},
        productName: {type: String, required: true},
        shortInfo: {type: String, required: true},
        image: {type: String, required: true},
        processor: {type: String, required: true},
        ram : {type: String, required: true},
        storage: {type: String, required: true},
        graphics: {type: String, required: true},
        price: {type: Number, required: true}

    }
)

module.exports = mongoose.model("Product", ProductSchema);