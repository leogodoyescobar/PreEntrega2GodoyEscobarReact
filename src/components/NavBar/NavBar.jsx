import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <>
            <div className=" flex justify-around items-center w-screen gap-40 h-24 text-zinc-400 bg-slate-900">
                <div className=" flex items-center">
                    <Link to={"/"}>
                        <img src="/img/logo.webp" alt="Logo" className="  w-24 h-24 " />
                    </Link>
                    <Link to={"/"}>
                        <Button text="Inicio"/>
                    </Link>
                    <Link to={"/category/perro"}>
                        <Button text="Perros"/>
                    </Link>
                    <Link to={"/category/gato"}>
                        <Button text="Gatos"/>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <CartWidget/>
                </div>
            </div>
        </>
    )
}
