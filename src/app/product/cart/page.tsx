'use client';
import CartItem from "@/src/components/cartItem";
import Button from "@/src/components/input/button";
import { useCart } from "react-use-cart";

export default function Cart() {
  const { items } = useCart();
  
  return (
    <div>
      <div className="w-full h-screen bg-gray-100 flex flex-col p-5 pt-16 items-center">
      <div className="max-w-screen-xl h-full bg-white shadow-sm w-full rounded-sm border
      border-gray-300 p-4 flex flex-col">
        <h1 className="text-xl font-bold h-[5%]">
          Carrinho de compras
        </h1>
        <div className="h-[95%] overflow-y-auto">
          {items.map((item)=>{
            return(
              <div key={item.id}>
                <CartItem
                  id={item.id}
                />
              </div>
            )
          })}
        </div>
        <div className="m-1 w-full flex justify-center items-center">
          <h1 className="w-1/2 text-2xl font-bold">
            <span className="text-xl text-gray-500 font-normal"> Total: </span> RS 1000,00
          </h1>
          <Button onClick={'s'}/>
        </div>
      </div>
      </div>
    </div>
  );
};