'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SocialLogin = () => {

    const router = useRouter();
    const session = useSession();

    const handleLogin = async(provider) => {
        const res = await signIn(provider, {redirect: false});
    }
    if (session.status === 'authenticated') {
        router.push('/')
    }

    return (
        <div>
            <div className='flex mb-5 gap-10 text-primary justify-center items-center w-full'>
                <button onClick={()=>handleLogin('google')}>
                    <FaGoogle />
                </button>
                <button onClick={()=>handleLogin('github')}>
                    <FaGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;