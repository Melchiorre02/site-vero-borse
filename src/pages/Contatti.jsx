import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import X from "../componenti/icons/X";
import Phone from "../componenti/icons/Phone";
import Maps from "../componenti/icons/Maps";
import Gmail from "../componenti/icons/Gmail";




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contatti() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "Il nome è richiesto";
      isValid = false;
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Il cognome è richiesto";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "L'email è richiesta";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Inserisci un'email valida";
      isValid = false;
    }

    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Il numero di telefono è richiesto";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber =
        "Il numero di telefono deve contenere solo numeri";
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
              Grazie per averci contattato!
            </p>
            <p className="text-gray-700 mt-2">
              Un nostro collega ti risponderà il prima possibile.
            </p>
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
          CONTATTI
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-white">
          IL PERSONALE È A TUA DISPOSIZIONE DAL LUNEDÌ AL VENERDÌ DALLE 9:00
          DALLE 13:00 E DALLE 14:00 DALLE 18:00 PUOI CONTATTARCI COMPILANDO IL
          FORM QUI SOTTO. IL NOSTRO STAFF TI RISPONDERÀ AL PIÙ PRESTO.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2 mt-10 ">
        <div className="flex flex-col items-center text-center">
       <Phone />
          <p className=" text-[22px]">+39 0872 52133</p>
        </div>
        <div className="flex flex-col items-center text-center">
       <Maps />
          <p className=" text-[22px]">Via Marco Polo (MI)</p>
        </div>
        <div className="flex flex-col items-center text-center">
        <Gmail />
          <p className=" text-[22px]">bag_info_@gmail.com</p>
        </div>
      </div>
      {/* <div className="flex justify-center">
      <div className="border border-gray-300 mx-2 p-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="flex">
          <div className="w-2/5 pr-4">
            <div className="border-r border-gray-300 p-4 bg-white">
              <p className="text-sm">+39 0872 52133</p>
            </div>
          </div>
          <div className="w-2/5 px-4">
            <div className="border-r border-gray-300 p-4 bg-white">
              <p className="text-sm">Via Marco Polo (MI)</p>
            </div>
          </div>
          <div className="w-1/5 px-4">
            <div className="p-4 bg-white">
              <p className="text-sm">bag_info_@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
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
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Messaggio
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 dark:text-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={formData.agreed}
                onChange={(checked) =>
                  setFormData({ ...formData, agreed: checked })
                }
                className={classNames(
                  formData.agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only dark:text-white text-black">
                  Agree to policies
                </span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    formData.agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600 dark:text-white">
              IN QUALITÀ DI INTERESSATO, AVENDO LETTO L’INFORMATIVA SULLA
              Informativa sulla privacy, ACCONSENTO ESPRESSAMENTE AL TRATTAMENTO
              DEI MIEI DATI PERSONALI PER RISPONDERE ALLA MIA RICHIESTA DI
              INFORMAZIONI DA PARTE DI BAG.
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-black"
          >
            Invia
          </button>
        </div>
      </form>
    </div>
  );
}

{
  /* <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 dark:text-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */
}
