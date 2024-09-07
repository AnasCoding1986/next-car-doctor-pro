'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import SocialLogin from '@/components/shared/SocialLogin';

const LoginPage = () => {
    const router = useRouter();

    // Wrap searchParams in Suspense boundary
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const resp = await signIn('credentials', {
            email,
            password,
            redirect: false, // prevent auto-redirect
        });

        if (!resp.error) {
            // If successful, redirect to the path or home page
            router.push(path ? path : "/");
        } else {
            // Handle login error (e.g., show error message to user)
            console.error('Login failed:', resp.error);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
                        <SocialLogin />
                        <div>
                            <p>Do not have an account? <Link className='text-primary' href="/signup">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default LoginPage;
