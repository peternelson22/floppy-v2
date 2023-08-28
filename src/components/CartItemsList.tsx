import { useCartSelector } from '../features/hooks/app';
import CartItem from './CartItem';

const CartItemsList = () => {
  const { cartItems } = useCartSelector();
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </div>
  );
};
export default CartItemsList;
