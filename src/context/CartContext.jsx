import { createContext, useContext, useState } from "react";
import { getProducts } from "../asyncMock";

export const CartContext = createContext(null);


export const CartContextProvider = ({children}) => {

    // const {products} = useContext (getProducts);
    // const getProducts = useContext([...products]);

    // const AddItem = (e) =>{

    // }

    const [cart, setcart] = useState([]);

    const AddToCart = (product) => {
        setcart([...cart, product]);
    }

    return <CartContext.Provider value={ cart }> {children} </CartContext.Provider>
}
