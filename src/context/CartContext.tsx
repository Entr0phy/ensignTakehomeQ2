import { createContext, useState, Dispatch, SetStateAction, ReactNode, useEffect} from "react";

interface cartItem {
    itemName: string;
    itemCount: number;
    price: number;
}
export interface Cart {
    // optional value for cartItems since cart can be empty
  cartItems: cartItem[];
  totalCount: number;
}

export interface cartContextInterface {
    cart:Cart,
    setCart: Dispatch<SetStateAction<Cart>>
}

// initialised the default cart state based of local storage value of cart
function getInitialCartState() : cartContextInterface ["cart"] {
    if(typeof window !== 'undefined') {
        const storedCart = localStorage.getItem('cart');
        if(storedCart)
            return JSON.parse(storedCart)
    }
    return {
        cartItems: [],
        totalCount:0
    }
}

const defaultState = {
    cart: getInitialCartState(),
    setCart: () => {}
} as cartContextInterface

export const CartContext = createContext<cartContextInterface>(defaultState)

type CartProviderProps = {
    children: ReactNode
}

export default function CartProvider({children} : CartProviderProps) {
    const [cart, setCart] = useState<Cart>(getInitialCartState());

    // automatically  save the cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={{ cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}
 