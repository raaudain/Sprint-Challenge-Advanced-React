import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {

    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        value ? document.querySelector("body").classList.add("dark") : document.querySelector("body").classList.remove("dark");
    })

    return [value, setValue]
}