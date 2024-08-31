import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";

export const GET = async () => {
  try {
    const db = await connectDB(); // Ensure the database connection is awaited
    const servicesCollection = db.collection('services');

    await servicesCollection.deleteMany();
    await servicesCollection.insertMany(services);

    return new Response(JSON.stringify({ message: 'Seeded successfully' }), { status: 200 });
  } catch (error) {
    console.error("Error seeding services:", error);
    return new Response(JSON.stringify({ message: 'Failed to seed data' }), { status: 500 });
  }
};
