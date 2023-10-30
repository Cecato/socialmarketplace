import CardProduct from "@/src/components/cardProduct";
import ProductSelectorContainer from "@/src/components/productSelector";

export default function ProductPage() {

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col p-5 pt-16 items-center">
      <div className="max-w-screen-xl h-full bg-white shadow-sm w-full rounded-sm border
      border-gray-300 p-4 flex flex-col justify-center">
        <h1 className="text-xl font-bold h-[5%]">
          Instagram
        </h1>
        <div className="w-full h-[90%] flex flex-col md:flex-row justify-center gap-4">
          <CardProduct
            imgSrc="/images/instagram.png"
            alt="/images/instagram.png"
            title="Instagram"
          />
          <ProductSelectorContainer />
        </div>
      </div>
    </div>
  );
};