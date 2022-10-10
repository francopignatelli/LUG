import { Schema, model } from "mongoose";

const regexUsername = /^[^\W_]+$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 3,
        maxLength: 16,
        match: regexUsername,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 32
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: regexEmail
    },
  });

export default model("User", userSchema);