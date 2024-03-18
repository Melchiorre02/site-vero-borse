


import React, { useState, useEffect } from 'react';

const NewsletterModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Simulare l'apertura della modal dopo un certo periodo di tempo
  /* useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000); // 30 secondi (30000 millisecondi)
    return () => clearTimeout(timer);
  }, []); */

  // Funzione per la validazione dell'email
  const validateEmail = (email) => {
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Gestire l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }
    // Invia l'email (simulazione)
    console.log('Email inviata:', email);

    // Chiudi la modal
    setShowModal(false);
  };

  return (
    <>
      {/* Sfondo trasparente per la modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          {/* Contenuto della modal */}
          <div className="bg-white dark:bg-black p-4 sm:p-8 w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg">
            {/* Chiudere la modal */}
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setShowModal(false)}
            >
              Chiudi
            </button>
            {/* Contenuto della modal */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Iscriviti alla nostra newsletter</h2>
              <p className="text-gray-700 dark:text-white text-center mb-2 sm:mb-4">Ricevi le ultime novità direttamente nella tua casella di posta.</p>
              <div className="flex flex-col sm:flex-row">
                {/* Foto */}
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                  <img
                    src="foto_Newsletter.jpeg"
                    alt="Immagine"
                    className="w-full h-auto"
                  />
                </div>
                {/* Form */}
                <div className="w-full sm:w-1/2 px-4">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mb-4">
                    <input
                      type="email"
                      placeholder="Inserisci la tua email"
                      className={`border border-gray-300 px-4 py-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-3/4 focus:outline-none focus:border-blue-500 rounded-l ${
                        isValidEmail ? '' : 'border-red-500'
                      }`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsValidEmail(true);
                      }}
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 w-full sm:w-1/4 rounded-r"
                    >
                      Iscriviti
                    </button>
                  </form>
                  {!isValidEmail && (
                    <p className="text-red-500 text-sm">Inserisci un'email valida.</p>
                  )}
                </div>
              </div>
              {/* Bottone per chiudere la modal */}
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border dark:bg-black dark:text-white border-gray-400 rounded shadow mt-2 sm:mt-4"
                onClick={() => setShowModal(false)}
              >
                Chiudi Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterModal;
