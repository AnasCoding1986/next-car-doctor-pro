import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navIteams = [
        {
            title : "Home",
            path : "/"
        },
        {
            title : "About",
            path : "/about"
        },
        {
            title : "Services",
            path : "/services"
        },
        {
            title : "Blog",
            path : "/blog"
        },
        {
            title : "Contacts",
            path : "/contacts"
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
                    <div>
                        {
                            navIteams.map(navIteam)
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;