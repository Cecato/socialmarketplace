import { Children } from "react";

type Props = {
    title: string;
}

export default function Navbar({ title }: Props){

    return(
        <>
            <nav className="p-2 sticky top-0 z-10 bg-gray-800">
                <div className="w-full mx-auto sm:px-5 flex justify-between ">
                    <h1 className="text-white text-4xl">
                        { title }
                    </h1>
                </div>
            </nav>
        </>
    )
}