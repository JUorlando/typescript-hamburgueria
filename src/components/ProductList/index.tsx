import { Products } from "../Products";
import { StyledProductList } from "./style";

export const ProductList = () => {
  return (
    <StyledProductList>
      <ul>
        <Products />
      </ul>
    </StyledProductList>
  );
};
