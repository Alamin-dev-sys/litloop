"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';



export const Url = async () => {
    const session = useSession();
    const res = await fetch(`/api/get-payment-history/${session?.data?.user?.email}`)
    const data = await res.json();
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='bg-gray-200'>

                        <th className='text-xl text-black'>Customer Name</th>
                        <th className='text-xl text-black'>customer Email</th>
                        <th className='text-xl text-black'>Amount of pay</th>
                        <th className='text-xl text-black'>Method</th>
                        <th className='text-xl text-black'>Delivary</th>
                        <th className='text-xl text-black'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => <tr key={index}>
                            <th className='text-xl text-black'>
                                {item.name}
                            </th>

                            <td >
                                <div className=' h-12  flex  text-xl text-black'>{item.email}</div>

                            </td>
                            <td className=''>
                                <div className=' h-12 flex  text-xl text-black'>${item.total}</div></td>
                            <td className='flex items-center '>
                                <div className=' h-12  text-xl text-black'>{item.method}</div>
                            </td>
                          <td>
                            {item.delevari}
                          </td>
                          <td>
                            {item.date}
                          </td>

                        </tr>)
                    }


                </tbody>

            </table>
           <div className='flex'>
           {
                data.map((item,index)=>item.image.map((it,indx)=><div key={indx}>
                    <Image  src={it} width={100} height={100} alt=''/>
                   
                </div>))
            }
            {
                data.map((item,index)=>item.product.map((it,indx)=><div key={indx}>
                     <li>{it}</li>
                   
                </div>))
            }
           </div>
        </div>
    );
};


 










