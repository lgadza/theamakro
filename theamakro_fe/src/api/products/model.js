import mongoose from "mongoose";
import ReviewsModel from "./reviewModal.js";
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },

    imageUrls: {
      type: [String],
      validate: [arrayLimit, "Images exceeds the limit of 10"],
      required: true,
    },
    price: { type: Number, required: true },
    condition: { type: String, required: true },
    reviews: [ReviewsModel],
  },
  {
    timestamps: true,
  }
);
productSchema.static("findProductsWithReviews", async function (query) {
  const total = await this.countDocuments(query.criteria);
  const products = await this.find(query.criteria, query.options.fields)
    .sort(query.options.sort)
    .skip(query.options.skip)
    .limit(query.options.limit)
    .populate({
      path: "reviews",
      //   select: "firstName lastName",
    });

  return { total, products };
});
function arrayLimit(val) {
  return val.length <= 10;
}
export default model("product", productSchema);
