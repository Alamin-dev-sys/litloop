import { getAllproducts } from '@/lib/models/query/getAllProducts';
import Image from 'next/image';
import React from 'react';
import Card from '../Component/Card';
import Category from '../Component/Category';

const page = async() => {
    const product = await getAllproducts();
    
    
   
    
    
    return (
        <div className=' '>
          <Category product={product}/>
         
        </div>
    );
};

export default page;