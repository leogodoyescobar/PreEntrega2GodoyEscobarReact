import { Button } from "../Button/Button";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useCount } from "../../hooks";

export const ItemDetail = ( { id, img, name, description, price, stock} ) => {

    const { AddToCart} = useContext(CartContext);
    const {increment, decrement, count} = useCount(0, stock);

    return (
        <>
            <div className=" flex justify-center p-2">
                <img className=" h-50 w-50" src={img}></img>
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
                <div className=" flex justify-center border-2 border-zinc-400 text-orange-500">
                    { count < stock ? <Button classname=" w-5 " text="+" functionClick={increment} /> : <Button classname=" w-5 " text="+" />}
                        <p> {count} </p>
                    <Button text="-" functionClick={decrement}>-</Button>
                </div>
            </div>
            <div className=" flex justify-center h-28 items-center">
                <Link to="/">
                    <Button color=" border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950 mx-5 " text="Volver"/>
                </Link>
                <Button color=" border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950 mx-5" text="Añadir" functionClick={() => AddToCart( {id, name, price}, count)} />
            </div>
            
        </>
    )
}
