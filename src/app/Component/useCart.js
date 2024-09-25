"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';


const useCart = () => {
    const session = useSession();
    const {refetch,data: cart=[]}= useQuery({
        queryKey:['cart'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:3000/api/get-cart/${session?.data?.user?.email}`)
            const data = res.json();
            return data
        }
    });
    return [cart,refetch]
};
export const useUrl = () => {
    const session = useSession();
    const {refetch,data}= useQuery({
        queryKey:['url'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:3000/api/get-payment-history/${session?.data?.user?.email}`)
            const data = res.json();
            return data
        }
    });
    return [data,refetch]
};

export default useCart;