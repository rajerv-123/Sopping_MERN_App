import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
    },
    orderId: {
      type: String,
      required: [true, "Please provide a order id"],
      unique: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "product",
    },
    product_details: {
      name: String,
      name: String,
      image: Array,
    },
    paymentId: {
      type: String,
      default: "",
    },
    delivery_address: {
      type: mongoose.Schema.ObjectId,
      ref: "address",
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
    payment_status: {
      type: String,
      default: "pending",
    },
    subTotalAmt: {
      type: Number,
      default: 0,
    },
    totalAmt: {
      type: Number,
      default: 0,
    },
    invoice_receipt: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("order", orderSchema);
export default OrderModel; // this is the model that we will use in our controller
// Now, we have created the model for the order collection. The order collection will have the following fields: