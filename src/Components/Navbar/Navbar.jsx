import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {

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
        <nav>
            <ul className='md:flex  justify-center'>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>
                )
            }
            </ul>
        </nav>
    );
};

export default Navbar;