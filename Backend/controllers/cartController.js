import userModel from "../models/userModel.js";

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Ensure userId and itemId are provided
    if (!userId || !itemId) {
      return res.status(400).json({ success: false, message: "User ID and Item ID are required" });
    }

    // Find user by ID
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {}; // Initialize cartData if it doesn't exist

    // Update cartData
    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    // Update user data in the database
    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Ensure userId and itemId are provided
    if (!userId || !itemId) {
      return res.status(400).json({ success: false, message: "User ID and Item ID are required" });
    }

    // Find user by ID
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {}; // Initialize cartData if it doesn't exist

    // Update cartData
    if (cartData[itemId] > 1) {
      cartData[itemId] -= 1;
    } else {
      delete cartData[itemId]; // Remove item if quantity is 1 or less
    }

    // Update user data in the database
    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.error("Error removing from cart:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get cart details
const getCart = async (req, res) => {
  try {
    const { userId } = req.params; // Expecting userId in params

    // Ensure userId is provided
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    // Find user by ID
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {}; // Initialize cartData if it doesn't exist
    res.json({ success: true, cartData });
  } catch (error) {
    console.error("Error getting cart details:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addToCart, removeFromCart, getCart };
