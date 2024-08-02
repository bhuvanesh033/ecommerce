const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userid: { type: String, required: true },
    products:[{
        productid : String,
        quantity : String,
    },
    ],
});

module.exports = mongoose.model('cart', cartSchema);  // Ensure correct export
