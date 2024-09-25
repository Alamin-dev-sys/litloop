import Details from '@/app/Component/Details';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const page = async ({params}) => {
    const res = await fetch(`http://localhost:3000/api/get-details/${params.id}`);
    const data = await res.json();
    
    return (
        <Details data={data}/>
    );
};

export default page;