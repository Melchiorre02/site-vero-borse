import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

const isShop = localStorage.getItem('shopCart');

const ShopProvider = ({ children }) => {
    const [show, setShow] = useState();
    const [borse, setBorse] = useState([]);
    const [warning, setWarning] = useState(false);

    // Funzione per gestire il click sul prodotto
    const handleClick = (prod) => {
        let isPresent = false;
        borse.forEach((prodBorse) => {
            if (prod.id === prodBorse.id)
                isPresent = true;
        });
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, );
            return;
        }
        setBorse([...borse, prod]);
    };

    // Funzione per cancellare il carrello e reimpostare il numero a zero
    const clearCart = () => {
        setBorse([]);
        localStorage.removeItem('shopCart'); // Rimuovi i dati dal localStorage
    };

    return (
        <ShopContext.Provider value={{ borse, setBorse, handleClick, clearCart }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
