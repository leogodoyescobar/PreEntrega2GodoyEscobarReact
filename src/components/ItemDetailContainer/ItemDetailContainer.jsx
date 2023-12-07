import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ProductContext } from "../../context/ProductContext";

export const ItemDetailContainer = () => {

  const { products, isLoading, getProducts } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    // Filtrar el producto por ID cuando se cargan los productos
    const filteredProduct = products.find((product) => product.id === id);

    if (filteredProduct) {
      setProduct(filteredProduct);
    } else {
      // Si no se encuentra el producto en el estado local, volver a obtener los productos
      getProducts().then(() => {
        const updatedProduct = products.find((product) => product.id === id);
        setProduct(updatedProduct);
      });
    }
  }, [id, products, getProducts]);

    return (
        <div className=" h-screen m-10">
            <div  className=" my-10 p-4 border-solid border-orange-500 border-2 rounded-md shadow-md shadow-orange-500 w-96 h-120">
              {isLoading ? ( <p>Cargando producto...</p> ) : ( product && <ItemDetail {...product} />)}
            </div>
        </div>
    )
}

