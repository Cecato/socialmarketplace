import React, { useEffect } from "react";


type Props = {
    children: React.ReactNode;
}

export default function Bar({children}:Props){

    return(
        <>
        <div className="w-full flex m-auto items-center justify-center mt-10"
            style={{ display: 'flex', flexWrap: 'wrap' }}>
            {React.Children.map(children, (child, index) => (
                <div key={index} className="w-1/5 p-4">
                    {child}
                </div>
            ))}

        </div>
        </>
    )
}