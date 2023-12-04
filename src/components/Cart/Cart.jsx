import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "../Button/Button";
import { Count } from "../Count/Count";

export const Cart = ( stock) => {

    const { cart, total, removeProduct, AddToCart } = useContext(CartContext);

    return (
        <>
            <div className=" h-screen text-center">
                <h2>Carrito de compras</h2>
                {cart.length === 0 ? (
                    <p>El carrito esta vacio</p>
                ) : (
                    <>
                        <div>
                            {cart.map((item) => (
                            <div key={item.id} className=" border-2 p-4 m-5">
                                <p>Nombre: {item.name} </p>
                                <p>Precio Unitario: ${item.price} </p>
                                <p>Cantidad: {item.quantity} </p>
                                <p>Sub total: {item.subTotal} </p>
                                <div>
                                <Button text="Eliminar" color=" border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950 mx-5" functionClick={() => removeProduct(item.id)}></Button>
                                <Button text="Agregar" color=" border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950 mx-5" functionClick={() => AddToCart(item, 1)} ></Button>
                                </div>
                            </div>
                            ))}
                        </div>
                        <p> Total de la compra ${total} </p>
                    </>
                )}
            </div>
        </>
    );
};
