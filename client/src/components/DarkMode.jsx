import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkMode(){

    const [dark, setDark] = useDarkMode();

    const toggleDark = e => {
        e.preventDefault();
        setDark(!dark);
    }

    return(
        <>
            <div className="darkToggle" onClick={toggleDark} >
                <div className={dark ? "toggle toggled": "toggle"} />
            </div>
        </>
    )
}