import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import CartProvider, { CartContext } from "./context/CartContext";
import Home from "./component/home";
import Cart from "./component/cart";
import Product from "./component/product";
import Error from './component/error'
import { FaShoppingCart } from "react-icons/fa";


function App() {
  const { cart } = useContext(CartContext);
  return (
    <CartProvider>
      <Router>
        <div className="flex justify-between p-4 bg-orange-200">
          <div>
            <Link to="/" className="font-bold text-xl p-2">
              Home
            </Link>
          </div>
          <div className="flex flex-row">
            <FaShoppingCart className="text-3xl m-2"/>
            <Link
              to="/component/cart"
              className="p-2 bg-rose-50 rounded-full font-bold text-xl">
              {cart.totalCount}
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/component/cart" element={<Cart />} />

          <Route path="/component/product/:id" element={<Product/>} />

          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
