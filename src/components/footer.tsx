import Image from "next/image";
import Link from "next/link";

export default function Footer(){

    return(
        <footer className="w-full h-[100px] bg-violet-400 flex flex-col justify-between
        items-center p-1">
            <div className="flex flex-col justify-center items-center text-white">
                Contatos:
                <Link
                    href={'/'}
                >
                    <Image
                        src={'/images/whatsapp.png'}
                        width={100}
                        height={100}
                        alt="whatsapp"
                        className="w-8 h-8"
                    />
                </Link>
            </div>
            <p className="font-bold text-white text-center">
                Social Market Place @ 2023 - Todos os direitos reservados
            </p>
        </footer>
    )
}