import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import Home from "./component/home";
import MyCart from "./component/myCart";
import Product from "./component/product";
import Error from "./component/error";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function App() {
  const { cart } = useContext(CartContext);
  return (
    <Router>
      <div className="flex justify-between p-2 bg-orange-200">
        <div>
          <Link to="/" className="font-bold text-xl">
            <FaHome className="text-3xl m-2" />
          </Link>
        </div>
        <div className="flex flex-row">
          <FaShoppingCart className="text-3xl m-2" />
          <Link to="/component/cart" className="">
            <div className="p-2 bg-rose-50 rounded-full font-bold text-xl">
              {cart.totalCount}
            </div>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/component/cart" element={<MyCart />} />

        <Route path="/component/product/:id" element={<Product />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
