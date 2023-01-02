import { createContext, useContext, useState } from "react";
import React from "react";
import { ProductsContext } from "./ProductsContext";
import { toast } from "react-toastify";

export const CartContext = createContext({} as iCartContext);

interface iCartProviderProps {
  children: React.ReactNode;
}

export interface iCartProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  count: number;
}

export interface iCartContext {
  currentSale: iCartProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iCartProduct[]>>;
  handleAddProducts: (id: number) => void;
  removeCard: (id: number) => void;
  openModal: () => void;
  closeModal: () => void;
  modalIsOpen: boolean;
  add: (id: number) => void;
  remove: (id: number) => void;
  price: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [currentSale, setCurrentSale] = useState<iCartProduct[]>([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [count, setCount] = useState(0)

  const { products } = useContext(ProductsContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleAddProducts(id: number) {
    const current = products.find((element: iCartProduct) => element.id === id);

    setCurrentSale((oldProducts: any) => {
      if (
        !oldProducts.find((element: iCartProduct) => element.id === current?.id)
      ) {
        return [...oldProducts, { ...current, count: 1 }];
      } else {
        return oldProducts.map((iten: Required<iCartProduct>) =>
          iten.id === current?.id ? { ...iten, count: iten.count + 1 } : iten
        );
      }
    });
  }

  function removeCard(id: number) {
    const newList = currentSale.filter((card) => card.id !== id);
    setCurrentSale(newList);
  }

  function add (id: number) {
    const addProduct = currentSale.map((iten) =>
      iten.id === id ? { ...iten, count: iten.count + 1 } : iten
    );
    setCurrentSale(addProduct);
  };

  function remove (id: number) {
    const product = currentSale.find((element) => element.id === id);
    if (product?.count === 1) {
      const newList = currentSale.filter((card) => card.id !== id);
      setCurrentSale(newList);

    } else {
      const removeProduct = currentSale.map((iten) =>
        iten.id === id ? { ...iten, count: iten.count - 1 } : iten
      );
      setCurrentSale(removeProduct);
    }
  };

  const price = currentSale.reduce((acc, cur) => acc + cur.price * cur.count, 0)

  return (
    <CartContext.Provider
      value={{
        handleAddProducts,
        removeCard,
        currentSale,
        setCurrentSale,
        openModal,
        closeModal,
        modalIsOpen,
        add,
        remove,
        price,
        count,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
