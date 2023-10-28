import { Children } from "react";

type Props = {
    title: string;
}

export default function Navbar({ title }: Props){

    return(
        <>
            <nav style={{backgroundColor: '#303030'}} className="p-2 sticky top-0 z-10 ">
                <div className="max-w-xl mx-auto sm:px-4 flex justify-between ">
                    <h1 className="text-white text-2xl">
                        { title }
                    </h1>
                </div>
            </nav>
        </>
    )
}