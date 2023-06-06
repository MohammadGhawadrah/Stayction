import React, { useEffect, useState } from 'react';
import ProductContext from './Component/Context';
import axios from 'axios';

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState("");
    const getData = async () => {
        const response = await axios.get("https://run.mocky.io/v3/a94459f8-895d-40dc-be93-b9c6fb827d9d")
        const { data } = response
        setProducts(data)
    }
    useEffect(() => getData, []);
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );

};
export default ProductProvider;