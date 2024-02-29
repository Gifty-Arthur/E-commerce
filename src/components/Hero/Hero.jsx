import React from 'react';
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";

const ImageList =[
    {
        id: 1,
        img: Image1,
        tittle: "up to 50% off on all Men's Wear",
        description: 
        "Enjoy unbeatable savings with up to 50% off on all men's wear! Elevate your style without breaking the bank, with discounts on a wide range of clothing items and accessories. From timeless classics to contemporary trends, shop now and refresh your wardrobe for less!"
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's wear",
        description:"Revamp your wardrobe with 30% off on all women's wear! Discover an array of stylish options, from casual chic to elegant ensembles, and enjoy incredible savings on every purchase. Elevate your look with trendy outfits and timeless pieces while enjoying unbeatable discounts. Shop now and indulge in fashion-forward savings!"

    },

    {
        id:3,
        img: Image3,
        title: "70% off on all product sale",
        description: 
        "Unlock unbeatable savings with a colossal 70% off on our entire product range! From fashion essentials to home decor, enjoy jaw-dropping discounts on every purchase. Explore a plethora of options and indulge in premium quality products at irresistible prices. Don't miss out – shop now and elevate your savings game!"
    }
]
const Hero = () => {
  return (
    <div className='relative overflow-hidden 
    min-h-1[650px] bg-gray-100 flex justify-center
    items-center dark:bg-gray-950 dark:text3-white
    sduration-200'>
        {/*background pattern*/}
        <div className='h-[700px] w-[700px] bg-primary/40
        absolute -top-1/2 right-0 rounded-3xl rotate-45
        -z-9' >

        </div>
        {/*hero section*/}
       

        <div className='container pb-8 sm:pb-0'>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/*text content section*/}
                    <div
                    className='flex flex-col justify-center gap-4pt-12
                    sm:pt-0 text-center sm:text-left order-2 sm:order-1
                    relative z-10'
                    >
                        <h1 className='text-5xl sm:text-6xl
                        lg:text-7xl font-bold'>
                            Your best Dresses    
                        </h1>
                        <p className='text-sm'>
                           
                        Dress, a versatile garment, transcends mere fabric and stitches to reflect individual style and expression. 
                        </p>
                        <div>
                            <button
                            className='bg-gradient-to-r from-primary
                            to-secondary hover:scale-105 duration-200
                            text-white py-2 px-4 rounded-full'
                            >
                                order Now
                            </button>
                        </div>
                    </div>
                    {/*image section*/}
                    <div className='order-1 sm:order-2'>
                        <div className='relative-z-20' > 
                            <img src ={Image1} alt=""
                            className='w-[200px] h-[400px] sm:h-
                            [450px] sm:w-[450px] sm:scale-125
                            objesct-contain mx-auto' />

                        </div>
                    </div>
                    
                    
                    
                       
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero