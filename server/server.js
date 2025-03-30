import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import ProductModel from "./models/product.js"
import CartModel from "./models/cart.js"
import userModel from "./models/user.js"

const app = express();
app.use(express.json())
dotenv.config();

const corsoptions = {
  origin: ["http://localhost:5173"]
}
app.use(cors(corsoptions))

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(() => {
  console.log("database connected successfully")
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
}).catch((error)=>{console.log(error)})


app.get("/get-home-products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.json({ error: "Error fetching products" });
  }
});

app.get("/get-cart-products", async (req, res) => {
  try {
    const cart_products = await CartModel.find();
    res.json(cart_products);
  } catch (error) {
    res.json({ error: "Error fetching products" });
  }
});

app.get("/get-cart-products-price", async (req, res) => {
  try {
    const cart_price = await CartModel.find({},"price");
    const prices = cart_price.map((item)=>item.price)
    let a = 0;
    for (let i = 0; i < prices.length; i++) {
      a += prices[i]
    }
    res.json(a);
  } catch (error) {
    res.json({ error: "Error fetching products" });
  }
});

app.post("/add-cart-product", async (req, res) => {
  try {
    const { id, image, title, price, quantity } = req.body;
    ProductModel.findOne({id:id})
    .then(quant =>{
      if (quant.quantity>0){
        const newProduct = new CartModel({ id, image, title, price, quantity });
        newProduct.save();  
        res.json({ message: "Product added to cart successfully", product: newProduct });
      }
      else{
        res.json("Product out of stock")
      }

    })

  } catch (error) {
    console.error("Error adding product:", error.message);
    res.json({ error: "Error adding product" });
  }
});

app.delete("/remove-cart-product", async (req, res) => {
  try {
    const {id,price} = req.body;
    if (!id){
      console.log("not received")
    }
    const result = await CartModel.deleteOne({id:id})
    if (result.deletedCount > 0){
      res.json("product removed")
    }
    else{
      res.json("dont know")
    }
  } catch (error) {
    console.log("error->",error)
    res.json({ error: "Error removing product" });
  }
});

app.post("/user-signup", async (req, res) => {
  try {
    const { name,email,password } = req.body;

    const newuser = new userModel({ name,email,password });
    await newuser.save();  

    res.json({ message: "User added to database successfully", user: newuser });
  } catch (error) {
    console.error("Error adding user:", error.message);
    res.json({ error: "Error adding user" });
  }
});

app.post("/user-login", async (req, res) => {
  try {
    const { email,password } = req.body;

    userModel.findOne({email:email})
    .then(users=>{
      if (users){
        if (users.password === password){
          res.json("logged in")
        }
        else{
          res.json("your password is incorrect")
        }
      }
      else{
        res.json("no user found")
      }
    })
  } catch (error) {
    console.error("Error adding user:", error.message);
    res.json({ error: "Error adding user" });
  }
});

app.put("/update-quantity/:id", async (req, res) => {
  try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
          return res.status(400).json({ message: "Invalid product ID" });
      }

      const product = await ProductModel.findOne({ id: id });
      if (!product) {
          return res.status(404).json({ message: "Product not found" });
      }

      if (product.quantity <= 0) {
          return res.status(400).json({ message: "Quantity is already zero" });
      }

      await ProductModel.updateOne({ id: id }, { $inc: { quantity: -1 } });

      res.status(200).json({ message: "Quantity decremented successfully" });
  } catch (error) {
      console.error("Error updating quantity:", error.message);
      res.status(500).json({ error: "Error updating quantity" });
  }
});




