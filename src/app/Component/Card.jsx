"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const Card = ({ item }) => {
  const router = useRouter()
  const { name, price, img, _id } = item
  { `/product-details/${_id}` }
  const detaitl = () => {
    router.push(`/product-details/${_id}`)
  }

  return (
    <div onClick={detaitl} className="card glass w-full">
      <figure>
        <Image
          width={500}
          height={500}
          src={img}
          alt="car!" />
      </figure>
      <div className='flex justify-between items-center px-3'>
        <div className=" flex justify-between w-full border  rounded-full">
          <h2 className="card-title pl-3">{name}</h2>
          <p className='border py-3 px-5 text-white bg-green-600 rounded-full'>${price}</p>
        </div>
        <div className='p-[2rem] text-green-700'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
</svg>
</div>
      </div>
    </div>
  );
};

export default Card;