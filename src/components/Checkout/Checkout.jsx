import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { CartContext } from "../../context/CartContext";

export const Checkout = () => {

    const {total, cart, setCart} = useContext(CartContext);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [orderId, setOrderId] = useState(null);

    const handleOrder = async (e) => { 
        e.preventDefault()

        try{
            const neworder = {
                name,
                surname,
                items: cart,
                total,
                email,
            }
    
            const docRef = await addDoc(collection(db, "orders"), neworder );
            setOrderId(docRef.id);
            console.log(orderId);
            setName("");
            setSurname("");
            setEmail("");
            setEmail2("");
            setCart([]);

        } catch (error) {
            console.error("Error al agregar la orden a Firebase", error);
        }
    };

    const buttonClassName = 'border-solid bg-orange-500/75 hover:bg-orange-500 text-gray-950 mx-5 mt-4 rounded-lg';

    return (
        <div className=" flex h-screen justify-center ">
            {cart.length === 0 ? (
                    <p className=" mt-2 text-gray-400">Añada productos</p>
                ) : (
            <div>
            <form className=" flex flex-col m-5 w-60" onSubmit={handleOrder} >
            <label htmlFor="name" className=" text-gray-400">Nombre</label>
            <input type="text"  value={name} onChange={(e) => setName(e.target.value)} required/>
            <label htmlFor="surname" className=" text-gray-400">apellido</label>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required/>
            <label htmlFor="email" className=" text-gray-400">email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <label htmlFor="email2" className=" text-gray-400">verifique email</label>
            <input type="email" value={email2} onChange={(e) => setEmail2(e.target.value)} required/>
            { name && surname && email && email2 ? <button type="submit" className={buttonClassName}>Enviar</button> : <button type="text" className={buttonClassName}>Complete los campos</button> }
            </form>
            <p>Ingrese sus datos para finalizar la compra</p>
            </div>
            )}
            <div>
                {orderId && (
                    <p>Orden de compra: {orderId}</p>
                )}
            </div>
        </div>
    )
}
