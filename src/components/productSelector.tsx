'use client';
import { useCart } from 'react-use-cart';
import Button from './input/button';
import OptionSelector from './optionsSelector';
import { useEffect, useState } from 'react';

type Props = {
    product: {
        name: string;
        services: Service[];
    }
}

type Service = {
    name: string;
    price: number;
}

export default function ProductSelectorContainer({ product }: Props){
    const [selectedService, setSelectedService] = useState<Service>();
    const [selectedQuantity, setSelectedQuantity] = useState<number>();

    const quantity = [
        100, 200, 500, 1000, 10000
    ]

    useEffect(()=>{
        console.log(selectedService, selectedQuantity);

    }, [selectedService, selectedQuantity])

    const { addItem } = useCart();

    return(
        <div className='md:w-1/2 md:h-full h-1/2 border border-gray-300 rounded-md p-2 flex
        flex-col justify-between shadow-md'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className='font-semibold'>
                        Serviços
                    </h1>
                    <div className='flex flex-wrap gap-2'>
                        {product?.services.map((service, index) => {
                            return(
                                <div key={service.name}>
                                    <OptionSelector 
                                        textOption={service.name}
                                        onClick={setSelectedService}
                                        data={service}
                                        selected={selectedService}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold'>
                        Quantidade
                    </h1>
                    <div className='flex flex-wrap gap-2'>
                        {quantity.map((quantity) => {
                            return(
                                <div key={quantity}>
                                    <OptionSelector 
                                        textOption={quantity.toString()}
                                        onClick={setSelectedQuantity}
                                        data={quantity}
                                        selected={selectedQuantity}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                    <h1 className='font-semibold'>
                        Link da sua conta
                    </h1>
                    <input
                        className='border border-gray-300 rounded-md p-2 w-full'
                        placeholder='https://instagram.com/...'
                    />
            </div>
            <div className='flex justify-around'>
                <div className='w-1/2'>
                    <h1 className='text-left font-bold text-2xl'>
                        R$
                        {selectedService && selectedQuantity &&
                            selectedService?.price * selectedQuantity / 100
                        }
                    </h1>
                    <p className='text-left text-gray-500 text-sm'>
                        À vista no PIX
                    </p>
                </div>
                <div className='w-1/2'>
                    <Button
                        onClick={() => console.log(product)}
                    />
                </div>
            </div>
        </div>
    )
}