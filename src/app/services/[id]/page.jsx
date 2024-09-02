import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const page = async ({ params }) => {
    const details = await getServicesDetails(params.id);
    const { _id, title, img, price, description, facility } = details.service;
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

                    <h2 className='text-xl font-semibold my-5'>3 Simple Steps to Process</h2>

                    <p className='font-light mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text</p>

                    <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>

                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center justify-center'>
                                    <button className='bg-primary w-14 h-14 rounded-full text-white text-xl font-semibold'>01</button>
                                </div>
                                <h2 className="card-title flex items-center justify-center mt-7 mb-4">Step One</h2>
                                <p className='flex items-center justify-center'>It uses a dictionary of over 200 .</p>

                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center justify-center'>
                                    <button className='bg-primary w-14 h-14 rounded-full text-white text-xl font-semibold'>01</button>
                                </div>
                                <h2 className="card-title flex items-center justify-center mt-7 mb-4">Step One</h2>
                                <p className='flex items-center justify-center'>It uses a dictionary of over 200 .</p>

                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center justify-center'>
                                    <button className='bg-primary w-14 h-14 rounded-full text-white text-xl font-semibold'>01</button>
                                </div>
                                <h2 className="card-title flex items-center justify-center mt-7 mb-4">Step One</h2>
                                <p className='flex items-center justify-center'>It uses a dictionary of over 200 .</p>

                            </div>
                        </div>

                    </div>

                    <Image src={img} alt='Service Image' layout="intrinsic" width={1600} height={400} className="w-full my-5 object-cover" />

                </div>


                <div className='col-span-1'>2
                    <div className='bg-[#F3F3F3] py-2'>
                        <h2 className='text-lg font-bold ml-8 pt-8'>Services</h2>
                        <div className='my-8'>
                            <div className='bg-[#fff] flex justify-between p-4 my-4 mx-8'>
                                <p>Full Car Repair</p>
                                <div className='text-primary'>
                                    <FaArrowRight />
                                </div>
                            </div>
                            <div className='bg-[#fff] flex justify-between p-4 my-4 mx-8'>
                                <p>Full Car Repair</p>
                                <div className='text-primary'>
                                    <FaArrowRight />
                                </div>
                            </div>
                            <div className='bg-[#fff] flex justify-between p-4 my-4 mx-8'>
                                <p>Full Car Repair</p>
                                <div className='text-primary'>
                                    <FaArrowRight />
                                </div>
                            </div>
                            <div className='bg-[#fff] flex justify-between p-4 my-4 mx-8'>
                                <p>Full Car Repair</p>
                                <div className='text-primary'>
                                    <FaArrowRight />
                                </div>
                            </div>
                            <div className='bg-[#fff] flex justify-between p-4 my-4 mx-8'>
                                <p>Full Car Repair</p>
                                <div className='text-primary'>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold my-5'>Price ${price}</h2>
                    <Link href={`/checkout/${_id}`}><button className='btn btn-primary w-full'>Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default page;