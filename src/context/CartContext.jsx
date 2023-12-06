import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);


export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    const AddToCart = (product, quantity) => {
        const cartIndex = cart.findIndex ( (item) => item.id === product.id);
        if(cartIndex === -1 ){
            const productToCart = {
                ...product,
                quantity,
                subTotal: product.price * quantity,
            }
            setCart([...cart, productToCart]);
            console.log(cart);
        } else{
            const cartCopy = [ ...cart];
            const updatedItem = { ...cartCopy[cartIndex] };
            updatedItem.quantity += quantity;
            updatedItem.subTotal = updatedItem.price * updatedItem.quantity;
            cartCopy[cartIndex] = updatedItem;
            setCart(cartCopy);
        }
    };

    const removeProduct = (id) => {
        const productsFilter = cart.filter( (product) => product.id !== id );
        setCart(productsFilter);
    }

    const handleTotal = () => { 
        const totalItems = cart.reduce( (acum, item) => acum + item.subTotal, 0);
        setTotal(totalItems);
    }

    const handleTotalProducts = () => { 
        const items = cart.reduce( (acum, item) => acum + item.quantity, 0);
        setTotalProducts(items);
    }

    const clearCart = () => setCart([]);
    
    useEffect(() => {
        handleTotal() 
        handleTotalProducts()
    }, [cart])

    useEffect(() => {
        console.log(cart);
    }, [cart])

    const contextValue = {
        cart,
        AddToCart,
        total,
        totalProducts,
        removeProduct,
        clearCart,
        setCart,

    };

    return <CartContext.Provider value={ contextValue }> {children} </CartContext.Provider>
}
