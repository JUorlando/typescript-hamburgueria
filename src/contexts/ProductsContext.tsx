import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { api } from "../services/api";
import { LoginContext } from "./UserContesxts/LoginContexts";

export const ProductsContext = createContext({} as iProductsContext);

interface iProductsProviderProps {
  children: React.ReactNode;
}

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  count: number;
}

export interface iGetProductsResponse {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iProductsContext {
  products: iProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  filtredProducts: string;
  setFiltredProducts: React.Dispatch<React.SetStateAction<string>>;
  showProducts: iProducts[];
}

export const ProductsProvider = ({ children }: iProductsProviderProps) => {
  const [products, setProducts] = useState<iProducts[]>([]);

  const [filtredProducts, setFiltredProducts] = useState("");

  const {loading, setLoading} = useContext(LoginContext)

  const showProducts = !filtredProducts
    ? products
    : products.filter((iten: iProducts) =>
        iten.name.toLowerCase().includes(filtredProducts.toLowerCase())
      );

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          const response = await api.get("/products", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProducts(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        setProducts([])
        setLoading(false)
      }
    })();
  }, [loading]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        filtredProducts,
        setFiltredProducts,
        showProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
