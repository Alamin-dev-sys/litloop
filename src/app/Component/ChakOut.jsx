"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import useCart from './useCart';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';


const ChakOut = () => {

    const [checked, setChecked] = useState(false)
   
    const roter = useRouter()
    const [cart, refetch] = useCart();
    const totals = cart.reduce((acc, item) => acc + item.amount, 0);
    const total = totals + 10;
    const ex = totals + 20;
    const session = useSession();
    
    
    
    const [value, setValue] = useState(total);
    const [dvc, setDvc] = useState(10);
    const [date, setDate] = useState(new Date());
  const handleChange = (e)=>{
    refetch()
    e.target.value === 'Express Delevary' ? setValue(ex)  : setValue(total);
    e.target.value === 'Express Delevary' ? setDvc(20)  : setDvc(10);
    console.log(value);
    
  }
   
  
    const hanleDelete = async () => {

        const resp = await fetch(`/api/delete-many/${session?.data?.user?.email}`, {
            method: 'DELETE'
        });
        console.log(resp, 'resp');

    }

    const handlePay = async (e) => {
        e.preventDefault();


        const product = cart.map(item => item.name);
        const image = cart.map(item => item.img);
        const quantity = cart.map(item => item.count);
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const address = formData.get('address');
        const town = formData.get('town');
        const phone = formData.get('phone');
        const method = formData.get('pay');
        const delevari = formData.get('select');
        const date = formData.get('date');
        const pay = {
            name: name,
            email: email,
            address: address,
            town: town,
            phone: phone,
            method: method,
            delevari: delevari,
            total: (delevari === 'Express Delevary' ? ex : total),
            product: product,
            quantity: quantity,
            image:image,
            date:date
           

        }

     
        const res = await axios.post(`http://localhost:3000/api/payment`, pay);

        if (method === 'cash on delevary' && res.status === 200) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Order Successful`,
                showConfirmButton: false,
                timer: 2500
            });
            hanleDelete();
            refetch()
            roter.push('/')
        } else if (method === 'bank') {
            roter.push('/bank')
        }

    }

    return (
        <form onSubmit={handlePay}>
            <div className="grid grid-cols-2 gap-5 lg:card-side bg-base-100 ">
                <div className='p-10 bg-white rounded shadow-md text-black text-xl shadow-slate-200'>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="name" className='text-xl px-2'>Name</label>
                        <input type="text" name="name" id="name" value={session?.data?.user?.name} className='w-full rounded px-3 h-14 bg-gray-300 border' required />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="email" className='text-xl px-2'>Email</label>
                        <input type="email" name="email" id="email" value={session?.data?.user?.email} className='w-full rounded px-3 h-14 bg-gray-300 border' required />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="name" className='text-xl px-2'>Phone Number</label>
                        <input type="text" name="phone" id="phone" className='w-full rounded h-14 bg-gray-300 border px-3' required />
                    </div>
                   
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="name" className='text-xl px-2'>Street Address</label>
                        <input type="text" name="address" id="name" className='w-full rounded h-14 bg-gray-300 border px-3' required />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="name" className='text-xl px-2'>Town/City</label>
                        <input type="text" name="town" id="name" className='w-full rounded h-14 bg-gray-300 border px-3' required />
                    </div>

                </div>
                <div>
                    <div className="overflow-hidden bg-white rounded p-10 shadow-md text-black text-xl shadow-slate-200">
                        <div className="p-6">
                            <div className='flex justify-between mb-2'>
                                <p>Total Product :</p>
                                <p> {cart.length}</p>
                            </div>
                            <div className="divider"></div>
                            <div className='flex justify-between mb-4'>
                                <p>Sub Total :</p>
                                <p> ${totals}</p>
                            </div>
                          
                           
                            <div className='flex justify-between mb-6'>
                                <div className='flex items-center gap-3'><label htmlFor="sl">Delevary</label>
                                <select id='sl' name='select' onChange={handleChange} className="select select-primary w-full max-w-xs">
                                    <option value='Normal Delevary' defaultValue='Normal Delevary'>Normal Delevary &nbsp; (1-3 days) </option>
                                    <option value='Express Delevary'>Express Delevary &nbsp; (24 hours) </option>
                                </select></div>
                                <p> ${dvc}</p>
                            </div>
                            <div className='flex justify-between mb-6'>
                                <p>Total:</p>
                                <p> ${value}</p>
                            </div>
                            <input type="text" name="date" id="date" value={date.toDateString()} className='w-full rounded h-1 bg-gray-300 border px-3 invisible' required />
                            <div className="flex my-5">
                                <label className="label cursor-pointer">
                                    <input type="radio" name="pay" className="radio checked:bg-red-500" value='bank' defaultChecked />
                                    <span className="text-xl px-4">Bank</span>
                                </label>
                            </div>
                            <div className="flex my-5">
                                <label className="label cursor-pointer">

                                    <input type="radio" name="pay" className="radio checked:bg-red-500" value='cash on delevary' defaultChecked />
                                    <span className="text-xl px-4">Cash On Delevary</span>
                                </label>
                            </div>


                            <input type="submit" value="Place Order" className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none" />

                        </div>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default ChakOut;