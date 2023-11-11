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
      const targetFollowerCount = 800;
      const targetLikeCount = 500;
      const targetViewCount = 900;
  
      animateCount(followerCount, targetFollowerCount, setFollowerCount);
      animateCount(likeCount, targetLikeCount, setLikeCount);
      animateCount(viewCount, targetViewCount, setViewCount);
    }, []);

    return(
        <div className='w-full h-auto flex bg-gradient-to-r from-purple-600 to-indigo-700'>
            <div className="text-white pt-16 p-4">
                <div className="pl-6 container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-2/3">
                        <h1 className="text-4xl font-bold mb-4">
                            Impulsione suas Redes Sociais! 
                            <span className='text-3xl p-2'>
                                📈
                            </span>
                        </h1>
                        <p className="text-lg mb-6">
                            Compre Curtidas, Seguidores, Comentários e Mais para o Sucesso Online.
                        </p>
                        <div className='flex gap-4'>
                            <div className='w-full'>
                                <span className='text-xl'> { followerCount } </span>
                                <span className='text-xl'> &#8593; </span>
                                <p className='text-gray-300 text-sm'> Seguidores </p>
                            </div>

                            <div className='w-full'>
                                <span className='text-xl'> { likeCount } </span>
                                <span className='text-xl'> &#8593; </span>
                                <p className='text-gray-300 text-sm'> Likes </p>
                            </div>

                            <div className='w-full'>
                                <span className='text-xl'> { viewCount } </span>
                                <span className='text-xl'> &#8593; </span>
                                <p className='text-gray-300 text-sm'> Vizualizações </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}