import {createContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const ProductContext = createContext(null);

export const ProductContextProvider = ( { children }) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {category} = useParams();

    useEffect(() => {
        const myProducts = query(collection(db, "products"));
        setIsLoading(true);
        getDocs(myProducts)
            .then( resp => {
                const myProductsList = resp.docs.map(doc => ({ id: doc.id, ...doc.data()}));
                if (category) {
                    const productsFilter = myProductsList.filter(product => product.category === category);
                    setProducts (productsFilter)
                    setIsLoading(false);
                } else{
                    setProducts(myProductsList);
                    setIsLoading(false);
                }
            })
            .catch(error => console.log(error));
            setIsLoading(true);
    }, [category]);


    const contextValue = {
        products,
        isLoading,
    };

    return <ProductContext.Provider value={contextValue}> {children} </ProductContext.Provider>
}