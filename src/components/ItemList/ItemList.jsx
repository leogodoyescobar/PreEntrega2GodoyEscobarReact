import { useContext } from "react"
import { Item } from "../Item/Item"
import { ProductContext } from "../../context/ProductContext"

export const ItemList = ({}) => {
    
    const {products} = useContext(ProductContext);
    
    return (
        <>
            <div className=" flex flex-wrap w-5/6 py-10 mb-10">
                {products.map( product => <Item key={product.id} {...product} />)}
            </div>
        </>
    )
}
