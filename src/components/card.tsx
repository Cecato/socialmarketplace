import Image from 'next/image';

type Props = {
    img: string;
    alt: string;
    title: string;
    text: string;
    price: string;
}

export default function Card({img, alt, title, price}: Props){
    return(
        <>
            <div className='w-64'>
                <div>
                    <Image
                        src={img}
                        alt={alt}
                        width={250}
                        height={250}
                    ></Image>
                </div>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <h2>{price}</h2>
                </div>
            </div>
        </>
    )
}