import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {

        const { username, email, password } = req.body;
        const isUserAlreadyRegistered = await userModel.findOne({ email });

        if (isUserAlreadyRegistered) {
            return res.status(400).json({ message: "User already registered" });
        }

        const user= userModel.create({ username, email, password });

        res.status(201).json({
             message: "User registered successfully", 
             user 
        });

}