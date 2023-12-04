import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {

    const {totalProducts} = useContext(CartContext);

    return (
        <Link to="/Cart">
            <div className="flex gap-2">
                    <img src="/img/Carrito-1.png" alt="Imagen carrito" className=" w-10 h-10 " />
                    <p>{totalProducts}</p>
            </div>
        </Link>
    )
}
