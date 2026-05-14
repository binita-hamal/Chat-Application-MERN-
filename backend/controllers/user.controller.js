import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; //name,email,password

    //check if user exists already or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    //10 salt rounds = how many times bcrypt should process encryption
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered succesfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
