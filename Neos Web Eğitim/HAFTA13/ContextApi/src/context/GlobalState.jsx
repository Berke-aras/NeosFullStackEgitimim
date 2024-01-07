import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const value = {
        isim: "Berke",
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
};
