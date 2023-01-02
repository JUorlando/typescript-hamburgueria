import React, { useContext } from "react";
import { CartProduct } from "../CartProduct";
import { CardTotal } from "../CartTotal";
import { StyledCart } from "./style";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartContext";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: "300px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
  },
};

export const Cart = () => {
  const { modalIsOpen, closeModal, currentSale } = useContext(CartContext);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <StyledCart>
        <div className="modalHeader">
          <h3>Carrinho de compras</h3>
          <button className="closeModal" onClick={closeModal}>
            X
          </button>
        </div>

        <ul>
          <CartProduct />
        </ul>
        <div className="total">
          {currentSale.length ? <CardTotal /> : <div className="emptyCart"><h1>Não existem produtos no carrinho!</h1></div>}
        </div>
      </StyledCart>
    </Modal>
  );
};
