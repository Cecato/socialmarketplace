import Card from "../components/card";

export default function Home() {
  
  return (
    <>
      <main>      
        <div>
          <Card
              img="/images/default.png"
              alt="img"
              title="Instagram"
              text="Curtidas"
              price="A partir de 2$"
            />        
        </div>
      </main>
    </>
  );
};