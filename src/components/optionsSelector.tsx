'use client';
import { useEffect, useState } from "react";

type Props = {
    textOption: string;
    onClick: any;
    data: any;
    selected?: any;
}

export default function OptionSelector({ textOption, onClick, data, selected }: Props){
    const [isSelected, setIsSelected] = useState('border-gray-200');
    
    useEffect(()=>{
        if(selected === data){
            setIsSelected('border-gray-700');
        }
        else{
            setIsSelected('border-gray-200');
        }

    }, [selected])

    return(
        <button 
            className={`border p-1 rounded-md ${isSelected}`}
            onClick={() => onClick(data)}
        >
            <p className="text-sm">
                {textOption}
            </p>
        </button>
    )
}