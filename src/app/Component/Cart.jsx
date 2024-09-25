"use client"
import React from 'react';
import useCart from './useCart';
import Image from 'next/image';

import Link from 'next/link';
import Swal from 'sweetalert2';



const Cart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((acc, item) => acc + item.amount, 0);
   
    console.log(total);
    const handleDelete = async (id) => {
   
        const res = await fetch(`/api/delete-cart/${id}`, {
            method: 'DELETE'
        });
        console.log(res,"res");
        
        const delet = await res.json();
    console.log(delet);
    if (delet?.deletedCount > 0) {
        refetch()
     }
        
    }
const permanetDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't To Delete This ?!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            handleDelete(id)
            Swal.fire({
                title: "Deleted!",
                text: "Your Booking has been deleted.",
                icon: "success"
            });
        }
    });
    
}
    return (
        <section>
            {
                cart.length > 0 ? <section>
                    <div className="container px-6 m-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <div className="col-span-4 lg:col-span-9"><div>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr className='bg-gray-200'>
                                                <th className='text-xl text-black'>
                                                    No.
                                                </th>
                                                <th className='text-xl text-black'>Product</th>
                                                <th className='text-xl text-black'>Price</th>
                                                <th className='text-xl text-black'>Quantity</th>
                                                <th className='text-xl text-black'>Sub Total</th>
                                                <th className='text-xl text-black'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart.map((item, index) => <tr key={index}>
                                                    <th className='text-xl text-black'>
                                                        {index + 1}
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center gap-3 ">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <Image
                                                                    width={100}
                                                                    height={100}
                                                                        src={item.img}
                                                                        alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className=" text-xl text-black">{item.name}</div>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td >
                                                        <div className=' h-12 w-12 flex items-center justify-center text-xl text-black'> ${item.price}</div>

                                                    </td>
                                                    <td className=''>
                                                        <div className='border h-12 w-10 flex items-center justify-center text-xl text-black'>{item.count}</div></td>
                                                    <td className='flex items-center '>
                                                        <div className=' h-12 w-12 text-xl text-black'>${item.amount}</div>
                                                    </td>
                                                    <th>
                                                        <button onClick={()=>permanetDelete(item._id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                                        </svg>
                                                        </button>
                                                    </th>
                                                </tr>)
                                            }


                                        </tbody>

                                    </table>
                                </div>
                            </div> </div>
                            <div className="col-span-3">
                                <div className="overflow-hidden bg-white rounded shadow-md text-black text-xl shadow-slate-200">
                                    <div className="p-6">
                                        <div className='flex justify-between mb-2'>
                                            <p>Total Product :</p>
                                            <p> {cart.length}</p>
                                        </div>
                                        <div className="divider"></div>
                                        <div className='flex justify-between mb-4'>
                                            <p>Sub Total :</p>
                                            <p> ${total}</p>
                                        </div>
                                       
                                        {/* <div className='flex justify-between mb-6'>
                                            <p>Total:</p>
                                            <p> ${}</p>
                                        </div> */}

                                        <Link href='/cheak-out' className="inline-flex items-center w-full justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                            <span>Procees to checkout</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> : <h3 className='text-[5vw] text-center'>NO Order Availavle</h3>
            }
        </section>
    );
};

export default Cart;
