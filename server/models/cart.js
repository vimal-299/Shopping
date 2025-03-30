import mongoose from "mongoose"
const CartSchema = new mongoose.Schema({
  id: Number,
  image: String,
  title: String,
  price: Number,
  quantity: Number
});
const CartModel = mongoose.model('Cart',CartSchema)
export default CartModel
