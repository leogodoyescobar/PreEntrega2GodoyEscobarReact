import { Cart, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext";

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className=" flex flex-col items-center bg-slate-800 bg-blend-screen ">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Tales Petshop"} />} />
          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={ <Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
    <CartContextProvider>
      {/* <Cart/> */}
    </CartContextProvider>
    </>
  )
}
