import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/Global";
import { LoginProvider } from "./contexts/UserContesxts/LoginContexts";
import { RegisterProvider } from "./contexts/UserContesxts/RegisterContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <RegisterProvider>
          <ProductsProvider>
            <CartProvider>
              <GlobalStyles />
              <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <App />
            </CartProvider>
          </ProductsProvider>
        </RegisterProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);
