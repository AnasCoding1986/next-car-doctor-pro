'use client';

import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const { data } = useSession();
  console.log(data);

  const [services, setServices] = useState({});
  const [currentDate, setCurrentDate] = useState('');

  const loadService = async () => {
    try {
      const details = await getServicesDetails(params.id);
      setServices(details.service);
    } catch (error) {
      console.error('Error loading service details:', error);
    }
  };

  const { title, img, price, description, facility } = services || {};

  const handleBooking = async (e) => {
    e.preventDefault();
    // Handle booking logic here
  };

  useEffect(() => {
    loadService();
    setCurrentDate(formatDate(new Date()));  // Set the formatted date when the component mounts
  }, [params]);

  // Utility function to format date as dd/mm/yyyy
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='container mx-auto'>
      <div
        className="hero h-72 relative my-20"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="text-4xl absolute left-14 text-white font-extrabold">Checkout Details of: {title}</h1>
        <button className="btn bottom-0 absolute btn-primary">Home/Service Details</button>
      </div>
      <div>
        <div className="hero min-h-screen bg-[#F3F3F3]">
          <div className="hero-content">
            <div className="card bg-base-100 w-full shadow-2xl">
              <form onSubmit={handleBooking} className="card-body">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={data?.user?.name} className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input type="text" defaultValue={currentDate} className="input input-bordered" required readOnly />
                  </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input type="number" placeholder="Your Phone" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={data?.user?.email} className="input input-bordered" />
                  </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input type="number" defaultValue={price} className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="Your address" className="input input-bordered" required />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Order confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;


// import { connectDB } from "@/lib/connectDB";


// export const GET = async (req) => {
//     const booking = await req.json();
//     const db = await connectDB();
//     const bookingsCollection = db.collection('bookings');
//     try {
//         const newBookings = await bookingsCollection.insertOne(booking);
//         return Response.json({message: "Service booked successfully"})
//     } catch (error) {
//         console.log(error);
//     }
// }
