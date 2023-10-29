import Card from "../components/card";
import Bar from "../components/banner";

export default function Home() {
  
  return (
    <>
      <main>      
        <div className="w-full h-screen bg-gray-200 flex flex-col p-5 items-center">
          <div className="max-w-screen-xl h-screen border border-gray-300 bg-white rounded-md shadow-md w-full">
            <Bar>
              <Card
                  imgSrc="/images/instagram.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                /> 
                <Card
                  imgSrc="/images/tiktok.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                />
                <Card
                  imgSrc="/images/instagram.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                />  
                <Card
                  imgSrc="/images/instagram.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                />
                <Card
                  imgSrc="/images/instagram.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                />    
            </Bar>

            <Bar>
              <Card
                  imgSrc="/images/instagram.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                /> 
                <Card
                  imgSrc="/images/instagram.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                />
                <Card
                  imgSrc="/images/instagram.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                />  
                <Card
                  imgSrc="/images/instagram.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                />
                <Card
                  imgSrc="/images/instagram.png"
                  alt="img"
                  title="Instagram"
                  text="Curtidas"
                  price="A partir de 2$"
                />    
            </Bar>
          </div>     
        </div>
      </main>
    </>
  );
};