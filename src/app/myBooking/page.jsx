'use client';

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, Bounce } from 'react-toastify';


const Page = () => {

    const session = useSession();
    const [bookings, setBookings] = useState([]);

    const loadData = async () => {
        try {
            if (session?.data?.user?.email) {
                const resp = await fetch(`http://localhost:3000/myBooking/api/${session.data.user.email}`);
                if (!resp.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await resp.json();
                console.log("Fetched data:", data);
                setBookings(data?.myBookings);
            } else {
                console.error("Session or email not available.");
            }
        } catch (error) {
            console.error("Failed to fetch bookings:", error);
        }
    }

    const handleDelete = async (id) => {
        try {
            const resp = await fetch(`http://localhost:3000/myBooking/api/delete-booking/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            

            if (resp.ok) {
                toast.success('Booking deleted successfully!', { 
                    position: "top-center",
                    autoClose: 2000,
                    transition: Bounce 
                });
                // Reload data after successful deletion
                loadData();
            } else {
                throw new Error("Failed to delete booking.");
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error('Failed to delete booking!', { 
                position: "top-center",
                autoClose: 2000,
                transition: Bounce 
            });
        }
    };

    useEffect(() => {
        if (session && session.status === "authenticated") {
            loadData();
        }
    }, [session]);

    useEffect(() => {
        console.log("Updated bookings:", bookings);
    }, [bookings]);

    return (
        <div>
            <div
                className="hero h-72 relative my-20"
                style={{
                    backgroundImage: 'url(/assets/images/about_us/parts.jpg)',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <h1 className="text-4xl absolute left-14 text-white font-extrabold">My booking</h1>
                <button className="btn bottom-0 absolute btn-primary">Home/Service Details</button>
            </div>
            <div className="container mx-auto flex justify-center my-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Price </th>
                                <th>Booking Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                bookings?.map(({ title, _id, date, price }, index)=>(

                                    <tr key={_id}>
                                    <th>{index + 1}</th>
                                    <td>{title}</td>
                                    <td>{price}</td>
                                    <td>{date}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <Link href={`/myBooking/update/${_id}`}><button className="btn btn-info">Edit</button></Link>
                                            <button onClick={()=>handleDelete(_id)} className="btn btn-error">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;
