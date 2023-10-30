import { useState } from 'react';

export default function CardOptions( ){


    
    return(
        <>
        <div className="w-2/4 p-4 border border-gray-300 shadow-md m-3">
            <div className="mb-8 ml-7">
                <h1 className="text-2xl font-bold font-sans">Selecione:</h1>
            </div>

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <label>
                    <input
                        type="radio"
                        value="curtidas"
                    />
                    Curtidas
                    </label>
                    <label>
                    <input
                        type="radio"
                        value="seguidores"
                    />
                    Seguidores
                    </label>
                </div>
            </div>
        </div>
        </>
    )
}