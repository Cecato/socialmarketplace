import React, { useEffect } from "react";


type Props = {
    children: React.ReactNode;
}

export default function Bar({children}:Props){

    return(
        <>
            <div className=" bg-clip-padding flex m-auto items-center justify-center mt-10">
                {children}
            </div>
        </>
    )
}