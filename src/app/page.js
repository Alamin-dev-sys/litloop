import React from 'react';
import Banner from './Component/Banner';
import Product from './Component/Product';
import CategoriesBrowseByCategory from './Component/CategoriesBrowseByCategory';
import Best from './Component/Best';
import Section from './Component/Section';
import NewProduct from './Component/NewProduct';
import NewArrival from './Component/NewArrival';
import Delevary from './Component/Delevary';
import CardComponent from './Component/Todays';
import { getAllproducts } from '@/lib/models/query/getAllProducts';
import { getAllpayment } from '@/lib/models/query/get-payment';

const page = async() => {
  const pay = await getAllpayment()
  console.log(pay,"pay");
  
  const product = await getAllproducts()
  const MenSneaker = product.filter(item=> item.category === "Men's Sneaker");
  return (
    <div className=''>
     <Banner  image={product}/>
     <Product product={product}/>
     
    
     <Section/>
    
     <NewArrival/>
     <Delevary/>
    
    
    </div>
  );
};

export default page;