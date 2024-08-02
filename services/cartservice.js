const Cart = require('../models/Cart'); // Adjust the path to your Cart model

const deleteCart = async (userid) => {
    try {
        await Cart.deleteOne({ userid });
        return { success: true, message: 'Cart deleted' };
    } catch (error) {
        console.error('Error deleting cart:', error);
        return { success: false, message: 'Error deleting cart' };
    }
};

module.exports = { deleteCart };
