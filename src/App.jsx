import { Cart, ItemDetail, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext";
import { ProductContextProvider } from "./context/ProductContext";
import { Checkout } from "./components/Checkout/Checkout";

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <ProductContextProvider>
        <CartContextProvider>
          <div className=" flex flex-col items-center bg-slate-800 ">
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Tales Petshop"} />} />
              <Route path="/category/:category" element={<ItemListContainer/>} />
              <Route path="/Item/:id" element={<ItemDetailContainer />} />
              <Route path="/Cart" element={ <Cart/>} />
              <Route path="/Checkout" element={ <Checkout/>} />
            </Routes>
          </div>         
        </CartContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
    </>
  )
}
