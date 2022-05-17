import Product from "../models/Product.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const result = await Product.find();

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const createProduct = async (req, res) => {
    const { name, description, image } = req.body;

    const newProduct = new Product({ name, description, image });
    try {
        await newProduct.save();

        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getOneProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Product.findById(id);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, image } = req.body;

    const updateProduct = { name, description, image, _id: id }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    try {
        await Product.findByIdAndUpdate(id, updateProduct, { new: true });

        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        await Product.findByIdAndDelete(id)

        res.status(201).json({message: "Post deleted"})
    } catch (error) {
        res.status(500).json({ message: error })
    }
}