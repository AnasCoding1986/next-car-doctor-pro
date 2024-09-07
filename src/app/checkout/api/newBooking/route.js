import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const booking = await req.json();
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings');
    try {
        const newBookings = await bookingsCollection.insertOne(booking);
        return NextResponse.json({message: "Service booked successfully"},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong"},{status:400})
    }
}
