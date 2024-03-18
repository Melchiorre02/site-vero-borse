import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import X from "../componenti/icons/X";
import { Button } from "@nextui-org/react";
import { useShop } from "../providers/ShopProvider";
import { Link } from "react-router-dom";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Contatti() {
  
  const {borse} = useShop(); // Aggiungi clearCart dal provider

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    creditCardNumber: "",
    expiryMonth: "",
    cvv: "",
    agreed: false,
    brand: "",
    bagType: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    creditCardNumber: "",
    expiryMonth: "",
    cvv: "",
    brand: "",
    bagType: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validazione dei campi
    let isValid = true;
    const newErrors = {};

    const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']{1,50}$/;

    if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "Il nome non è valido";
      isValid = false;
    }
    if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Il cognome non è valido";
      isValid = false;
    }

    // Validazione degli altri campi...

    if (formData.brand.trim() === "") {
      newErrors.brand = "Seleziona un brand";
      isValid = false;
    }

    if (formData.bagType.trim() === "") {
      newErrors.bagType = "Seleziona un tipo di borsa";
      isValid = false;
    }

    // Validazione dell'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Inserisci un indirizzo email valido";
      isValid = false;
    }

    // Validazione del numero di telefono
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Inserisci un numero di telefono valido";
      isValid = false;
    }

    // Validazione del numero della carta di credito
    const creditCardRegex = /^\d{16}$/;
    if (!creditCardRegex.test(formData.creditCardNumber)) {
      newErrors.creditCardNumber =
        "Inserisci un numero di carta di credito valido";
      isValid = false;
    }

    // Validazione del mese di scadenza
    const monthRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    if (!monthRegex.test(formData.expiryMonth)) {
      newErrors.expiryMonth = "Inserisci un mese di scadenza valido";
      isValid = false;
    }

    // Validazione del CVV
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(formData.cvv)) {
      newErrors.cvv = "Inserisci un CVV valido";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Invia i dati o esegui altre operazioni
      console.log("Dati validi:", formData);
      setShowPopup(true); // Mostra il popup
    } else {
      console.log("Dati non validi:", formData);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Chiudi il popup
  };
  return (
    <>
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
    <div className="isolate bg-white dark:bg-black px-6 py-24 sm:py-32 lg:px-8">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
            <button
              className="absolute top-2 right-2"
              onClick={handleClosePopup}
            >
              <X className="h-6 w-6 text-gray-600 dark:text-white" />
            </button>
            <p className="text-lg font-semibold">
              Il tuo ordine è stato ricevuto con successo.
            </p>
            <p className="text-gray-700 mt-2">Il tuo ordine Arriverà presto</p>
          </div>
        </div>
      )}
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          CHECKOUT
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Nome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleInputChange}
                className={classNames(
                  "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white",
                  errors.firstName && "border-red-500"
                )}
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Cognome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleInputChange}
                className={classNames(
                  "block w-full rounded-md dark:text-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  errors.lastName && "border-red-500"
                )}
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                className={classNames(
                  "block w-full rounded-md border-0 dark:text-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  errors.email && "border-red-500"
                )}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="brand"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Brand
            </label>
            <div className="mt-2.5">
              <select
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className={classNames(
                  "block w-full rounded-md border-0 dark:text-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  errors.brand && "border-red-500"
                )}
              >
                <option value="">Seleziona un brand</option>
                <option value="SOLSTICE">SOLSTICE</option>
                <option value="LUMINA">LUMINA</option>
                <option value="CELESTIA">CELESTIA</option>
                <option value="ARCADIA">ARCADIA</option>
                <option value="VELLORA">VELLORA</option>
              </select>
              {errors.brand && (
                <p className="mt-1 text-xs text-red-500">{errors.brand}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="bag-type"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Tipo di Borsa
            </label>
            <div className="mt-2.5">
              <select
                id="bag-type"
                name="bagType"
                value={formData.bagType}
                onChange={handleInputChange}
                className={classNames(
                  "block w-full rounded-md border-0 dark:text-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  errors.bagType && "border-red-500"
                )}
              >
                <option value="">Seleziona un tipo di borsa</option>
                <option value="Borsa a Sechiello">Borsa a Sechiello</option>
                <option value="Borsa a spalla">Borsa a spalla</option>
                <option value="Borsa Mini">Borsa Mini</option>
                <option value="Clutch">Clutch</option>
                <option value="Tote Bag">Tote Bag</option>
              </select>
              {errors.bagType && (
                <p className="mt-1 text-xs text-red-500">{errors.bagType}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Numero Telefono
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Prefisso
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 dark:text-white bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400 dark:text-white"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phoneNumber"
                id="phone-number"
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={classNames(
                  "block w-full rounded-md border-0 dark:text-white px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  errors.phoneNumber && "border-red-500"
                )}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="credit-card-number"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Numero Carta di Credito
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="creditCardNumber"
                id="credit-card-number"
                value={formData.creditCardNumber}
                onChange={handleInputChange}
                className={classNames(
                  "block w-full rounded-md border-0 dark:text-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  errors.creditCardNumber && "border-red-500"
                )}
              />
              {errors.creditCardNumber && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.creditCardNumber}
                </p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2 grid grid-cols-2 gap-x-8">
            <div>
              <label
                htmlFor="expiry-month"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Mese di Scadenza
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="expiryMonth"
                  id="expiry-month"
                  value={formData.expiryMonth}
                  onChange={handleInputChange}
                  className={classNames(
                    "block w-full rounded-md border-0 dark:text-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                    errors.expiryMonth && "border-red-500"
                  )}
                />
                {errors.expiryMonth && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.expiryMonth}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                CVV
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className={classNames(
                    "block w-full rounded-md border-0 dark:text-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                    errors.cvv && "border-red-500"
                  )}
                />
                {errors.cvv && (
                  <p className="mt-1 text-xs text-red-500">{errors.cvv}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  gap-4 p-10">
          <button
            type="submit"
            className="block w-[70%] rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-black"
          >
            Invia
          </button>
         
         <Link to={'/shop'}>
            <Button className="block w-[100%] rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-black">
              Torna allo shop
            </Button>
         </Link>
        
        </div>
      </form>
    </div>
    </>
  );
}
