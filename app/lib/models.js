import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{2,10}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 2-10 alphanumeric letters and be unique!"]
        },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    img: {
        type: String,
    },
    phone: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    address: {
        type: String,
    },
}, {timestamps: true});

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        },
    title: {
        type: String,
        required: [true, 'Category is required'],
    },
    desc: {
        type: String,
        required: [true, 'Description is required!'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Cannot be less than 0'],
    },
    stock: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Cannot be less than 0'],
    },
    img: {
        type: String,
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
}, {timestamps: true});

export const User = models.User || model("User", userSchema);
export const Product = models.Product || model("Product", productSchema);

