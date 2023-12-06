import {createContext, useEffect, useState} from "react";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const ProductContext = createContext(null);

export const ProductContextProvider = ( { children }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [changes, setChanges] = useState(true);
    
    
    const getProducts = ( category ) => {
        const myProducts = category ? query(collection(db, "products"), where("category", "==", category)) : query(collection(db, "products"));
        setIsLoading(true);
        getDocs(myProducts)
            .then( (resp) => {
                const myProductsList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
                setProducts(myProductsList);
                setIsLoading(false);
            });
    };

    // const getProductById = (id) => {
    //     return products.find((product) => product.id === id);
    // };

    useEffect(() => {
        getProducts()
    }, [changes]);


    const contextValue = {
        products,
        isLoading,
        // getProductById,
    };

    return <ProductContext.Provider value={contextValue}> {children} </ProductContext.Provider>
}