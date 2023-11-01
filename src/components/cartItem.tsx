import Image from "next/image";

type Props = {
    id: string;
}

export default function CartItem({ id }: Props){

    const product = {
        type: 'instagram',
        sercice: 'Seguidores',
        id: '1',
        price: 100,
        imageSrc: '/images/default.png',
    }
    
    return(
        <div className='w-full h-[100px] border roudned-md flex justify-between p-2'>
            <Image
                src={product.imageSrc}
                width={100}
                height={100}
                alt=""
            />
            <div>
                <h1> {product.type} </h1>
                <h1> {product.sercice} </h1>
            </div>
            <div>
                <h1> Preço </h1>
                <h1> R$ {product.price} </h1>
            </div>
        </div>
    )
}