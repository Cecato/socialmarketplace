'use client'
import Image from 'next/image';
import {useState} from 'react';

type Props = {
    imgSrc: string;
    alt: string;
    title: string;
    text: string;
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
                <div className='w-30 flex items-center justify-center pb-8 '>
                    <div className={`transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-70' : 'opacity-90'}`}
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
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <h2>{price}</h2>
                </div>
            </div>
        </>
    )
}