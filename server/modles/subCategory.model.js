import mongoose from "mongoose";
const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "category",
    },
  },
  { timestamps: true }
);

const SubCategoryModel = mongoose.model("subCategory", subCategorySchema);
export default SubCategoryModel; // this is the model that we will use in our controller
