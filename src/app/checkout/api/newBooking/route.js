import { connectDB } from "@/lib/connectDB";

export const POST = async (req) => {
    const booking = await req.json();
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings');
    try {
        const newBookings = await bookingsCollection.insertOne(booking);
        return Response.json({message: "Service booked successfully"},{status:200})
    } catch (error) {
        console.log(error);
        return Response.json({message: "Something went wrong"},{status:400})
    }
}
