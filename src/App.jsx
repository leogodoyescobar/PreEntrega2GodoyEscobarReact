import { Cart, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
      <div className=" flex flex-col items-center bg-slate-800 h-screen">
        {/* <h1 className=" text-zinc-400 text-2xl ">Tales Petshop</h1> */}
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Tales Petshop"} />} />
          <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos a Tales Petshop"} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={ <Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
