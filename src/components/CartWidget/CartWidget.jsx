import { Link } from "react-router-dom"

export const CartWidget = () => {
    return (
        <Link to="/Cart">
            <div className="flex gap-2">
                    <img src="/img/Carrito-1.png" alt="Imagen carrito" className=" w-10 h-10 " />
                    <p>3</p>
            </div>
        </Link>
    )
}
