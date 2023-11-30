import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {

    // const {cart} = useContext(CartContext)

    return (
        <div className=" h-screen">
            <h1>Carrito de compras</h1>
            {/* { cart.map( carrito => <p key={carrito.id}> Producto: {carrito.name} precio: {carrito.price}</p>)} */}
        </div>
    )
}
