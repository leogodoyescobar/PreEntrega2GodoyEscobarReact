import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null);

    const {id} = useParams();
    
    useEffect(() => {
        getProduct (id)
            .then( resp => setProduct(resp))
            .catch( err => console.log(err));
    }, [product])

    return (
        <div className=" h-screen m-10">
            <div className=" my-10 p-4 border-solid border-orange-500 border-2 rounded-md shadow-md shadow-orange-500 w-96 h-120">
                { product && <ItemDetail {...product} /> }
            </div>
        </div>
    )
}

