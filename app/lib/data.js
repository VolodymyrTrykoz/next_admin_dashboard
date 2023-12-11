import {Product, User} from './models';
import {connectToDB} from './utils';


export const fetchUsers = async(q, page) => {
    const regex = new RegExp(q, 'i');
    try {
        connectToDB();
        const count = await User.find({username: {$regex: regex}}).count();
        const users = await User.find({username: {$regex: regex}})

        return {users, count};
    }
    catch(err){
        console.log('Failed to fetch users', err);
        throw new Error('Failed to fetch new users', err);
    } 
}

export const fetchUserById = async (userId) => {
    try {
        connectToDB();
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (err) {
        console.log(`Failed to fetch user with ID ${userId}`, err);
        throw new Error(`Failed to fetch user with ID ${userId}`, err);
    }
}

export const fetchProducts = async(q, page) => {
    const regex = new RegExp(q, 'i');
    try {
        connectToDB();
        const count = await Product.find({title: {$regex: regex}}).count();
        const products = await Product.find({title: {$regex: regex}})

        return {products, count};
    }
    catch(err){
        console.log('Failed to fetch products', err);
        throw new Error('Failed to fetch new products', err);
    } 
}

export const fetchProductById = async (productId) => {
    try {
        connectToDB();
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (err) {
        console.log(`Failed to fetch product with ID ${productId}`, err);
        throw new Error(`Failed to fetch product with ID ${productId}`, err);
    }
}

