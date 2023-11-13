import { Link } from "react-router-dom"
import { Button } from "../Button/Button"


export const Item = ( { name, description, id } ) => {

    return (
        <>
            <div className=" grid grid-flow-row justify-items-center items-center border-solid border-2 shadow-md shadow-orange-500 m-2 p-2 h-60 w-52 text-zinc-400 ">
                <p>Nombre: {name} </p>
                <p>Descripcion: {description} </p>
                <Link to={`/Item/${id}`}>
                    <Button color=" border-solid border-2 bg-orange-500/75 hover:bg-orange-500 text-gray-950" text="Detalles"/>
                </Link>
            </div>
        </>
    )
}
