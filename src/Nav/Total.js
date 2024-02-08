import { useSelector } from "react-redux";

const cart = useSelector((state) => state.cart)

 const getTotal = () => {
  totalquantity=1,
  totalPrice=0
  cart.forEach(item => {
    totalQuantity += item.quantity
    totalPrice += item.price * item.quantity
  })
  return {totalPrice, totalQuantity}
  
}