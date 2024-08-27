"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";

const page = () => {

    const handleSignUp = () => {
        console.log("x");
        
    }

    return (
        <div className='container mx-auto py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-10'>
                <div className='flex items-center justify-center flex-col'>
                    <Image alt='login' src="assets/images/login/login.svg" width={400} height={400}></Image>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <h2 className='text-center text-primary text-4xl font-semibold mb-10'>Sign Up</h2>

                    <form onSubmit={handleSignUp} action="">
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full" /><br />
                        <label htmlFor="email">Email</label> <br />
                        <input type="text" placeholder="Name" name='email' className="input input-bordered w-full" /><br />
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" placeholder="Enter Password" name='password' className="input input-bordered w-full" />
                        
                        <button type='submit'  className='btn btn-primary w-full mt-12'>Sign up</button>
                    </form>


                    <div className='my-5'>
                        <p>Or sign up with</p>
                    </div>
                    <div className='flex mb-5 gap-10 text-primary justify-center items-center w-full'>
                        <FaFacebook />
                        <FaLinkedin />
                        <FaGoogle />
                    </div>
                    <div>
                        <p>Already have an account? <Link className='text-primary' href="http://localhost:3000/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;