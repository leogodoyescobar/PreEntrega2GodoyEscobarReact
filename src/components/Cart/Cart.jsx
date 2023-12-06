import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "../Button/Button";
import { Count } from "../Count/Count";
import { Link } from "react-router-dom";
import { Checkout } from "../Checkout/Checkout";
import { useCount } from "../../hooks";

export const Cart = ( stock) => {

    const {increment, decrement, count} = useCount(0, stock);
    const { cart, total, removeProduct, AddToCart, setCart } = useContext(CartContext);

    const buttonClassName = 'border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950 mx-5';
    

    return (
        <>
            <div className=" h-auto text-center w-full bg-slate-800  m-5">
                <h2 className="text-gray-400 underline ">Carrito de compras</h2>
                {cart.length === 0 ? (
                    <p className=" mt-2 text-gray-400">Carrito vacio</p>
                ) : (
                    <>
                        <div className=" flex flex-col items-center">
                            {cart.map((item) => (
                            <div key={item.id} className=" border-2 p-4 m-5 text-gray-400">
                                <p>Nombre: {item.name} </p>
                                <p>Precio Unitario: ${item.price} </p>
                                <p>Cantidad: {item.quantity} </p>
                                <p>Sub total: {item.subTotal} </p>
                                <div className=" flex justify-center border-2 border-zinc-400 text-orange-500">
                                    <Button classname=" w-5 " text="+" functionClick={increment} />
                                        <p> {count} </p>
                                    <Button text="-" functionClick={decrement}>-</Button>
                                </div>
                                <div className=" m-1">
                                <Button text="Eliminar" color={buttonClassName} functionClick={() => removeProduct(item.id)}></Button>
                                <Button text="Agregar" color={buttonClassName} functionClick={() => AddToCart(item, count)} ></Button>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div  className="  flex justify-center border-solid border-2 border-orange-500 mx-96 text-gray-400 ">
                            <p> Total de la compra ${total} </p>
                        </div>
                        <Button text="Vaciar carrito" color={'border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950 mx-5 mt-4 w-40 h-10'} functionClick={() => setCart([])}></Button>
                    </>
                )}
                <Checkout/>
            </div>
        </>
    );
};
