import { useContext, useEffect, useState } from "react"
// import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ProductContext } from "../../context/ProductContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";


export const ItemDetailContainer = () => {

    // const { getProductById } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {productId} = useParams();

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);

      try {
        const productDocRef = doc(db, "products", productId);
        const productSnapshot = await getDoc(productDocRef);

        if (productSnapshot.exists()) {
          const productData = { id: productSnapshot.id, ...productSnapshot.data() };
          setProduct(productData);
        } else {
          console.log('No se encontró el producto con el ID proporcionado.');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }

      setIsLoading(false);
    };

    getProduct();
  }, [productId]);


  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <p>No se encontró el producto.</p>;
  }
    
    // useEffect(() => {   2da prueba
    //     const selectedProduct = getProductById(id);
    //     setProduct(selectedProduct);
    //     console.log(product);
    // }, [getProductById, id]);

    // if (!product) {
    //     return <p>Cargando...</p>;
    // }


    // const [product, setProduct] = useState(null); original
    // const {id} = useParams();    
    // useEffect(() => {
    //     getProduct (id)
    //         .then( resp => setProduct(resp))
    //         .catch( err => console.log(err));
    // }, [product])
    

    return (
        <div className=" h-screen m-10">
            <div  className=" my-10 p-4 border-solid border-orange-500 border-2 rounded-md shadow-md shadow-orange-500 w-96 h-120">
                {/* { product && <ItemDetail {...product} /> } */}
                <h2>{product.nombre}</h2>
                <p>Precio: ${product.precio}</p>
                <p>Descripción: {product.descripcion}</p>
            </div>
        </div>
    )
}

