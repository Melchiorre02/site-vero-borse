import { Button } from "@nextui-org/react";
import NewsletterModal from "../componenti/NewsletterModal";
import backgroundImage from "/NEW-SLETTER.png";
import { Link, NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <div className="relative flex justify-center items-center ">
        <div className="absolute flex  flex-col gap-4 text-white items-center max-w-xl ">
          <p className="text-black font-bold text-xs  text-center sm:text-2xl  md:text-4xl lg:w-[100%] lg:text-6xl">
            Scopri il nostro Mondo!
          </p>
          <p className="text-black text-[8px] w-[40%] sm:w-[60%] md:w-[80%] lg:w-[100%] sm:text-base text-center  lg:text-lg">
            Porta il tuo stile al livello successivo con le nostre esclusive
            borse da donna: un esplosione di eleganza e personalità!
          </p>
          <div className="flex flex-col lg:flex-row gap-5 items-center ">
            <Link to={"shop"}>
              <Button className="bg-white text-black  dark:bg-black dark:text-white">
                Scopri di più
              </Button>
            </Link>
          </div>
        </div>
        <img
          src="/banner_home.png"
          className="w-full h-auto"
          alt="Banner"
        ></img>
      </div>

      <section className=" pt-[100px]">
        <div className="relative isolate overflow-hidden ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <p className="tracking-tight text-[19px] text-slate-500 sm:text-xl  dark:text-white">
                  783 nuovi articoli
                </p>
                <p className="mt-4  leading-8 dark:text-white text-black text-7xl font-bold">
                  Novità
                </p>
                <p className="mt-4  leading-8 dark:text-white text-slate-500">
                  Non perderti le ultime tendenze con i nostri nuovi arrivi
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <NavLink to={"shop"}>
                    <button
                      type="submit"
                      className="rounded-xl bg-black text-white dark:bg-white dark:text-black w-[286px] sm:w-[412px] lg:w-[388px] p-[9px]  mt-[20px]"
                    >
                      Acquista
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
                <div className="flex flex-col items-center text-center">
                  <img src="/arcadia(borsasechiello).jpeg"></img>
                  <p className=" text-[22px]">ARCADIA</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img src="/celestia(borsatotebag).jpeg"></img>
                  <p className=" text-[22px]">CELESTIA</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img src="/vellora(borsamini).jpeg"></img>
                  <p className=" text-[22px]">VELLORA</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </section>
      <div className=" text-center">
        <hr className=" mt-9 border border-black dark:border-white border-solid mx-auto w-[70%]" />
      </div>

      <div className=" mx-auto w-full max-w-6xl pt-[70px] pb-[38px]">
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full row-span-2 rounded-3xl mt-3">
            <img src="/home_ft.jpeg"></img>
          </div>
          <div className="w-full row-span-2 rounded-3xl -mt-[25px]">
            <img src="/home_foto2.jpeg"></img>
          </div>
          <div className="w-full row-span-2 rounded-3xl mt-3">
            <img src="/home_foto3.jpeg"></img>
          </div>
        </div>
      </div>

      {/* Inizio NewSletter Home */}

      <div style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Iscriviti alla nostra Newsletter
                </h2>
                <p className="mt-4 text-lg leading-8 text-black">
                  Unisciti alla famiglia BAG per scoprire anteprime di nuovi
                  prodotti ed eventi e per avere accesso esclusivo a promozioni
                  dedicate. In regalo per te uno sconto del 10% sul tuo primo
                  ordine!
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Indirizzo Email
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-black px-3.5 py-2 text-black shadow-sm ring-1 ring-inset   sm:text-sm sm:leading-6"
                    placeholder="Indirizzo Email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Invio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>

      <NewsletterModal />
    </main>
  );
};

export default HomePage;
