import React from 'react';
import {services} from '../../lib/services'
import ServicesCards from '../cards/ServicesCards';

const Services = () => {
    console.log(services);
    
    return (
        <div className='min-h-screen'>
            <div className='text-center container mx-auto'>
                <h3 className='text-2xl font-bold text-orange-800'> Our Services</h3>
                <h2 className='text-5xl'>Our Services area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    services.map((service) => (
                        <ServicesCards key={service.id} service={service}></ServicesCards>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;