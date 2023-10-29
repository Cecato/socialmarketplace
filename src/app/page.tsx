import Bar from "../components/banner";
import Card from "../components/card";

export default function Home() {
  
  return (
    <>
      <main>      
        <div className="w-full h-screen bg-white flex flex-col p-5 items-center">
          <div className="max-w-screen-xl bg-white rounded-md shadow-md w-full">
            <div className="border border-gray-300 p-4 flex flex-wrap justify-between">
              <Bar>
                <Card
                    imgSrc="/images/instagram.png"
                    alt="img"
                    title="Instagram"
                    price="2,00"
                  /> 
                  <Card
                    imgSrc="/images/youtube.png"
                    alt="img"
                    title="Youtube"
                    price="2,00"
                  />
                  <Card
                    imgSrc="/images/kwai.png"
                    alt="img"
                    title="Kwai"
                    price="2,00"
                  />  
                  <Card
                    imgSrc="/images/facebook.png"
                    alt="img"
                    title="Facebook"
                    price="2,00"
                  />   
              </Bar>

              <Bar>
                <Card
                    imgSrc="/images/tiktok.png"
                    alt="img"
                    title="Tiktok"
                    price="2,00"
                  /> 
                  <Card
                    imgSrc="/images/twitch.png"
                    alt="img"
                    title="Twitch"
                    price="2,00"
                  />
                  <Card
                    imgSrc="/images/threads.png"
                    alt="img"
                    title="Threads"
                    price="2,00"
                  />  
                  <Card
                    imgSrc="/images/discord.png"
                    alt="img"
                    title="Discord"
                    price="2,00"
                  /> 
              </Bar>

              <Bar>
                <Card
                    imgSrc="/images/twitter.png"
                    alt="img"
                    title="Twitter"
                    price="2,00"
                  /> 
                  <Card
                    imgSrc="/images/deezer.png"
                    alt="img"
                    title="Deezer"
                    price="2,00"
                  />
                  <Card
                    imgSrc="/images/telegram.png"
                    alt="img"
                    title="Telegram"
                    price="2,00"
                  />  
                  <Card
                    imgSrc="/images/shopee.png"
                    alt="img"
                    title="Shopee"
                    price="2,00"
                  /> 
              </Bar>

              <Bar>
                <Card
                      imgSrc="/images/mixcloud.png"
                      alt="img"
                      title="Mixcloud"
                      price="2,00"
                    /> 
              </Bar>
            </div>
          </div>    
        </div>
      </main>
    </>
  );
};