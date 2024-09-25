import Image from 'next/image';
import React from 'react';
import img from '../assets/Frame 600.png';

const Section = () => {
    return (
        <section className='relative w-full my-20 bg-slate-900'>
           <Image src={img} width={1120} height={500} alt='' className='relative w-full h-full aspect-auto '/>
           <button className="inline-flex absolute top-[60%] left-16 items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-[#00FF66] hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Large button</span>
      </button>
        </section>
    );
};

export default Section;