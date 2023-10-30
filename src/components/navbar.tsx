import { Children } from "react";

type Props = {
    title: string;
}

export default function Navbar({ title }: Props){

    return(
            <nav className="w-full absolute p-2 top-0 z-10 bg-gray-800">
                <div className="w-full mx-auto sm:px-5 flex justify-between ">
                    <h1 className="text-white text-lg">
                        { title }
                    </h1>
                </div>
            </nav>
    )
}