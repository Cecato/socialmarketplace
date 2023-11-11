'use client';
import { useEffect, useState } from "react";
import Card from "../components/card";
import Baner from "../components/ofertas/banerOferta"


type Product = {
  id: string;
  name: string;
  services: Service[];
}

type Service = {
  name: string;
  price: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>();
  const [error, setError] = useState<any>();

  useEffect(()=>{
    async function fetchProducts (){
      try{
        const response = await fetch(`/api`);
        const product = await response.json();
        setProducts(product);
      }
      catch{
        setError(true);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-auto bg-gray-100 flex flex-col items-center">
      <Baner />
      <div className="max-w-screen-xl p-4">
        <div className="w-full flex flex-wrap gap-2 justify-center">
          {products?.map((product)=>{
            return(
              <div key={product.id}>
                <Card
                  imgSrc={`/images/${product.name}.png`}
                  alt="produto"
                  title={product.name}
                  price={product.services[0].price}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="h-20"/>
    </div>
  );
};