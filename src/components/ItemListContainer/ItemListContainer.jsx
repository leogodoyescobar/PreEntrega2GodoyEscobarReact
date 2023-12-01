import {useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const ItemListContainer = ({greeting}) => {

    const {category} = useParams();

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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

        
    return (
        <>
        <div className=" text-gray-400 pt-5 "> {greeting} </div>
        { isLoading ? <h2>Cargando productos ..</h2> : <ItemList products={products} />}        
        </>
    )
}