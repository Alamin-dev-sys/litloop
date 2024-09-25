import Image from 'next/image';
import React from 'react';

const NewProduct = () => {
    const product = [
        
        {
            category:
                "Men's Sneaker",
            name:
                "ULTRABOOST 22 SHOES",
            seller:
                "Addidas",
            price:
                420,
            stock:
                20,
            ratings:
                4,
            ratingsCount:
                3725,
            img:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g…",
            shipping:
                1,
            quantity:
                0
        },
        {
            category:
                "Men's Sneaker",
            name:
                "ULTRABOOST 22 SHOES",
            seller:
                "Addidas",
            price:
                420,
            stock:
                20,
            ratings:
                4,
            ratingsCount:
                3725,
            img:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g…",
            shipping:
                1,
            quantity:
                0
        },
        {
            category:
                "Men's Sneaker",
            name:
                "ULTRABOOST 22 SHOES",
            seller:
                "Addidas",
            price:
                420,
            stock:
                20,
            ratings:
                4,
            ratingsCount:
                3725,
            img:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g…",
            shipping:
                1,
            quantity:
                0
        },
        {
            category:
                "Men's Sneaker",
            name:
                "ULTRABOOST 22 SHOES",
            seller:
                "Addidas",
            price:
                420,
            stock:
                20,
            ratings:
                4,
            ratingsCount:
                3725,
            img:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g…",
            shipping:
                1,
            quantity:
                0
        },
        {
            category:
                "Men's Sneaker",
            name:
                "ULTRABOOST 22 SHOES",
            seller:
                "Addidas",
            price:
                420,
            stock:
                20,
            ratings:
                4,
            ratingsCount:
                3725,
            img:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g…",
            shipping:
                1,
            quantity:
                0
        },
        {
            category:
                "Men's Sneaker",
            name:
                "ULTRABOOST 22 SHOES",
            seller:
                "Addidas",
            price:
                420,
            stock:
                20,
            ratings:
                4,
            ratingsCount:
                3725,
            img:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g…",
            shipping:
                1,
            quantity:
                0
        },
    ];

    return (
        <section className='container mx-auto py-20 '>
            <h3 className='text-4xl font-semibold'>Explore Our Products</h3>
            <div className='grid grid-cols-3 py-10 gap-5 '>

                {
                    product.map((item, index) => <div key={index} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                        {/*  <!-- Image --> */}
                        <figure>
                            <Image src={item.img} width={200} height={200} alt='' />
                        </figure>
                        {/*  <!-- Body--> */}
                        <div className="p-6">
                            <header className="mb-4">
                                <h3 className="text-xl font-medium text-slate-700">
                                    Greek breakfast
                                </h3>
                                <p className=" text-slate-400"> $8.99</p>
                            </header>

                        </div>
                        {/*  <!-- Action base sized basic button --> */}
                        <div className="flex justify-end p-6 pt-0">
                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300  hover:visible focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                <span>Order now!</span>
                            </button>
                        </div>
                    </div>)
                }
            </div>
            {/*<!-- Component: Large primary basic button --> */}
            <div className='flex justify-center w-[25%] mx-auto'>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>View All Products</span>
            </button>
            </div>
        </section>
    );
};

export default NewProduct;