import mongoose from "mongoose"

const prodSchema = new mongoose.Schema({
  id: Number,
  image: String,
  title: String,
  price: Number,
  quantity: Number
});
const ProductModel = mongoose.model('Product',prodSchema)
export default ProductModel
