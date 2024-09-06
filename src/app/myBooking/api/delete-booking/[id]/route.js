import { connectDB } from "@/lib/connectDB"

export const DELETE = async (request, {params}) => {
    const db = await connectDB();
    console.log(db);
    
    const bookingcollection = db.collection('bookings');
    try {
        const resp = await bookingcollection
        .deleteOne({_id: params.id})
        return Response.json({message: "deleted the booking", response: resp})
    } catch (error) {
        console.log(error);
        return Response.json({message: "something wrong"})
    }
}

export const PATCH = async (request, {params}) => {
    const db = await connectDB();
    const bookingcollection = db.collection('bookings');
    const {date,phone,address} = await request.json();
    try {
        const resp = await bookingcollection
        .updateOne(
            {_id: params.id},
            {
                $set: {
                    date,
                    phone,
                    address
                }
            },
            {
                upsert: true
            }
        )
        return Response.json({message: "updated booking", response: resp})
    } catch (error) {
        console.log(error);
        return Response.json({message: "something wrong"})
    }
}

export const GET = async (request, {params}) => {
    const db = await connectDB();
    console.log(db);
    
    const bookingcollection = db.collection('bookings');
    try {
        const resp = await bookingcollection
        .findOne({_id: params.id})
        return Response.json({message: "Get booking successful", response: resp})
    } catch (error) {
        console.log(error);
        return Response.json({message: "something wrong"})
    }
}




























// import { connectDB } from "@/lib/connectDB"
// import { ObjectId } from "mongodb";

// export const DELETE = async (req, { params }) => {
//     const db = await connectDB();
//     const bookingCollection = db.collection('bookings');
//     try {
//         const resp = await bookingCollection.deleteOne({ _id: new ObjectId(params.id) });
//         if (resp.deletedCount === 0) {
//             throw new Error("No document was deleted. Perhaps the ID is incorrect.");
//         }
//         console.log("Deletion successful:", resp);
//         return Response.json({ message: "Deleted successfully", response: resp })
//     } catch (error) {
//         console.log(error);
//         return Response.json({ message: "Something wrong" })
//     }
// }

// // export const PATCH = async (req,{params}) => {
// //     const db = await connectDB();
// //     const bookingCollection = db.collection('bookings');
// //     try {
// //         const resp = await bookingCollection.deleteOne({_id: new ObjectId(params.id)});
// //         return Response.json({message: "Deleted successfully", response:resp})
// //     } catch (error) {
// //         console.log(error);
// //         return Response.json({message: "Something wrong"})
// //     }
// // }

// export const GET = async (req, { params }) => {
//     const db = await connectDB();
//     const bookingCollection = db.collection('bookings');
//     console.log(bookingCollection);
    
//     try {
//         const resp = await bookingCollection.findOne({ _id: new ObjectId(params.id) });
//         console.log(resp);
//         return Response.json({ message: "get successfully", response: resp })
//     } catch (error) {
//         console.log(error);
//         return Response.json({ message: "Something wrong" })
//     }
// }