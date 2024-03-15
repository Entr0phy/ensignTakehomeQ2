import { useContext } from "react";
import { CartContext, cartItem, Cart } from "../context/CartContext";
const MyCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeQuantity = (cartItem: cartItem) => {
    setCart((prevState: Cart) => {
      const newCartItem = [...prevState.cartItems];
      const itemIndex = prevState.cartItems.findIndex((e) => e === cartItem);
      newCartItem[itemIndex] = {
        ...newCartItem[itemIndex],
        itemCount: newCartItem[itemIndex].itemCount - 1,
      };
      return {
        ...prevState,
        cartItems: newCartItem,
        totalCount: prevState.totalCount - 1,
        totalPrice: prevState.totalPrice - cartItem.price,
      };
    });
  };

  const addQuantity = (cartItem: cartItem) => {
    setCart((prevState: Cart) => {
      const newCartItem = [...prevState.cartItems];
      const itemIndex = prevState.cartItems.findIndex((e) => e === cartItem);
      newCartItem[itemIndex] = {
        ...newCartItem[itemIndex],
        itemCount: newCartItem[itemIndex].itemCount + 1,
      };
      return {
        ...prevState,
        cartItems: newCartItem,
        totalCount: prevState.totalCount + 1,
        totalPrice: prevState.totalPrice + cartItem.price,
      };
    });
  }; 

  const removeItem = (cartItem: cartItem) => {
    setCart((prevState: Cart) => {
      const newCartItem = [...prevState.cartItems];
      const itemIndex = prevState.cartItems.findIndex((e) => e === cartItem);
      newCartItem.splice(itemIndex, 1);
      return {
        ...prevState,
        cartItems: newCartItem,
        totalCount: prevState.totalCount - cartItem.itemCount,
        totalPrice: prevState.totalPrice - cartItem.itemCount * cartItem.price
      }
    })
  }
  return (
    <div className="flex flex-col max-w-6xl mx-auto justify-center items-center bg-gray-200 p-2 rounded ">
      <h1 className="font-bold text-xl text-orange-500">My Cart</h1>
      <div className="flex flex-col w-full">
        {cart.cartItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 items-center p-2 border-2 border-rose-50 rounded my-2">
            <div className="col-span-1">
              <img
                className="h-24 w-24 object-contain"
                src={item.itemPicture}
                alt={item.itemName}
              />
            </div>
            <p className="col-span-2 font-semibold mx-2">{item.itemName}</p>

            <div className="col-span-1 flex flex-row justify-between border-2 border-gray-300">
              <button
                className=" text-right font-bold text-2xl border-2 px-4 border-r-gray-300"
                onClick={() => removeQuantity(item)}
                disabled={item.itemCount < 2}>
                -
              </button>
              <p className="font-semibold my-3 text-gray-600 text-center">
                {item.itemCount}x
              </p>
              <button className=" text-left font-bold text-2xl border-2 px-4 border-l-gray-300" onClick={()=> addQuantity(item)}>
                +
              </button>
            </div>

            <p className="col-span-1 font-semibold mx-2 text-red-600 text-right">
              ${item.price}
            </p>
            <button className="col-span-1 font-semibold mx-2 p-2 bg-orange-400 text-center rounded" onClick={() => removeItem(item)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <p className="font-bold text-xl text-orange-600">
        Total Cost: ${cart.totalPrice.toFixed(2)}
      </p>
    </div>
  );
};

export default MyCart;
