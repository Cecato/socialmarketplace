import Card from "../components/card";
import Bar from "../components/banner";

export default function Home() {
  
  return (
    <>
      <main>      
        <div className="w-full h-screen bg-gray-200 flex flex-col p-5 items-center">
          <div className="max-w-screen-xl bg-white rounded-md shadow-md w-full">
            <div className="border border-gray-300 p-4 flex flex-wrap justify-between">
              <Bar>
                <Card
                    imgSrc="/images/instagram.png"
                    alt="img"
                    title="Instagram"
                    price="2"
                  /> 
                  <Card
                    imgSrc="/images/youtube.png"
                    alt="img"
                    title="Instagram"
                    price="2"
                  />
                  <Card
                    imgSrc="/images/tiktok.png"
                    alt="img"
                    title="Instagram"
                    price="2"
                  />  
                  <Card
                    imgSrc="/"
                    alt="img"
                    title="Instagram"
                    price="2"
                  />   
              </Bar>

              <Bar>
                <Card
                    imgSrc="/images/instagram.png"
                    alt="img"
                    title="Instagram"
                    price="2"
                  /> 
                  <Card
                    imgSrc="/images/instagram.png"
                    alt="img"
                    title="Instagram"
                    price="2"
                  />
                  <Card
                    imgSrc="/images/instagram.png"
                    alt="img"
                    title="Instagram"
                    price="2"
                  />  
                  <Card
                    imgSrc="/images/instagram.png"
                    alt="img"
                    title="Instagram"
                    price="2"
                  /> 
              </Bar>
            </div>
          </div>    
        </div>
      </main>
    </>
  );
};