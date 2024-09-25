"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useCart from './useCart';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Details = ({ data }) => {
    const session = useSession()
    const [cart, refetch] = useCart();
    const roter = useRouter()
    const [date, setDate ]= useState(new Date())
    const [count, setCount] = useState(1);
    const { img, name, price, stock, category,_id } = data;
  
    const plus = () => {
        count < stock ? setCount(count + 1) : setCount(stock)
    }
    const minus = () => {
        count > 1 ? setCount(count - 1) : setCount(1)
    }
    const amount = count * price;

   
    const addTocart = async (selectedId) => {
        const exsist = cart.find(items=> items.name === selectedId.name);
        const user = session?.data?.user
    if(!user){
        Swal.fire({
            position: "top-center",
            icon: "warning",
            title: `Login Plase`,
            showConfirmButton: false,
            timer: 2500
        })
        roter.push('/login')
    }
    if(!exsist){
        const carts = {
            email: session?.data?.user?.email,
            name,
            price,
            img,
            amount: amount,
            count:count,
            date: date.toDateString()
        };
       
           
        const res = await axios.post(`/api/add-to-cart`, carts);
       
        const resp = await axios.post(`/api/history`, carts);
       

        if (res.status === 201) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${name} added`,
                showConfirmButton: false,
                timer: 2500
            });
            refetch();
        }
        
    }else{
        Swal.fire({
            position: "top-center",
            icon: "warning",
            title: `${name} Alredy added`,
            showConfirmButton: false,
            timer: 2500
        })
        
    }   
        
        
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <Image src={img} width={500} height={500} alt='' />
            </figure>
            <div className=" flex flex-col mt-10 mx-10">
                <h3 className='text-[1.5vw] border-b-2 border-black my-6'>{name}</h3>
                <p className='text-[1vw] '>{category}</p>
                <p className='text-[1.5vw] mb-10'>${price}.00</p>
                <div className='flex justify-between border-b-2 border-black pb-4'>
                    <span className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>

                        Fast Delevery
                    </span>
                    <span className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>

                        Return Delivery
                    </span>
                    <span className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>

                        1 Year Warrenty
                    </span>

                </div>


                <div className='flex gap-5  mt-7'>
                    <span className='flex'><button onClick={minus} className='bg-green-700  text-white p-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    </button>
                        <h2 className='text-[2rem] px-10 border border-green-700'>{count}</h2>
                        <button onClick={plus} className='bg-green-700  text-white p-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        </button></span>
                    <button onClick={()=>addTocart(data)} className='bg-green-700 flex gap-4 justify-center  text-white p-4 w-full'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg></span> Add To Cart
                    </button>
                    <button className='bg-green-700  text-white p-4 '> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    </button>

                </div>

                
                <Link href='/product' className='bg-green-600 flex gap-4 justify-center  text-white p-4 mt-10 w-[50%]'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</span> Return To Shop
                    </Link>
            </div>

        </div>
    );
};

export default Details;