import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Product } from "../types/productType";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Cart } from "../context/CartContext";

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const {setCart } = useContext(CartContext);
  const { id } = useParams();
  useEffect(() => {
    const getData = () =>
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));

    getData();
  }, [id]);

  function addToCart() {
    setCart((prevState: Cart) => {
      if (product && product.title && typeof product.price === 'number' && typeof product.image === 'string') {
        const itemIndex = prevState.cartItems.findIndex(e => e.itemName === product.title);
  
        if (itemIndex !== -1) {
          // Product exists, increment itemCount
          const newCartItems = [...prevState.cartItems];
          newCartItems[itemIndex] = {
            ...newCartItems[itemIndex],
            itemCount: newCartItems[itemIndex].itemCount + 1,
          };
          return {
            ...prevState,
            cartItems: newCartItems,
            totalCount: prevState.totalCount + 1,
            totalPrice: prevState.totalPrice + newCartItems[itemIndex].price
          };
        } else {
          // Product does not exist, add new product to cart
          const newProduct = { itemName: product.title, itemCount: 1, price: product.price, itemPicture: product.image };
          return {
            ...prevState,
            cartItems: [...prevState.cartItems, newProduct],
            totalCount: prevState.totalCount + 1,
            totalPrice: prevState.totalPrice + newProduct.price
          };
        }
      }
      return prevState;
    });
  }
  
  return (
    <div className=" flex flex-col max-w-6xl mx-auto justify-center items-center bg-gray-200 p-2 rounded">
      <div className="p-2 border-2 rounded">
        <img className="object-contain h-96 w-96" src={product?.image} />
      </div>
      <h1 className="font-bold text-2xl m-2 text-orange-600">
        {product?.title}
      </h1>
      <h1 className="font-bold text-xl m-2 text-orange-400">
        {product?.category}
      </h1>
      <h1 className="font-bold text-2xl m-2 text-red-600">${product?.price}</h1>
      <button onClick={addToCart} className="p-2 m-2 bg-orange-600 rounded-full text-rose-50 font-bold">
        Add To Cart
      </button>
      <h1 className="m-2 font-bold text-2xl text-gray-600">Product Ratings</h1>
      <div className="flex">
        <div className="mx-4 font-bold text-xl">
          <h1 className="text-gray-500">{product?.rating.count} Ratings</h1>
        </div>
        <div className="mx-2 font-bold text-xl flex flex-row">
            <h1>{product?.rating.rate}</h1>
            <FaStar className="m-1"/>
            </div>
      </div>
      <h1 className="m-2 font-bold text-2xl text-gray-600">
        Product Description
      </h1>
      <h1>{product?.description}</h1>
    </div>
  );
};

export default ProductPage;
