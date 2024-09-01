import { getServicesDetails } from '@/services/getServices';
import React from 'react';

const page = async ({ params }) => {
    const details = await getServicesDetails(params.id);
    const { title, img, price, description, facility } = details.service;
    console.log(title, img, price, description, facility);

    return (
        <div>
            <div
                className="hero h-72 relative container mx-auto my-20"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                
                   
                        <h1 className="text-4xl absolute left-14 text-white font-extrabold">Service Details</h1>
                        <button className="btn bottom-0 absolute btn-primary">Home/Service Details</button>
                    
                
            </div>
        </div>
    );
};

export default page;