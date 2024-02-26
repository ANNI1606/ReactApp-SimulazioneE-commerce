import { createContext, useContext, useState, useEffect } from "react";
import getProducts from "./productApi";
import { calculateTotalPrice, addToCart } from "../component/cartUtils";
import { AppContextType } from "./Declarations";

const AppContext = createContext<AppContextType | null>(null);
export const useAppContext = () => useContext(AppContext);
export function AppProvider({ children }: any) {
  //@ts-ignore
  const [products, setProducts] = useState<null | object[]>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [isCart, setIsCart] = useState(false);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const productsArray = products || [];
    if (productsArray.length > 0) {
      setTotalPrice(calculateTotalPrice(cart, productsArray, isCart));
    }
  }, [isCart, cart, products]);

  const toggleView = () => {
    setIsCart(!isCart);
  };

  const onClickBtn = (id: any) => {
    setCart(addToCart(id, cart));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        isCart,
        totalPrice,
        toggleView,
        onClickBtn,
        addToCart(id) {},
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
