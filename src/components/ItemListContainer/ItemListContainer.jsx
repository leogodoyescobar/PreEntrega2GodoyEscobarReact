import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";

export const ItemListContainer = ({greeting}) => {
    
    const {category} = useParams();
    const { products, isLoading, getProducts } = useContext( ProductContext );
        

    useEffect(() => {
        getProducts(category)
    }, [category]);
        
    return (
        <>
        <div className=" text-gray-400 pt-5 "> {greeting} </div>
        { isLoading ? <h2>Cargando productos ..</h2> : <ItemList products={products} />}
        </>
    );
};
