import { useState } from "react"
import { Item } from "../Item/Item"

export const ItemList = ({products}) => {
    
    return (
        <>
            <div className=" flex flex-wrap w-5/6">
                {products.map( product => <Item key={product.id} {...product} />)}
            </div>
        </>
    )
}
