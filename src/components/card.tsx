'use client'
import Image from 'next/image';
import {useState} from 'react';

type Props = {
    imgSrc: string;
    alt: string;
    title: string;
    price: string;
}

export default function Card({imgSrc, alt, title, price}: Props){

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    return(
        <>
            <div className='w-64 p-4 border border-gray-300 shadow-md m-3'>
                <div className='w-full h-48 max-h-48 flex items-center justify-center'>
                    <div className={`flex items-center justify-center w-48 h-full transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-100' : 'opacity-100'}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                    <Image
                        src={imgSrc}
                        alt={alt}
                        width={170}
                        height={170}
                    ></Image>
                    </div>
                </div>
                <div className='text-center items-center justify-center m-4'>
                    <h1 className='text-2xl'>{title}</h1>
                </div>
                <div className='text-sm text-gray-500'>
                    <h2>A partir de:</h2>
                </div>
                <div className='flex items-center'>
                    <h2 className='text-xl'>R$</h2>
                    <h1 className='text-3xl text-black'>{price}</h1>
                </div>
                <div className='text-sm text-gray-500'>
                    <h2>Á vista no PIX</h2>
                </div>
            </div>
        </>
    )
}