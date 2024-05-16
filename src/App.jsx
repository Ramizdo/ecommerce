import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import CartContainer from "./Components/Pages/Cart/CartContainer";
import ItemDetailContainer from "./Components/Pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./Components/Pages/ItemListContainer/ItemListContainer";
import "./App.css";
import { Checkout } from "./Components/Pages/Checkout/Checkout";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>ERROR 404</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
