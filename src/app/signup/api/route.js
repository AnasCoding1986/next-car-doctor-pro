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
            return Response.json({message: 'user alredy exists'}, {status: 409});
        }

        const hashPassword = bcrypt.hashSync(newUser.password, 10);

        const resp = await userCollection.insertOne({...newUser, password:hashPassword});
        return Response.json({message: 'user created'}, {status: 200});

    } catch (error) {
        console.error("Error creating user:", error);
        return Response.json(
            {message: "Error creating user:", error}, 
            {status: 500}
        );
    }
};
