import React from 'react'
    // import React, { useState } from "react";
    import { createContext,useState } from "react";
    
    export const ProductsContext = createContext(null);
    
    const ProductsProvider = ({ children }) => {
      const [productsData, setProductsData] = useState([]);
      const [basket, setBasket] = useState([]);
    const [count, setCount] = useState(0)
      const data = {
        productsData,
        setProductsData,
        basket,
        setBasket,
        count,
        setCount
      };
      return (
        <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
      );
    };

    export default ProductsProvider;
