import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "product",
    },
    quantity: {
      type: Number,
      default: 1,
    }, 
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const CartModel = new mongoose.Schema("cartProduct", cartProductSchema);

export default CartModel;
