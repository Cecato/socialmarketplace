'use client';
import CardProduct from "@/src/components/cardProduct";
import ProductSelectorContainer from "@/src/components/productSelector";
import { useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  }
}

export default function ProductPage({ params }: Props) {
  const [product, setProduct] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(()=>{

    async function fetchProduct (){
      try{
        const response = await fetch(`/api/${params.id.toLowerCase()}`);
        const product = await response.json();
        setProduct(product);
      }
      catch{
        setError(true);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col p-5 pt-16 items-center">
      {product &&
        <div className="max-w-screen-xl h-full bg-white shadow-sm w-full rounded-sm border
        border-gray-300 p-4 flex flex-col justify-center">
          <h1 className="text-xl font-bold h-[5%]">
            {product?.name}
          </h1>
          <div className="w-full h-[90%] flex flex-col md:flex-row justify-center gap-4">
            <CardProduct
              imgSrc={`/images/${product?.name}.png`}
              alt="produto"
              title="Instagram"
            />
            <ProductSelectorContainer product={product}/>
          </div>
        </div>
      }
    </div>
  );
};