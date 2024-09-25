"use client"
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from './Card';
import 'react-tabs/style/react-tabs.css';

const Category = ({product}) => {
    const [tabIndex, setTabIndex] = useState(0);
    const cap = product.filter(item=> item.category === "Cap");
    const MenSneaker = product.filter(item=> item.category === "Men's Sneaker");
    const  Boot = product.filter(item=> item.category === "Men's Boot");
    const Bottle = product.filter(item=> item.category === "Bottle");
    const Earphones = product.filter(item=> item.category === "Earphones");
    const Bag = product.filter(item=> item.category === "Bag");
    return (
       
            <Tabs className='w-[80vw]' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        
        <TabList className='w-full text-3xl  flex justify-between items-center my-10  border-b-2'>
          <Tab>ALL</Tab>
          <Tab>Men&#39;s Boot</Tab>
          <Tab>Men&#39;s Sneaker</Tab>
          <Tab>Bottle</Tab>
          <Tab>Cap</Tab>
          <Tab>Earphones</Tab>
          <Tab>Bag</Tab>
        </TabList>
       
        <TabPanel>
        <div className='grid grid-cols-3 gap-5 my-20'>
            {
              product.map((item)=><Card key={item._id} item={item}/>) 
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-3 gap-5 my-20'>
            {
               Boot.map((item)=><Card key={item._id} item={item}/>) 
            }
            </div>
        </TabPanel>
        <TabPanel>
        
            <div className='grid grid-cols-3 gap-5 my-20'>
            {
               MenSneaker.map((item)=><Card key={item._id} item={item}/>) 
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-3 gap-5 my-20'>
            {
               Bottle.map((item)=><Card key={item._id} item={item}/>) 
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-3 gap-5 my-20'>
            {
               cap.map((item)=><Card key={item._id} item={item}/>) 
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-3 gap-5 my-20'>
            {
               Earphones.map((item)=><Card key={item._id} item={item}/>) 
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-3 gap-5 my-20'>
            {
               Bag.map((item)=><Card key={item._id} item={item}/>) 
            }
            </div>
        </TabPanel>
      
      </Tabs>
     
    );
};

export default Category;