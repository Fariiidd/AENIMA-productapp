import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    image: String,
}, {
    timestamps: true,
    versionKey: false,
});

const productPost = mongoose.model("product", productSchema);

export default productPost;