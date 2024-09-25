import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Product = () => {

    const product = [
        {

            "category": "Men's Sneaker",
            "name": "KAPTIR 2.0 SHOES",
            "seller": "Addidas",
            "price": 138,
            "stock": 19,
            "ratings": 3,
            "ratingsCount": 4372,
            "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
            "shipping": 19,
            "quantity": 0
        },
        ,
        {

            "category": "Men's Boot",
            "name": "TERREX FREE HIKER GORE-TEX HIKING SHOES",
            "seller": "Addidas",
            "price": 132,
            "stock": 1,
            "ratings": 3,
            "ratingsCount": 128,
            "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12cf12ac1c8e484ea487ad6400ee3444_9366/Terrex_Free_Hiker_Gore-Tex_Hiking_Shoes_Black_GZ0355_01_standard.jpg",
            "shipping": 13,
            "quantity": 0
        }, {

            "category": "Bag",
            "name": "3-Stripes Backpack 2.0",
            "seller": "Addidas",
            "price": 74,
            "stock": 7,
            "ratings": 5,
            "ratingsCount": 365,
            "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ba79ccb861fd4fd49e3aac9f006a6407_9366/3-Stripes_Backpack_2.0_Grey_EX6735_01_standard.jpg",
            "shipping": 23,
            "quantity": 0
        }, {

            "category": "Cap",
            "name": "Superlite Hat",
            "seller": "Addidas",
            "price": 10,
            "stock": 10,
            "ratings": 5,
            "ratingsCount": 47,
            "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/272d5d9cb7b74415a6c9ac8e015a4ccc_9366/Superlite_Hat_Black_EX7048_01_standard.jpg",
            "shipping": 24,
            "quantity": 0
        }, {
            "id": "be7a4d0a-c681-416c-ab8d-f9be28223f4e",
            "category": "Earphones",
            "name": "adidas Z.N.E. 01 True Wireless Earbuds",
            "seller": "Addidas",
            "price": 142,
            "stock": 11,
            "ratings": 5,
            "ratingsCount": 22,
            "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg",
            "shipping": 23,
            "quantity": 0
        }
    ]



    return (
        <section className='container mx-auto py-20 border-b-2'>
            <div className='flex justify-between w-[50%] items-center'>
                <h3 className='text-4xl font-semibold'>Flash Sales</h3>

            </div>

            <div className='grid grid-cols-5 py-10 gap-5 '>

                {
                    product.map((item, index) =>
                        <div className="card glass w-full" key={index}>
                            <figure>
                                <img
                                    src={item.img}
                                    alt="car!" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>How to park your car at your garage?</p>
                                <div className="card-actions justify-end">
                                    <Link href='/product' className="btn btn-primary">Explore</Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            {/*<!-- Component: Large primary basic button --> */}
            <div className='flex justify-center w-[25%] mx-auto'>
                <Link href='/product' className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>View All Products</span>
                </Link>
            </div>
        </section>
    );
};

export default Product;