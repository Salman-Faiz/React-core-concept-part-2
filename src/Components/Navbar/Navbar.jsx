import React, { useState } from 'react';
import Link from '../Link/Link';
import { FaAlignLeft , FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
const [open,setOpen] =useState(false);
    const routes = [
        {
            id: 'nav-home',
            path: '/home',

            name: 'Home'
        },
        {
            id: 'nav-about',
            path: '/about',

            name: 'About Us'
        },
        {
            id: 'nav-services',
            path: '/services',

            name: 'Services'
        },
        {
            id: 'nav-contact',
            path: '/contact',

            name: 'Contact'
        },
        {
            id: 'nav-blog',
            path: '/blog',

            name: 'Blog'
        }
    ];

    return (
        <nav className='p-5  bg-purple-200'>
            <div onClick={()=>{setOpen(!open)}} className='md:hidden text-2xl ms-4 mt-4 '>
                {
                    open === true ? <FaRegWindowClose></FaRegWindowClose> :  <FaAlignLeft className=' '></FaAlignLeft>
                }
               
            </div>
            
            <ul className={`md:flex ms-4 absolute md:static bg-purple-200 rounded-lg p-4 duration-500
            ${open ? 'top-24 ' : '-top-60'}
            `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>
                )
            }
            </ul>
        </nav>
    );
};

export default Navbar;