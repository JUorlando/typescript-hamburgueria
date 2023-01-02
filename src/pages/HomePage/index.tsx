import React from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { Container } from "../../styles/container";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductList />
        <Cart />
      </Container>
    </>
  );
};
