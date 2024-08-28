import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (req) => {
    const newUser = await req.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        
        // Check if the user already exists
        const exists = await userCollection.findOne({ email: newUser.email });
        if (exists) {
            return new Response(JSON.stringify({ message: "User already exists" }), {
                status: 409, 
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        // Insert the new user into the collection
        await userCollection.insertOne(newUser);
        return new Response(JSON.stringify({ message: "User created" }), {
            status: 201, 
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("Error creating user:", error);
        return new Response(JSON.stringify({ message: "Something went wrong", error: error.message }), {
            status: 500, 
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
