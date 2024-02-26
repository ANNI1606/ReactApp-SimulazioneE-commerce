import React, { createContext, useContext } from "react";
import { CardProps, Product, ProviderValue } from "../services/Declarations";

const CardContext = createContext<CardProps | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  return context;
};

export function CardProvider({ children }: { children: React.ReactNode }) {
  const product: Product = {
    title: "Nome prodotto",
    description: "Descrizione prodotto",
    image: "url-immagine",
    id: "id-prodotto",
    price: 0,
  };
  const onClick = () => {};
  const addToCart = () => {};
  const value: ProviderValue = {
    product,
    onClick,
    addToCart,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}
