import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [baslik, setBaslik] = useState("Context Navbar");

    const value = {
        isim: "Berke",
        soyisim: "Aras",
        baslik: baslik,
        listeler: ["Anasayfa", "Hakkımızda", "İletişim", "Projeler"],
        setBaslik,
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
};
