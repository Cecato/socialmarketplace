import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
}

export default function Navbar({ title }: Props){

    return(
        <nav className="w-full absolute p-2 top-0 z-10 bg-black flex justify-between">
            <Link
                href="/"
                className=""
            >
                <h1 className="text-white text-lg font-semibold">
                    { title }
                </h1>
            </Link>
            <Link href={''}>
                <Image 
                    src="/images/whatsapp.png" 
                    alt="wahtsapp" 
                    className="w-8 h-8"
                    width={100}
                    height={100}
                />
            </Link>
        </nav>
    )
}