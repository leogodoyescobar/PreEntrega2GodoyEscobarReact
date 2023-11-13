import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {id} = useParams();
    
    useEffect(() => {
        getProduct (id)
            .then( resp => setProduct(resp))
            .catch( err => console.log(err));
    }, [product])

    return (
        <div className=" my-10 p-4 border-solid border-2 w-80 h-96">
            { product && <ItemDetail {...product} /> }
        </div>
    )
}

