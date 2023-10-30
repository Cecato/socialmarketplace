import Button from './input/button';
import OptionSelector from './optionsSelector';

export default function ProductSelectorContainer( ){
    //placeholder
    const services = [
        1,2,3,4,5,6
    ]

    return(
        <div className='md:w-1/2 md:h-full h-1/2 border border-gray-300 rounded-md p-2 flex
        flex-col justify-between'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className='font-semibold'>
                        Serviços
                    </h1>
                    <div className='flex flex-wrap gap-2'>
                        {services.map((service, index) => {
                            return(
                                <div key={index}>
                                    <OptionSelector textOption='Seguidores'/>
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
                        {services.map((service, index) => {
                            return(
                                <div key={index}>
                                    <OptionSelector textOption='1000'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='flex justify-around'>
                <div className='w-1/2'>
                    <h1 className='text-left font-bold text-2xl'>
                        R$ 100,00
                    </h1>
                    <p className='text-left text-gray-500 text-sm'>
                        À vista no PIX
                    </p>
                </div>
                <div className='w-1/2'>
                    <Button />
                </div>
            </div>
        </div>
    )
}