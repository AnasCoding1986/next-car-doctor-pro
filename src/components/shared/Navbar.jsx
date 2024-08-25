import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCart, IoSearch } from "react-icons/io5";

const Navbar = () => {

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
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contacts",
            path: "/contacts"
        }
    ]

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;