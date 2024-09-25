import Link from 'next/link';
import React from 'react';

const SideMenu = () => {
    return (
        <header className=' '>
            <nav>
                <ul className='w-full flex flex-col  h-full gap-5  '>
                    <li className='bg-indigo-100 px-5 py-2.5'>
                        <Link href='/'>Woman’s Fashion</Link>
                    </li>
                    <li className='bg-indigo-100 px-5 py-2.5'>
                        <Link href='/'>Men’s Fashion</Link>
                    </li>
                    <li className='bg-indigo-100 px-5 py-2.5'>
                        <Link href='/'>Electronics</Link>
                    </li>
                    <li className='bg-indigo-100 px-5 py-2.5'>
                        <Link href='/'>Home & Lifestyle</Link>
                    </li>
                    <li className='bg-indigo-100 px-5 py-2.5'>
                        <Link href='/'>Medicine</Link>
                    </li>
                    <li className='bg-indigo-100 px-5 py-2.5'>
                        <Link href='/'>Sports & Outdoor</Link>
                    </li>
                    <li className='bg-indigo-100 px-5 py-2.5'>
                        <Link href='/'>Baby’s & Toys</Link>
                    </li>
                    <li className='bg-indigo-100 px-5 py-2.5'>
                        <Link href='/'>Groceries & Pets</Link>
                    </li>
                    <li className='bg-indigo-100 px-5 py-2.5'>
                        <Link href='/'>Health & Beauty</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default SideMenu;