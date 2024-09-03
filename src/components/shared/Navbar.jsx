'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCart, IoSearch } from "react-icons/io5";

const Navbar = () => {

    const session = useSession();
    console.log(session);
    

    return (
        <div className='bg-base-100'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link href={"/"}>
                        <Image src="/assets/logo.svg" alt='logo' height={60} width={60}></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='space-x-2'>
                        {
                            navIteams.map((navIteam) => (
                                <Link className='font-semibold hover:text-primary duration-300' key={navIteam.path} href={navIteam.path}>{navIteam.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='items-center space-x-5 flex'>
                        <IoCart />
                        <IoSearch />
                        <a className="btn btn-outline btn-primary hover:text-white px-8">Appointment</a>
                        {
                            !session.data ?
                            <Link href='/login' className='btn btn-primary px-8'>Login</Link> :
                            <button onClick={() => signOut()} className='btn btn-primary px-8'>Logout</button> 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const navIteams = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "MyBooking",
        path: "/myBooking"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contacts",
        path: "/contacts"
    }
]

export default Navbar;