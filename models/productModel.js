
const mongoose =require('mongoose'); 


const productSchema= mongoose.Schema({

    name: String,
    image: String,
    category : String,
    prix: String,
    description: String




}); 


const Product=mongoose.model("Product", productSchema); 
module.exports=Product; 