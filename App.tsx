import { useEffect, useState } from "react";
import "./App.css";
import getProducts from "./services/productApi";
import Card from "./component/card";

function App() {
  const [products, setProducts] = useState<null | object[]>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [isCart, setIsCart] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(); // Assumi che getProducts sia una funzione asincrona
      setProducts(response);
    };

    fetchProducts();
  }, []);
  function onClickBtn(id: string) {
    setCart([...cart, id]);
  }

  if (!products) return <h1>404</h1>;

  return (
    <>
      <nav>
        {" "}
        <button
          onClick={() => setIsCart(!isCart)}
          style={{ height: "40px", width: "40px" }}
        >
          {cart.length}
        </button>
      </nav>
      {isCart
        ? products
            .filter((product: any) => cart.includes(product.id))
            .map((product: any) => (
              <Card product={product} onClick={onClickBtn} />
            ))
        : products.map((product: any) => (
            <Card product={product} onClick={onClickBtn} />
          ))}
    </>
  );
}

export default App;
