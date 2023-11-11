import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

type Props = {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social Marketplace 👌',
  description: 'Compre Curtidas, Seguidores, Comentários e Mais para o Sucesso Online.',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <main>
          <Navbar title="Social Market Place" />
          { children }
          <Footer />
        </main>

      </body>
    </html>
  )
}
