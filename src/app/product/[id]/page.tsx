import CardProduct from "@/src/components/cardProduct";
import CardOptions from "@/src/components/cardOption";

export default function ProductPage() {

  return (
    <>
      <div className="w-full h-screen bg-white flex flex-col p-5 items-center">
        <div className="max-w-screen-xl bg-white rounded-md shadow-md w-full">
          <div className="border border-gray-300 p-4 flex flex-wrap justify-between">

            <CardProduct
              imgSrc="/images/instagram.png"
              alt="/images/instagram.png"
              title="Instagram"
              />
            
            <CardOptions></CardOptions>

          </div>
        </div>
      </div>
    </>
  );
};