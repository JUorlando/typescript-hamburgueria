import { useContext } from "react";
import { CartContext, iCartProduct } from "../../contexts/CartContext";
import { ProductCart } from "./style";
import { HiPlusSm, HiMinusSm } from "react-icons/hi"
import { FiTrash2 } from "react-icons/fi"

export const CartProduct = () => {

  const {currentSale, removeCard, add, remove, count, setCount} = useContext(CartContext)

  return (
    <>
    {currentSale.map((element: iCartProduct) => (
        <ProductCart key={element.id}>
          <img src={element.img} alt={element.name}/>
          <div className="text">
          <div className="nameButton">
          <h2>{element.name}</h2>
          <button onClick={() => {removeCard(element.id); setCount(count - element.count)}}><FiTrash2/></button>
          </div>
          <div className="calculator">
          <button className="remove" onClick={() => {remove(element.id); setCount(count - 1)}}><HiMinusSm/></button>
          <p className="number">{element.count}</p>
          <button className="add" onClick={() => {add(element.id); setCount(count + 1)}}><HiPlusSm/></button>
          </div>
          </div>
        </ProductCart>
    ))}
    </>
  );
};
