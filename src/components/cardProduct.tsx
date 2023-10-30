
import Image from 'next/image';

type Props = {
    imgSrc?: string;
    alt: string;
    title: string;
}

export default function CardProduct({imgSrc, alt, title}: Props){

    const imageSource = imgSrc || '/images/default.png';
    
    return(
        <>
            <div className='w-1/3 p-4 border border-gray-300 shadow-md m-3'>
                <div className='mb-8 ml-7'>
                    <h1 className='text-4xl font-bold font-sans'>{title}</h1>
                </div>
                <div className='w-full h-48 max-h-48 flex items-center justify-center'>
                    <div className={`flex items-center justify-center w-48 h-full`} >
                    <Image
                        src={imageSource}
                        alt={alt}
                        width={1980}
                        height={720}
                    ></Image>
                    </div>
                </div>
                
                <div className='text-sm text-gray-500'>
                    <h2>A partir de:</h2>
                </div>
                
            </div>
        </>
    )
}