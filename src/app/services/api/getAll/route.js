import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  try {
    const db = await connectDB(); // Ensure the database connection is awaited
    const servicesCollection = db.collection('services');

    const services = await servicesCollection.find().toArray();

    return new Response(JSON.stringify({ services }));
  } catch (error) {
    console.error("Error getting services:", error);
    return new Response(JSON.stringify({ message: 'Failed to get data' }), { status: 500 });
  }
};
