import Image from 'next/image';
import React from 'react';
import icon from '../assets/Services.svg'
import icon2 from '../assets/Services1.svg'
import icon3 from '../assets/Services2.svg'

const Delevary = () => {
    return (
        <div className='flex gap-5 my-36 w-full justify-between'>
             <div className="overflow-hidden w-full flex flex-col justify-center items-center rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure>
          <Image src={icon3} width={220} height={220} alt=''/>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">
            FREE AND FAST DELIVERY
            </h3>
            <p className="text-sm text-slate-400"> Free delivery for all orders over $140</p>
          </header>
        </div>
      </div> <div className="overflow-hidden flex flex-col justify-center items-center  w-full rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure>
        <Image src={icon2} width={220} height={220} alt=''/>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">
            MONEY BACK GUARANTEE
            </h3>
            <p className="text-sm text-slate-400">We reurn money within 30 days </p>
          </header>
        </div>
      </div> <div className="overflow-hidden  w-full flex flex-col justify-center items-center rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure>
        <Image src={icon} width={220} height={220} alt=''/>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">
            24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-sm text-slate-400">Friendly 24/7 customer support</p>
          </header>
        </div>
      </div>
        </div>
    );
};

export default Delevary;