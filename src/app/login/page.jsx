'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const resp = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });
            
            if (resp.error) {
                console.error('Login failed:', resp.error);
                // Handle error by showing a message to the user
            } else {
                console.log('Login successful:', resp);
                // Redirect user to the desired page after successful login
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
        }
    };

    return (
        <div className='container mx-auto py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-10'>
                {/* Image Section */}
                <div className='flex items-center justify-center flex-col'>
                    <Image alt='login' src='/assets/images/login/login.svg' width={400} height={400} />
                </div>

                {/* Form Section */}
                <div className='flex items-center justify-center flex-col'>
                    <h2 className='text-center text-primary text-4xl font-semibold mb-10'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="text" placeholder="Email" name='email' className="input input-bordered w-full" />
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" placeholder="Enter Password" name='password' className="input input-bordered w-full" />
                        <button type='submit' className='btn btn-primary w-full mt-12'>Login</button>
                    </form>
                    <div className='my-5'>
                        <p>Or login with</p>
                    </div>
                    <div className='flex mb-5 gap-10 text-primary justify-center items-center w-full'>
                        <FaFacebook />
                        <FaLinkedin />
                        <FaGoogle />
                    </div>
                    <div>
                        <p>Do not have an account? <Link className='text-primary' href="/signup">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
