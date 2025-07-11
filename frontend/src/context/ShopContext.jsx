import { createContext, useMemo, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,               // static
    currency: "₹",          // static
    delivery_fee: 10,       // static
    search,                 // dynamic
    setSearch,
    showSearch,
    setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
