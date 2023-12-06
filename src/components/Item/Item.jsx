import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { useCount } from "../../hooks";


export const Item = ( { img, name, description, id, stock, price } ) => {

    const { AddToCart} = useContext(CartContext);
    const {increment, decrement, count} = useCount(0, stock);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className=" grid grid-flow-row justify-items-center items-center border-solid  shadow-md shadow-orange-500 m-2 p-2 h-96 w-72 text-zinc-400 ">
                <p>
                    <img className=" h-40 w-40" src={img}></img>
                </p>
                <p>
                    <span className=" font-bold">Nombre: </span>{name} 
                </p>
                <p>
                    <span className=" font-bold">Descripcion: </span> {description} 
                </p>
                <p>
                    <span className=" font-bold">Stock: </span> {stock}
                </p>
                <p>
                    <span className=" font-bold">Precio: </span> {price}
                </p>
                <div className=" flex justify-center border-2 border-zinc-400 text-orange-500">
                    { count < stock ? <Button classname=" w-5 " text="+" functionClick={increment} /> : <Button classname=" w-5 " text="+" />}
                        <p> {count} </p>
                    <Button text="-" functionClick={decrement}>-</Button>
                </div>
                <div className=" flex justify-center gap-4">
                    <Link to={`/Item/${id}`}>
                        <Button color=" border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950" text="Detalles" functionClick={scrollToTop} />
                    </Link>
                    <Button color=" border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950 " text="Añadir" functionClick={ () => AddToCart ({id, name, price}, count )} />
                </div>
            </div>
        </>
    )
}
