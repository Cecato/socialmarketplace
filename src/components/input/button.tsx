import { useState } from 'react';

type Props = {
    onClick: any;
}

export default function Button({ onClick }: Props){
    return(
        <button 
            className='w-full border border-white bg-green-500 rounded-md p-2 text-white
            font-bold'
            onClick={onClick}
        >
            Adicionar ao carrinho
        </button>
    )
}