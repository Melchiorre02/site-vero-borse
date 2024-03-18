import { Button } from "@nextui-org/react";
import { useShop } from "../providers/ShopProvider";
import { Link,  } from "react-router-dom";

const CarelloPage = () => {
  const { borse, clearCart } = useShop(); // Aggiungi clearCart dal provider
  return (
    <div>
      <div className=" w-full text-[50px] text-black text-center dark:text-white">
        CARRELLO
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 text-center">
        {borse.map((borsa) => (
          <div key={borsa.id}> {/* Aggiungi una chiave univoca */}
            <img
              className="aspect-h-1 aspect-w-1 w-[100%] overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 dark:text-white"
              src={borsa.imageSrc}
              alt={borsa.name} // Aggiungi un attributo alt per l'accessibilità
            />
            <p className="mt-4 text-sm text-gray-700 dark:text-white">{borsa.name}</p>
            <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
              {borsa.price}
            </p>
            <span
              className={`inline-flex items-center rounded-full border-1.5 border-blue-700 ${borsa.color} p-1.5`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center  gap-4 p-10">
        <Button
          className="rounded-xl bg-black text-white dark:bg-white dark:text-black  lg:w-[388px] lg:p-[9px] mt-[20px]"
          onClick={clearCart} // Chiamata alla funzione per cancellare il carrello
        >
          Svuota Carrello
        </Button>
        <Link to={'/shop'}>
            <Button className="rounded-xl bg-black text-white dark:bg-white dark:text-black lg:w-[388px] lg:p-[9px] mt-[20px]">
              Torna allo shop
            </Button>
        
            </Link>
        
         <Link to={'/checkout'}>
            <Button className="rounded-xl bg-black text-white dark:bg-white dark:text-black lg:w-[388px] lg:p-[9px] mt-[20px]">
              CheckOut
            </Button>
         </Link>
        
      </div>
    </div>
  );
};

export default CarelloPage;

