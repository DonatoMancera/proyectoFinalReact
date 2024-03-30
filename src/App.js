import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarE from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBarE/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<CheckoutForm/>}/>
            <Route path='*' element={<h1>505 NOT FOUND</h1>}/>
          </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;