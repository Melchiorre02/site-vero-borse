import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";


//creo la costatnte per la pagina

const product = {
  name: "VELLORA",
  price: "€1790",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "vellora(borsasechiello).jpeg",
      
    },
    {
      src: "vellora(borsasechiello)1.jpeg",
     
    },
    {
      src: "vellora(borsasechiello)2.jpeg",
     
    },
    {
      src: "vellora(borsasechiello)3.jpeg",
      
    },
  ],
  colors: [
    { name: "Brown", class: "bg-yellow-950 ", selectedClass: "bg-yellow-950" },
  ],
  description: "Borsa a secchiello piccola in pelle con motivo Intrecciato Cassette",
  highlights: [
    "Profondità: 14 cm/5.5 in",
    "Lunghezza max (tracolla/cinturino): 96 cm/37.8 in",
    "Altezza: 18 cm/7.1 in",
    "Larghezza: 13.5 cm/5.3 in",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



export default function PageSolsticeborsasechiello() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);



  

  return (
    <div className="bg-white dark:bg-black">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl  sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900 dark:text-white">
              {product.price}
            </p>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  Colore
                </h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black  dark:text-white border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <Link to={'/checkout'}>
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-slate-400 hover:text-black dark:bg-white dark:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Acquista
                </button>
             </Link>
              <Link to={'/shop'}
                
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-slate-400 hover:text-black dark:bg-white dark:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                href="shop"
              >
                Torna allo Shop
              </Link>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Descrizione</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900 dark:text-white">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Dimensione
              </h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-gray-400 dark:text-white"
                    >
                      <span className="text-gray-600 dark:text-white">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900 dark:text-white">
                Dettagli
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600 dark:text-white">
                  {product.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2   lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            POTREBBE PIACERTI ANCHE....
          </h1>
        </div>
      </div>
      <div className=" mx-auto w-full max-w-6xl  mb-8">
        <div className="flex gap-4">
          <div className="w-full">
            <img src="/lumina(borsasechiello).jpeg"></img>
          </div>
          <div className="w-full">
            <img src="/celestia(borsasechiello).jpeg"></img>
          </div>
          <div className="w-full">
            <img src="/solstice(borsasechiello).jpeg"></img>
          </div>
          <div className="w-full">
            <img src="/arcadia(borsasechiello).jpeg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

