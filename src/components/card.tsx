import Image from 'next/image';
import Link from 'next/link'

type Props = {
    imgSrc?: string;
    alt: string;
    title: string;
    price: string;
}

export default function Card({imgSrc, alt, title, price}: Props){

    const imageSource = imgSrc || '/images/default.png';
    
    return(
        <>
            <Link href={`/product/${title}`}>
            <div className='w-55 p-2 border border-gray-300 shadow-md'>
                
                
                <div className='w-full h-20 max-h-30 flex items-center justify-center'>
                    <div className={`flex items-center justify-center w-20 h-full`} >
                    <Image
                        src={imageSource}
                        alt={alt}
                        width={1980}
                        height={720}
                    ></Image>
                    </div>
                </div>
                <div className='text-center items-center justify-center m-4'>
                    <h1 className='text-xl font-bold font-sans'>{title}</h1>
                </div>
                <div className='m-1'>
                    <div className='text-sm text-gray-500'>
                        <h2>A partir de:</h2>
                    </div>
                    <div className='flex items-center'>
                        <h2 className='text-xl'>R$</h2>
                        <div className='ml-2'>
                            <h1 className='text-3xl text-black'>{price}</h1>
                        </div>  
                    </div>
                    <div className='text-sm text-gray-500'>
                        <h2>Á vista no PIX</h2>
                    </div>
                </div>
                <div className='text-center items-center justify-center mt-5'>
                    <button className='text-xl border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-white'>Ver mais</button>  
                </div>
                
            
            </div>
            </Link>
        </>
    )
}