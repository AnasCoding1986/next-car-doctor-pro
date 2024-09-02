import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const details = await getServicesDetails(params.id);
    const { title, img, price, description, facility } = details.service;
    console.log(details.service);

    // console.log(title, img, price, description, facility);

    return (
        <div className='container mx-auto '>
            <div
                className="hero h-72 relative my-20"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <h1 className="text-4xl absolute left-14 text-white font-extrabold">Service Details</h1>
                <button className="btn bottom-0 absolute btn-primary">Home/Service Details</button>
            </div>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-1 lg:col-span-2 pl-3'>1
                    <Image src={img} alt='Service Image' layout="intrinsic" width={1600} height={400} className="w-full object-cover" />
                    <h2 className='text-xl font-semibold my-5'>{title}</h2>
                    <p className='font-light mb-5'>{description}</p>

                    <div className='grid gap-2 grid-cols-1 lg:grid-cols-2'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body bg-[#F3F3F3] border-t-2 border-[#FF3811] rounded-t-lg">
                                <h2 className="card-title">Instant Car Services</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body bg-[#F3F3F3] border-t-2 border-[#FF3811] rounded-t-lg">
                                <h2 className="card-title">Instant Car Services</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body bg-[#F3F3F3] border-t-2 border-[#FF3811] rounded-t-lg">
                                <h2 className="card-title">Instant Car Services</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body bg-[#F3F3F3] border-t-2 border-[#FF3811] rounded-t-lg">
                                <h2 className="card-title">Instant Car Services</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>

                    </div>

                    <p className='font-light my-5'>{description}</p>

                </div>


                <div className='col-span-1'>2</div>
            </div>
        </div>
    );
};

export default page;