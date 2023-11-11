import Image from 'next/image';
import { useState } from 'react';

type Props = {
    onClick: any;
}

export default function Button({ onClick }: Props){
    return(
        <button 
            className='w-full border border-white bg-violet-500 rounded-md p-2 text-white
            font-bold flex justify-around items-center gap-2'
            onClick={onClick}
        >
            Comprar via Whatsapp
            <Image
                src={'/images/whatsapp.png'}
                width={100}
                height={100}
                alt='whatsapp'
                className='w-8 h-8'
            />
        </button>
    )
}