"use client"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import img from '../assets/sign.png'
import icon from '../assets/Icon-Google.svg'
import { signIn, useSession } from 'next-auth/react';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const session = useSession()
    const router = useRouter()
    const loginHandler = async (e) => {
        e.preventDefault();
       
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email')
            const password = formData.get('password');
            const res = await signIn('credentials',{
                email,
                password,
                redirect:false
            });

            if (res.ok === true) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Success",
                    showConfirmButton: false,
                    timer: 2500
                });
                router.push('/')
            }

        
    }
    const google = async (provider)=>{
        const resp = await signIn(provider);
    }
    if (session.status === 'authenticated') {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "authentication Successful",
            showConfirmButton: false,
            timer: 2500
        });
        router.push('/')
    }
    return (
        <div className='w-full h-full p-5'>
            <div className="flex w-full h-full  flex-col overflow-hidden    text-slate-500 sm:flex-row">
                {/*  <!-- Image --> */}
                <figure className="flex-1">
                    <div className='flex items-center h-full'>
                        <Image src={img} width={500} height={500} className='w-full h-full' alt=''/>
                    </div>

                </figure>
                {/*  <!-- Body--> */}
                <div className="flex-1 p-6 px-7 sm:mx-6 sm:px-0 border  custom-shad rounded-md ">
                    <header className="flex gap-4 mb-10 px-5">
                        <div>
                            <h3 className="text-4xl font-semibold text-slate-700">
                               Login To Litloop
                            </h3>
                            <p className="text-xl py-3 text-slate-400">  Welcome !</p>
                        </div>
                    </header>
                    <div className='px-7'>
                        <form onSubmit={loginHandler}>
                            
                            <div className="relative my-6">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your name"
                                    className="peer relative h-12 w-full rounded border border-black px-4 pl-12 text-black placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-black focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-black transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-slate-900 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Email Address
                                </label>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed">
                                    <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
                                </svg>

                            </div>


                            <div className="relative my-6">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    placeholder="Password"
                                    className="peer relative h-12 w-full rounded border border-black px-4 pl-12 text-black placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-black focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-black transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-black peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Password
                                </label>
                                {showPassword ? (
                                    <svg
                                        onClick={() => setShowPassword(!showPassword)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-3 right-4 h-6 w-6 cursor-pointer stroke-black peer-disabled:cursor-not-allowed"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        aria-labelledby="title-8 description-8"
                                        role="graphics-symbol"
                                    >
                                        <title id="title-8">Check mark icon</title>
                                        <desc id="description-8">Icon description here</desc>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        onClick={() => setShowPassword(!showPassword)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-3 right-4 h-6 w-6 cursor-pointer stroke-black peer-disabled:cursor-not-allowed"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        aria-labelledby="title-8d description-8d"
                                        role="graphics-symbol"
                                    >
                                        <title id="title-8">Check mark icon</title>
                                        <desc id="description-8">Icon description here</desc>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                        />
                                    </svg>
                                )}

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="absolute top-3 left-4 h-6 w-6 stroke-black peer-disabled:cursor-not-allowed">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                                </svg>
                            </div>
                            <input type='submit' value='Login' className="h-[56px] cursor-pointer inline-flex    w-full items-center justify-center  gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-gradient-to-r from-emerald-600 to-emerald-800 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none" />
                        </form>

                        <div className="divider">OR</div>
                        <button onClick={()=>google('google')} className='btn  w-full h-[56px]'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_860_3336)">
                                    <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4" />
                                    <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853" />
                                    <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04" />
                                    <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_860_3336">
                                        <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>Sign up with Google
                        </button>

                        <p className='text-sm my-20 text-center text-primary'>Don&#39; Have Any Account ? <Link href='/sign-up'>Sign-up</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;