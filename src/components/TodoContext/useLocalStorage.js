import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => { // el useEffect se usa para que el codigo que esta adentro se ejecute con una condicion, y que no se rencerize cada vez que se renderize el componenente, por ejemplo una api
        setTimeout(() => {
            try {
                const itemLocalStorages = localStorage.getItem(itemName);
                let parsedItem = initialValue;
                if (!itemLocalStorages) {
                    localStorage.setItem(itemName, JSON.stringify(parsedItem));
                } else {
                    parsedItem = JSON.parse(itemLocalStorages);
                    setItem(parsedItem)
                    setLoading(true);
                }
            } catch (error) {
                setError(true);
            }
        }, 1000)
    }, [])
    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(true);
        }
    }
    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };