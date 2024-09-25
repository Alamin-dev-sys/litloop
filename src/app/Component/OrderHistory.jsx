"use client"

import { useSession } from "next-auth/react";
import useCart, { useUrl } from "./useCart";

const OrderHistory = () => {
    const session = useSession();
    const [data,refetch] = useUrl();
    const [cart] = useCart()
   const d = data?.map((item)=>item.image);
   console.log(d,"12");
   

   
    
   
    
    return (
        <div>
        
        </div>
    );
};

export default OrderHistory;