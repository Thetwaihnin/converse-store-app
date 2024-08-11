import { createContext, ReactNode, useContext, useState } from "react";
import { Shoe } from "../shoes/shoeData";

interface CartContextProps {
    cartItem: Shoe[];
    click: boolean;
    setClick: (value:any)=>void;
    addToCart: (item: Shoe) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItem, setCartItem] = useState<Shoe[]>([]);
    const [click,setClick] = useState<boolean>(false);

    const addToCart = (item: Shoe) => {
        setCartItem([...cartItem, item]);
        setClick(!click);
        console.log(cartItem.map(item=>item.name));
    }

    return (
        <CartContext.Provider value={{ cartItem, addToCart,click,setClick }}>
            {children}
        </CartContext.Provider>
    );
}

// CartProvider.Provider = ContextProvider;

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be within a cartprovider");
    }

    return context;
}

export default CartProvider;