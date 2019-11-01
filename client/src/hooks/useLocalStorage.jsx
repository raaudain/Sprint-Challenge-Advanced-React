import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const stored = window.localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue]
}