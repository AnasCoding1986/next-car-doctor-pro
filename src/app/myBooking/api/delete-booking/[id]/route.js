import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const DELETE = async (req,{params}) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const resp = await bookingCollection.deleteOne({_id: new ObjectId(params.id)});
        return Response.json({message: "Deleted successfully", response:resp})
    } catch (error) {
        console.log(error);
        return Response.json({message: "Something wrong"})
    }
}