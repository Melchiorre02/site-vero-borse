import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {FunnelIcon,MinusIcon,PlusIcon,Squares2X2Icon,} from "@heroicons/react/20/solid";
import { filters } from "../componenti/data/filters";
import products from "../componenti/data/products";
import Cerca from "../componenti/icons/Cerca";
import { Button } from "@nextui-org/react";
import { useShop } from "../providers/ShopProvider";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

export default function Shop({ product }) {
  const [searchFilter, setSearchFilter] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchFilter(search);
  };

  const handleReset = () => {
    setSearch("");
    setSearchFilter("");
  };
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  //carrello
  const {handleClick} = useShop();

  return (
    <div className="bg-white dark:bg-black">
      <img src="/banner_shop.png" alt="Banner Shop" />
      <div className="w-full max-w-6xl mx-auto mt-8">
        <form className="flex w-full gap-4" onSubmit={handleSubmit}>
          <div className="h-[52px] bg-gray-100 rounded-xl flex items-center w-full pr-4 focus-within:outline focus-within:outline-2">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full bg-gray-200 leading-8 rounded-md outline-none dark:text-black"
            />
            {search && (
              <button
                type="reset"
                onClick={handleReset}
                className="bg-black size-10 flex items-center justify-center rounded-full text-white dark:bg-white dark:text-black flex-none ml-2"
              >
                X
              </button>
            )}
          </div>
          <button
            type="submit"
            className="bg-black dark:bg-white size-[52px] rounded-xl flex justify-center items-center"
          >
            <Cerca className={"text-white dark:text-black size-6"} />
          </button>
        </form>
      </div>

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black dark:text-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-black py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                      Filtri
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white  dark:bg-black px-2 py-3 dark:text-white text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900 dark:bg-black dark:text-white">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      checked={selectedCategories.includes(
                                        option.value
                                      )}
                                      onChange={(event) => {
                                        const isChecked = event.target.checked;
                                        setSelectedCategories(
                                          (prevSelected) => {
                                            if (isChecked) {
                                              return [
                                                ...prevSelected,
                                                option.value,
                                              ];
                                            } else {
                                              return prevSelected.filter(
                                                (item) => item !== option.value
                                              );
                                            }
                                          }
                                        );
                                      }}
                                      className="h-4 w-4 rounded dark:text-white border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 dark:text-white text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b dark:text-white border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight dark:text-white text-gray-900">
              BORSE
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div></div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium dark:text-white text-gray-900"
                                  : "text-gray-500 dark:text-white",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 dark:text-white hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 dark:text-white hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only ">Filtri</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Prodotti
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categorie</h3>
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200  dark:bg-black py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white  dark:bg-black py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium dark:text-white text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  checked={selectedCategories.includes(
                                    option.value
                                  )}
                                  onChange={(event) => {
                                    const isChecked = event.target.checked;
                                    setSelectedCategories((prevSelected) => {
                                      if (isChecked) {
                                        return [...prevSelected, option.value];
                                      } else {
                                        return prevSelected.filter(
                                          (item) => item !== option.value
                                        );
                                      }
                                    });
                                  }}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm dark:text-white text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-black">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight dark:text-white text-gray-900">
                      Prodotti
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {products
                        .filter((product) => {
                          // Filter by search term
                          if (
                            searchFilter &&
                            !product.name
                              .toLowerCase()
                              .includes(searchFilter.toLowerCase())
                          ) {
                            return false;
                          }
                          // Filter by selected categories
                          if (selectedCategories.length > 0) {
                            const productCategory = product.filters.some(
                              (filter) => selectedCategories.includes(filter)
                            );
                            if (!productCategory) {
                              return false;
                            }
                          }
                          // Add additional filters here if needed
                          return true;
                        })
                        .map((product) => (
                          <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md dark:text-white bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 transition duration-600 ease-in-out">
                              <img
                                src={product.imageSrc}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </div>

                            <div className="mt-4 flex justify-between">
                              <div>
                                <h3 className="text-sm text-gray-700 dark:text-white">
                                  <a href={product.Link}>
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0 text-lg"
                                    />
                                    {product.name}
                                  </a>
                                </h3>
                                <p className="mt-1 text-lg dark:text-white text-black ">
                                  {product.price}
                                </p>
                                <span
                                  className={`inline-flex items-center rounded-full border-1.5 border-blue-700 ${product.color} p-1.5`}
                                />
                              </div>
                              <div className="flex items-center">
                                <p className="text-base font-medium dark:text-white text-gray-900 ">
                                  {product.brand}
                                </p>
                                <Button className="ml-4 bg-black dark:bg-white dark:text-black text-white  rounded-3xl flex items-center" 
                                 onClick={() => handleClick(product)}>
                                  Acquista
                                  </Button>
                               
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
