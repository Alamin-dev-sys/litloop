"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import img from '../assets/Frame 858.png'


const Contact = () => {
    const [loading, setLoadin] = useState(false)
    return (
        <section>
            <div className="my-10">
                <div className="grid w-full h-[70vh]  grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                    <div className="col-span-4">
                        <div className="overflow-hidden w-full h-full p-20 rounded bg-white text-slate-500 shadow-md shadow-slate-200 flex flex-col">

                            <div className='border-b-2 border-amber-950 pb-10'>
                                <span className='flex items-center gap-8 my-6 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <rect width="40" height="40" rx="20" fill="#DB4444" />
                                        <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h3 className='font-semibold text-xl text-amber-950'>Call To Us</h3>
                                </span>
                                <p className='font-semibold my-6 text-amber-950'>We are available 24/7, 7 days a week.</p>
                                <p className='font-semibold my-3 text-amber-950'>Phone: +8801611112222</p>
                            </div>

                            
                            <div >
                                <span className='flex items-center my-6 gap-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect width="40" height="40" rx="20" fill="#DB4444"/>
<path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                    <h3 className='font-semibold text-xl text-amber-950'>Write To US</h3>
                                </span>
                                <p className='font-semibold my-6 text-amber-950'>Fill out our form and we will contact you within 24 hours.</p>
                                <p className='font-semibold my-3 text-amber-950'>Emails: customer@exclusive.com</p>
                                <p className='font-semibold my-3 text-amber-950'>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 lg:col-span-8">
                        <div className='bg-white shadow-md shadow-slate-200 p-3 w-full h-full'>
                            <form className=''>
                                <div className='flex w-full gap-4 '>
                                    <div className="relative w-full my-6">
                                        <input
                                            id="id-l01"
                                            type="text"
                                            name="id-l01"
                                            placeholder="your name"
                                            className="peer relative h-16 bg-indigo-100 text-black w-full rounded border border-slate-200 px-4  placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                        />
                                        <label
                                            htmlFor="id-l01"
                                            className="absolute left-2 -top-2 z-[1] cursor-text bg-indigo-100 px-2 text-xs text-black transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-indigo-100 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-black peer-invalid:peer-focus:text-black peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                        >
                                            Your name
                                        </label>
                                    </div>

                                    <div className="relative w-full my-6">
                                        <input
                                            id="id-l01"
                                            type="text"
                                            name="id-l01"
                                            placeholder="your name"
                                            className="peer relative h-16 bg-indigo-100 text-black w-full rounded border border-slate-200 px-4  placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                        />
                                        <label
                                            htmlFor="id-l01"
                                            className="absolute left-2 -top-2 z-[1] cursor-text bg-indigo-100 px-2 text-xs text-black transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-indigo-100 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-black peer-invalid:peer-focus:text-black peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                        >
                                            Your name
                                        </label>
                                    </div>

                                    <div className="relative w-full my-6">
                                        <input
                                            id="id-l01"
                                            type="text"
                                            name="id-l01"
                                            placeholder="your name"
                                            className="peer relative h-16 bg-indigo-100 text-black w-full rounded border border-slate-200 px-4  placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                        />
                                        <label
                                            htmlFor="id-l01"
                                            className="absolute left-2 -top-2 z-[1] cursor-text bg-indigo-100 px-2 text-xs text-black transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-indigo-100 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-black peer-invalid:peer-focus:text-black peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                        >
                                            Your name
                                        </label>
                                    </div>
                                </div>
                                <div className="relative w-full h-full">
                                    <textarea
                                        id="id-l07"
                                        type="text"
                                        name="id-l07"
                                        required
                                        placeholder="Write your message"
                                        className="peer relative w-full h-96 rounded  border-slate-200 p-4 bg-indigo-100 text-black placeholder-transparent outline-none transition-all autofill:bg-indigo-100 invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                    ></textarea>
                                    <label
                                        for="id-l07"
                                        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-black transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-indigo-100 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-black peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                    >
                                        Write your message
                                    </label>
                                   
                                </div>
                                <div className='flex justify-end my-6'>
                                    <input type="submit" value={loading ? '' : 'SEND MESSAGE'} className='btn bg-[#DB4444] h-10  text-white ' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;