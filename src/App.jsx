import { Cart, ItemDetail, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext";
import { ProductContextProvider } from "./context/ProductContext";

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <ProductContextProvider>
        <CartContextProvider>
          <div className=" flex flex-col items-center bg-slate-800 bg-blend-screen ">
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Tales Petshop"} />} />
              <Route path="/category/:category" element={<ItemListContainer/>} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/Cart" element={ <Cart/>} />
            </Routes>
          </div>
          <Cart/>
        </CartContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
    </>
  )
}
