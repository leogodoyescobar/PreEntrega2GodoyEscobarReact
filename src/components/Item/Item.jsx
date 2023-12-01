import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import React from 'react';


export const Item = ( { img, name, description, id } ) => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className=" grid grid-flow-row justify-items-center items-center border-solid  shadow-md shadow-orange-500 m-2 p-2 h-80 w-72 text-zinc-400 ">
                <p>
                    <img className=" h-40 w-40" src={img}></img>
                </p>
                <p>
                    <span className=" font-bold">Nombre: </span>{name} 
                </p>
                <p>
                    <span className=" font-bold">Descripcion: </span> {description} 
                </p>
                <div className=" flex justify-center gap-4">
                    <Link to={`/Item/${id}`}>
                        <Button color=" border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950" text="Detalles" functionClick={scrollToTop} />
                    </Link>
                    <Button color=" border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950 " text="Añadir" />
                </div>
            </div>
        </>
    )
}
