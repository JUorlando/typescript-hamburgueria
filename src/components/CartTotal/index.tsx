import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../contexts/CartContext";

export const CardTotal = () => {
  const { currentSale, setCurrentSale, price, setCount } =
    useContext(CartContext);

  if (currentSale === undefined) {
    return (
      <>
        <h1>O carrinho está vazio!</h1>
      </>
    );
  } else {
    return (
      <>
        <div>
          <p>Total</p>
          <p className="somaTotal">R${price.toFixed(2)}</p>
        </div>
        <button
          onClick={() => {
            setCurrentSale([]);
            setCount(0);
            toast.error("Produtos removidos!")
          }}
        >
          Remover Todos
        </button>
      </>
    );
  }
};
