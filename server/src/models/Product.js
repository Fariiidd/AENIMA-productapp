import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    description: String,
    image: String,
}, {
    timestamps: true,
    versionKey: false,
});

const productPost = model("product", productSchema);

export default productPost;