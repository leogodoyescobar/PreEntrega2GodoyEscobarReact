import {createContext, useEffect, useState} from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const ProductContext = createContext(null);

export const ProductContextProvider = ( { children }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [changes, setChanges] = useState(true);
    
    
    const getProducts = ( category ) => {
        const myProducts = category ? query(collection(db, "products"), where("category", "==", category)) : query(collection(db, "products"));
        setIsLoading(true);
        // setChanges(!changes);
        getDocs(myProducts)
            .then( (resp) => {
                const myProductsList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
                setProducts(myProductsList);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getProducts()
    }, [changes]);


    const contextValue = {
        products,
        isLoading,
    };

    return <ProductContext.Provider value={contextValue}> {children} </ProductContext.Provider>
}