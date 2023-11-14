import { Count } from "../Count/Count"
import { Button } from "../Button/Button";
import { Link } from "react-router-dom"

export const ItemDetail = ( { name, description, price, stock} ) => {

    return (
        <>
            <div className=" text-center p-2">
                <p>imagen</p>
            </div>
            <div>
                <div className=" text-zinc-400 text-left py-5 h-40 ">
                    <p>
                        <span className=" font-bold underline">Nombre:</span> {name}
                    </p>
                    <p>
                        <span className=" font-bold underline">Descripcion:</span> {description}
                    </p>
                    <p>
                        <span className=" font-bold underline">Precio:</span> {price}
                    </p>
                    <p>
                        <span className=" font-bold underline">Stock:</span> {stock}
                    </p>
                </div>
                <div className=" border-2 border-zinc-400 text-orange-500">
                    <Count stock={stock} />
                </div>
            </div>
            <div className=" flex justify-center h-28 items-center">
                <Link to="/">
                    <Button color=" border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950" text="Volver"/>
                </Link>
            </div>
            
        </>
    )
}
