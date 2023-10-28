import Image from 'next/image';

export default function Bar({img, alt, text}: {img: string, alt:string, text:string}){
    return(
        <>
        <div>
            <div>
                <Image
                    src={img}
                    alt={alt}
                />
            </div>
            <div>
                <h2>
                    {text}
                </h2>
            </div>
        </div>
        </>
    )
}