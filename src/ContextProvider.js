import React, { useEffect, useState } from 'react';
import ProductContext from './Component/Context';
import axios from 'axios';

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState("");
    const getData = async () => {
        const response = await axios.get("https://run.mocky.io/v3/f0074b9f-2dc2-4c5f-a011-ed54938f9be0")
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