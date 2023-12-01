// import {useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from "../../config/firebaseConfig";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export const ItemListContainer = ({greeting}) => {

    
    // const [products, setProducts] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    const {category} = useParams();
    const { products, isLoading } = useContext( ProductContext );

    // useEffect(() => {
    //     const myProducts = query(collection(db, "products"));
    //     setIsLoading(true);
    //     getDocs(myProducts)
    //         .then( resp => {
    //             const myProductsList = resp.docs.map(doc => ({ id: doc.id, ...doc.data()}));
    //             if (category) {
    //                 const productsFilter = myProductsList.filter(product => product.category === category);
    //                 setProducts (productsFilter)
    //                 setIsLoading(false);
    //             } else{
    //                 setProducts(myProductsList);
    //                 setIsLoading(false);
    //             }
    //         })
    //         .catch(error => console.log(error));
    //         setIsLoading(true);
    // }, [category]);

    const filterProductsByCategory = (products, category) => {
        return category ? products.filter((product) => product.category === category) : products;
    };
        
    return (
        <>
        <div className=" text-gray-400 pt-5 "> {greeting} </div>
        { isLoading ? <h2>Cargando productos ..</h2> : <ItemList products={filterProductsByCategory(products, category)} />}        
        </>
    );
};
