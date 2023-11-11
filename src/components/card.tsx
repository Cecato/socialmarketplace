import Image from 'next/image';
import Link from 'next/link'

type Props = {
    imgSrc?: string;
    alt: string;
    title: string;
    price: string;
}

export default function Card({ imgSrc, alt, title, price }: Props){

    const imageSource = imgSrc || '/images/default.png';
    
    return(
        <Link href={`/product/${title}`}>
            <div className='h-[300px] w-[200px] border border-gray-300 rounded-md bg-white
            flex flex-col items-center p-2 justify-between'>
                <Image
                    alt='produto'
                    src={imgSrc ? imgSrc : imageSource}
                    width={100}
                    height={100}
                />
                <h1 className=''>
                    {title}
                </h1>
                <div className='text-center'>
                    <span>
                        á partir de
                    </span>
                    <p className='font-semibold text-xl'>
                        R$
                        {price}
                    </p>
                </div>
                <button className='w-full bg-violet-500 rounded text-white font-bold h-[30px]
                flex items-center justify-center hover:bg-violet-600'>
                    Comprar
                </button>
            </div>
        </Link>
    )
}