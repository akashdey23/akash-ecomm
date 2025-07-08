import { createContext, useMemo } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const value = {
    products,    // static
    currency: "$", // static
    delivery_fee: 10, // static
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;