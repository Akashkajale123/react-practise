import React, { createContext } from "react";
import all_Product from '../components/Assests/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {
        all_Product: all_Product // Corrected property name
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
