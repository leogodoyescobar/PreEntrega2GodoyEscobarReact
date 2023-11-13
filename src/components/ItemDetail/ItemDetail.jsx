import { useEffect } from "react";
import { Count } from "../Count/Count"
import { Button } from "../Button/Button";
import { Link } from "react-router-dom"

export const ItemDetail = ( { name, description, category, price, stock} ) => {

    return (
        <>
            <div className=" text-center p-2">
                <p>imagen</p>
            </div>
            <div>
                <div className=" text-left py-5 h-40 ">
                    <p>Nombre: {name}</p>
                    <p>Descripcion: {description}</p>
                    <p>Precio: {price}</p>
                    <p>Stock: {stock}</p>
                </div>
                <div className=" border-2">
                    <Count max={stock} />
                </div>
            </div>
            <div className=" flex justify-center h-28 items-center">
                <Link to="/">
                    <Button color=" border-solid border-2 bg-orange-500/75 hover:bg-orange-500 text-gray-950" text="Volver"/>
                </Link>
            </div>
            
        </>
    )
}
