'use client'
import React, { useEffect, useState } from 'react';

type BannerProps = {};

export default function Baner(props: BannerProps){

    const [followerCount, setFollowerCount] = useState<number>(100);
    const [likeCount, setLikeCount] = useState<number>(100);
    const [viewCount, setViewCount] = useState<number>(200);
  
    const animateCount = (
      currentCount: number,
      targetCount: number,
      setter: React.Dispatch<React.SetStateAction<number>>
    ) => {
      const increment = 1; // Aumento em cada etapa
      const duration = 3000*100; // Duração da animação em milissegundos
      const totalSteps = (targetCount - currentCount) / increment;
      let step = 0;
  
      const interval = setInterval(() => {
        if (step < totalSteps) {
          setter((prevCount) => prevCount + increment);
          step++;
        } else {
          clearInterval(interval);
        }
      }, duration / totalSteps);
    };
  
    useEffect(() => {
      const targetFollowerCount = 800; // Valor final desejado para seguidores
      const targetLikeCount = 500; // Valor final desejado para curtidas
      const targetViewCount = 900; // Valor final desejado para visualizações
  
      animateCount(followerCount, targetFollowerCount, setFollowerCount);
      animateCount(likeCount, targetLikeCount, setLikeCount);
      animateCount(viewCount, targetViewCount, setViewCount);
    }, []);

    return(
        <>
        <div className='w-full h-auto flex bg-gradient-to-r from-purple-600 to-indigo-700'>
            <div className=" text-white p-16 w-auto">
                <div className="ml-6 container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold mb-4">Impulsione suas Redes Sociais!</h1>
                    <p className="text-lg mb-6">
                        Compre Curtidas, Seguidores, Comentários e Mais para o Sucesso Online.
                    </p>
                    </div>
                </div>
                <div className="p-4 rounded-lg w-1/5 flex">
                    <div className="ml-6">
                        <div className='flex'>
                            <div className="text-2xl font-bold">{Math.round(followerCount)}</div>
                            <div className="arrow-up text-2xl ml-4">&#8593;</div>
                            
                        </div>
                        <div className="text-gray-400">Seguidores</div>
                        
                    </div>

                    <div className="ml-10">
                        <div className='flex'>
                            <div className="text-2xl font-bold">{Math.round(likeCount)}</div>
                            <div className="arrow-up text-2xl ml-4">&#8593;</div>
                        </div>
                        <div className="text-gray-400">Curtidas</div>
                    </div>

                    <div className="ml-10">
                        <div className='flex'>
                            <div className="text-2xl font-bold">{Math.round(viewCount)}</div>
                            <div className="arrow-up text-2xl ml-4">&#8593;</div>
                        </div>
                        <div className="text-gray-400">Visualizações</div>
                    </div>
                </div>
            </div>
            <div className='w-50 p-2 border border-gray-300 shadow-md bg-black'>

            </div>
        </div>
        </>
    );
}