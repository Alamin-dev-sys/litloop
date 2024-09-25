"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useCart from './useCart';

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const session = useSession();
    const [cart, refetch] = useCart();
    refetch()

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggles the state between true/false
    };
    const logOut = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't Logged Out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                signOut()
                Swal.fire({
                    title: "Logged out!",

                    icon: "success"
                });
            }
        });
    }
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/product' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/' },

    ];
    const [isScroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 100;
            setScroll(scrolled)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            if (window) {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])
    return (
        <div className='fixed top-0 w-full z-[999]'>
            <div className=" bg-black h-[4vh]">
                <div className="mx-auto grid w-full max-w-full grid-cols-4 gap-6 px-6 py-2 text-sm text-slate-500 md:grid-cols-8 lg:max-w-5xl lg:grid-cols-12 xl:max-w-7xl 2xl:max-w-[96rem]">
                    <div className="col-span-2 items-center md:col-span-4 lg:col-span-6">
                        <a
                            href="javascript:void(0)"
                            className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-500"
                        >

                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </a>
                    </div>
                    <div className="col-span-2 items-center justify-end gap-6 md:col-span-4 lg:col-span-6">
                        <div className="flex items-center justify-end gap-4">
                            <a
                                href="javascript:void(0)"
                                className="transition-colors duration-300 hover:text-emerald-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    height="16"
                                    width="16"
                                    role="graphics-symbol"
                                    aria-labelledby="title-tb01 desc-tb01"
                                >
                                    <title id="title-tb01">Icon title</title>
                                    <desc id="desc-tb01">
                                        A more detailed description of the icon
                                    </desc>
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M37.2491 3.30238C37.0498 2.18649 36.0513 1.49746 34.9878 1.50395C32.2606 1.5206 29.7927 1.60328 27.6333 1.96988C25.4705 2.33708 23.584 2.99414 22.038 4.18283C18.9929 6.52415 17.4377 10.7872 17.3724 18.3217H11.9552C10.9254 18.3217 9.94522 18.9739 9.74313 20.0674C9.51312 21.312 9.33088 23.311 9.75643 25.8014C9.95527 26.9651 10.9939 27.7324 12.1233 27.7324H17.3703V44.3867C17.3703 45.2169 17.8349 46.0595 18.7834 46.2403C19.5015 46.3773 20.6304 46.5002 22.375 46.5002C24.1168 46.5002 25.347 46.3777 26.1718 46.2437C27.2507 46.0684 27.8777 45.1191 27.8777 44.1186V27.7324H34.9316C36.0256 27.7324 37.0562 27.009 37.2608 25.8665C37.6736 23.5618 37.4742 21.4753 37.2437 20.1563C37.0465 19.0284 36.0444 18.3217 34.9653 18.3217H27.8795C27.8917 16.7111 27.9661 15.4564 28.1447 14.4728C28.341 13.3921 28.6547 12.6875 29.1044 12.2048C29.5502 11.7263 30.1817 11.4104 31.1284 11.2121C32.0832 11.0121 33.3126 10.9408 34.9123 10.9193C36.0128 10.9045 37.0511 10.1718 37.2541 9.01765C37.6718 6.64193 37.4794 4.59202 37.2491 3.30238Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="javascript:void(0)"
                                className="transition-colors duration-300 hover:text-emerald-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    height="16"
                                    width="16"
                                    role="graphics-symbol"
                                    aria-labelledby="title-tb02 desc-tb02"
                                >
                                    <title id="title-tb02">Icon title</title>
                                    <desc id="desc-tb02">
                                        A more detailed description of the icon
                                    </desc>
                                    <path
                                        fill="currentColor"
                                        d="M34.7229 4.69819C36.9179 5.13151 38.8231 6.226 39.9574 7.46121L44.8741 7.22772C46.162 7.16656 46.9576 8.61264 46.216 9.66758L42.8041 14.5217C43.7777 35.6815 22.2547 49.0961 4.54954 41.2208C3.75067 40.8654 3.58181 40.0439 3.74682 39.4029C3.91015 38.7685 4.4337 38.1304 5.23631 38.0329C7.74782 37.7279 10.886 36.8951 13.5309 34.8102C11.3351 34.4801 8.87383 33.2203 6.77118 31.5522C4.25179 29.5535 2.11595 26.8651 1.53319 24.2321C1.41942 23.7181 1.60805 23.2504 1.94754 22.9478C2.27981 22.6517 2.75116 22.5146 3.22643 22.6022C4.4998 22.8369 6.44397 23.1705 7.93366 23.3225C7.82715 23.2095 7.71399 23.0872 7.59534 22.9561C6.83881 22.1198 5.85466 20.9171 4.947 19.4528C3.13974 16.5372 1.58717 12.5021 2.86967 8.24191C3.04524 7.65872 3.52191 7.3215 4.02883 7.2399C4.52724 7.15967 5.07712 7.31911 5.46709 7.72851C7.80814 10.1862 13.7896 15.4057 22.914 16.1638C22.5823 14.0277 22.368 9.45707 27.2507 6.17582C29.7236 4.51405 32.4029 4.2402 34.7229 4.69819Z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="javascript:void(0)"
                                className="transition-colors duration-300 hover:text-emerald-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    height="16"
                                    width="16"
                                    role="graphics-symbol"
                                    aria-labelledby="title-tb03 desc-tb03"
                                >
                                    <title id="title-tb03">Icon title</title>
                                    <desc id="desc-tb03">
                                        A more detailed description of the icon
                                    </desc>
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M18.9563 7.52344C18.7526 6.91526 18.1767 6.49018 17.5166 6.51256C13.7277 6.64105 10.4346 7.72034 9.03159 8.24815C8.46409 8.46164 7.98142 8.84195 7.6475 9.35489C6.13235 11.6824 1.35143 20.1396 1.5015 33.9816C1.51112 34.8687 1.87868 35.7421 2.60293 36.3174C4.05518 37.4709 7.22566 39.6169 12.2716 41.1548C13.1338 41.4176 14.1343 41.1791 14.6848 40.3722C15.3668 39.3727 15.9633 38.1197 16.3718 37.1704C16.4818 36.9145 16.7753 36.775 17.0546 36.8566C18.8459 37.3799 21.1512 37.7795 24.0128 37.7795C26.865 37.7795 29.1613 37.3825 30.9459 36.8617C31.2254 36.7802 31.5188 36.9197 31.6289 37.1755C32.0373 38.1241 32.6329 39.3744 33.3137 40.3722C33.8643 41.1791 34.8647 41.4176 35.727 41.1548C40.7729 39.6169 43.9433 37.4709 45.3956 36.3174C46.1198 35.7421 46.4874 34.8687 46.497 33.9816C46.6459 20.2518 41.9432 11.8198 40.3884 9.41269C40.0295 8.85716 39.4986 8.45634 38.8845 8.24366C37.3835 7.72379 33.9285 6.65561 30.4846 6.51532C29.821 6.48828 29.2456 6.91631 29.0422 7.52344L28.5352 9.03687C28.4493 9.293 28.1503 9.47311 27.8343 9.41471C27.0144 9.26322 25.7164 9.09373 24.0128 9.09373C22.2989 9.09373 20.9871 9.26529 20.1611 9.41734C19.8471 9.47513 19.5502 9.29611 19.4648 9.04103L18.9563 7.52344ZM21 25C21 27.7614 18.9853 30 16.5 30C14.0147 30 12 27.7614 12 25C12 22.2386 14.0147 20 16.5 20C18.9853 20 21 22.2386 21 25ZM31.5 30C29.0147 30 27 27.7614 27 25C27 22.2386 29.0147 20 31.5 20C33.9853 20 36 22.2386 36 25C36 27.7614 33.9853 30 31.5 30Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- Header --> */}
            <header className={` sticky top-[4vh] left-0  z-20 w-full  ${isScroll ? 'bg-black/90' : 'bg-transparent border-b-2'}   after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200  lg:backdrop-blur-sm lg:after:hidden`}>
                <div className="relative  mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <a
                            id="WindUI"
                            aria-label="WindUI logo"
                            aria-current="page"
                            className="flex items-center gap-2  whitespace-nowrap py-3 text-[2vw] focus:outline-none text-indigo-600 lg:flex-1"
                            href="/"
                        >

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[2vw]">
                                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                            </svg> Litloop
                        </a>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                                    : ""
                                }
              `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >
                            {
                                links.map((link, index) => <li key={index} className="flex items-stretch"><Link href={link.path} className={`flex items-center gap-2 py-4  transition-colors duration-300 hover:text-indigo-400 focus:text-indigo-500 focus:outline-none focus-visible:outline-none lg:px-8 ${isScroll ? 'text-white' : 'text-black'}`}>{link.name}</Link></li>)
                            }

                            {
                                !session?.data?.user ? <li className="flex items-stretch"><Link href='/sign-up' className={`flex items-center gap-2 py-4  transition-colors duration-300 hover:text-indigo-400 focus:text-indigo-500 focus:outline-none focus-visible:outline-none lg:px-8 ${isScroll ? 'text-white' : 'text-black'}`}>Sign up</Link></li> :
                                    <button onClick={logOut} className={`flex items-center gap-2 py-4  transition-colors duration-300 hover:text-indigo-400 focus:text-indigo-500 focus:outline-none focus-visible:outline-none lg:px-8 ${isScroll ? 'text-white' : 'text-black'}`}>Sign-out</button>
                            }
                            {
                                session?.data?.user === 'admin' && <li className="flex items-stretch"><Link href='/admin' className={`flex items-center gap-2 py-4  transition-colors duration-300 hover:text-indigo-400 focus:text-indigo-500 focus:outline-none focus-visible:outline-none lg:px-8 ${isScroll ? 'text-white' : 'text-black'}`}>Admin</Link></li>
                            }
                        </ul>
                        {/*      <!-- Actions --> */}
                        <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
                            <div className="relative my-6 mr-10">
                                <input
                                    id="id-l16"
                                    type="text"
                                    name="id-l16"
                                    placeholder="Search here"

                                    className="relative w-full h-12 px-4 pr-12 transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute w-6 h-6 cursor-pointer top-3 right-4 stroke-slate-400 peer-disabled:cursor-not-allowed"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    aria-hidden="true"
                                    aria-labelledby="title-9 description-9"
                                    role="graphics-symbol"
                                >
                                    <title id="title-9">Search icon</title>
                                    <desc id="description-9">Icon description here</desc>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </div>
                            <Link
                                href="/cart"
                                title='Cart'
                                className="relative inline-flex h-10 w-10 mx-10 items-center justify-center rounded-full text-lg text-emerald-500"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                </svg>

                                <span className="absolute -right-1.5 -top-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white">{cart.length}<span className="sr-only"> new emails </span>
                                </span>
                            </Link>
                            <button
                                onClick={toggleMenu}

                                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                            >
                                <Image src={session?.data?.user?.image} width={40} height={40} alt='' className='rounded-full' />
                                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
                                    <span className="sr-only"> 7 new emails </span>
                                </span>
                            </button>

                        </div>
                    </nav>
                    <div className={`${isOpen ? "z[-999] bg-slate-700 absolute top-24 overflow-hidden py-10 text-white right-0 rounded w-[20vw] h-[40vh] transition-all duration-500 ease-in" : "z-[-999] bg-slate-700 absolute top-24  text-white right-0 rounded overflow-hidden w-[20vw] h-[0vh] transition-all duration-500 ease-in" }`}>
                       
                        <li className='px-4'><Link href='/order-history'>Order History</Link></li>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Navbar;