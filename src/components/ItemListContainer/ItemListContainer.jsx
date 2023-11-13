import { getProducts } from "../../asyncMock"
import {useState, useEffect} from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({greeting}) => {

    const {category} = useParams();

    const [products, setProducts] = useState([])

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        getProducts()
        .then( (resp) => {
            if (category) {
                const productsFilter = resp.filter(product => product.category === category);
                setProducts (productsFilter)
                setIsLoading(false);
            } else{
                setProducts(resp);
                setIsLoading(false);
            }
        })
        .catch( error => console.log(error));
    }, [category])
        
    return (
        <>
        <div className=" text-gray-400"> {greeting} </div>
        { isLoading ? <h2>Cargando productos ..</h2> : <ItemList products={products} />}
        {/* <Count /> */}
        </>
    )
}