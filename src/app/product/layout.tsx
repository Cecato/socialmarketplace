'use client';
import { CartProvider } from 'react-use-cart';

type Props = {
  children: React.ReactNode;
}

export default function ProductLayout({ children }: Props) {
  return(    
    <CartProvider>
        { children }
    </CartProvider>
  )
}
