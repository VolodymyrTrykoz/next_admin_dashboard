
import { User, Product } from './models';
import {connectToDB} from './utils';
import {revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';
import bcrypt from "bcrypt";
import { signIn } from '../auth';

export const addUserData = async (formData) => {
    "use server";
    const {username, email, password, phone, isAdmin, isActive, address} = Object.fromEntries(formData);
    try {
        await connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
 
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            isAdmin,
            isActive, 
            address
        })

        await newUser.save();

    }
    catch(err){
        throw new Error ('Failed to create a new user' + err.message)
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const addProductData = async (formData) => {
    "use server";

    const {title, cat, price, stock, color, size, desc} = Object.fromEntries(formData);

    try {
        await connectToDB();

        const newProduct = new Product({
            title, cat, price, stock, color, size, desc
        })

       await newProduct.save();


    } catch (err) {
        throw new Error ('Failed to create a new product' + err.message);
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  
}

export const deleteUserById = async (formData) => {
    'use server';
    const {id} = Object.fromEntries(formData);
    try{
        connectToDB();
        await User.findByIdAndDelete(id);
    }
    catch(err){
        throw new Error('Cannot delete a user' + err.message);
    }
    revalidatePath("/dashboard/users");
}

export const deleteProductById = async(formData) => {
    'use server';
    const {id} = Object.fromEntries(formData);
    try{
        connectToDB();
        await Product.findByIdAndDelete(id)
    }
    catch(err){
        throw new Error('Cannot delete product by id' + err.message)
    }
    revalidatePath("/dashboard/products");
}

export const updateProductById = async(formData) => {
    'use server';
    const {id, ...data} = Object.fromEntries(formData);

    const updatedData = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => value !== '' || value === null)
    );

    try{
        await connectToDB();
        await Product.findByIdAndUpdate(id, updatedData);
    } catch(err){
        throw new Error('Cannot update product' + err.message)
    }

    revalidatePath(`/dashboard/products/${id}`);
    redirect('/dashboard/products/');

}

export const updateUserById = async(formData) => {
    'use server';
    const {id, ...data} = Object.fromEntries(formData);

    const updatedData = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => value !== '' || value === null)
    );

    try{
        await connectToDB();
        await User.findByIdAndUpdate(id, updatedData);
    } catch(err){
        throw new Error('Cannot update user' + err.message)
    }

    revalidatePath(`/dashboard/users/${id}`);
    redirect('/dashboard/users/');

}

export const authenticate = async (formData) => {
    'use server'
    const {username, password} = Object.fromEntries(formData);
 
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      return "Wrong Credentials!";
    }
  };
