export interface AppContextType {
  products: object[] | null;
  cart: string[];
  isCart: boolean;
  totalPrice: number;
  toggleView: () => void;
  onClickBtn: (id: string) => void;
  addToCart: (id: string) => void;
}

export interface Product {
  title: string;
  description: string;
  image: string;
  id: string;
  price: number;
}

export interface CardProps {
  product: Product;
  addToCart: (id: string) => void;
  onClick: (id: string) => void;
}

export interface ProviderValue {
  product: CardProps["product"];
  onClick: CardProps["onClick"];
  addToCart: CardProps["addToCart"];
}
