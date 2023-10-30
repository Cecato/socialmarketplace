import Image from 'next/image';

type Props = {
    imgSrc?: string;
    alt: string;
    title: string;
}

export default function CardProduct({imgSrc, alt, title}: Props){

    const imageSource = imgSrc || '/images/default.png';
    
    return(
        <div className='md:w-1/2 h-1/2 border border-gray-300 rounded-md flex flex-col
        items-center justify-center'>
            <Image
                src={imageSource}
                alt={alt}
                width={100}
                height={100}
                className='object-contain w-full h-full p-2'
            />
        </div>
    )
}