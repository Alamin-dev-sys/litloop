import Image from 'next/image';
import React from 'react';
import img from '../assets/Frame 684.png'
import img2 from '../assets/Frame 685.png'
import img3 from '../assets/Frame 686.png'
import img4 from '../assets/Frame 687.png'
const NewArrival = () => {
    return (
        <section>
            <h1 className='text-4xl my-10 bg-indigo-300 w-[20%] p-5 font-semibold'>New Arrival</h1>
            <div className='flex justify-between gap-10'>
               <div className=' bg-black w-full'>
                <Image src={img} width={570} height={600} alt='' className='w-full h-full '/>
               </div>
               <div className='w-full grid grid-cols-2 gap-5'>
               <div className='w-full  bg-slate-700 col-span-2'>
               <Image src={img2} width={570} height={600} alt='' className='w-full h-full'/>
               </div>
               <div className='w-full  bg-zinc-700 col-span-1'>
               <Image src={img3} width={570} height={600} alt='' className='w-full h-full'/>
               </div>
               <div className='w-full  bg-zinc-700 col-span-1'>
               <Image src={img4} width={570} height={600} alt='' className='w-full h-full'/>
               </div>
               </div>
            </div>
        </section>
    );
};

export default NewArrival;