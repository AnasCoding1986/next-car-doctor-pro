import { getServicesDetails } from '@/services/getServices';
import React from 'react';

const page = async ({params}) => {
    const details = await getServicesDetails(params.id);
    const {title,img,price,description,facility} = details.service;
    console.log(title,img,price,description,facility);
    
    return (
        <div>
            <h2>This is details</h2>
        </div>
    );
};

export default page;