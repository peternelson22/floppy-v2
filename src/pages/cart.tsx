import { Link } from 'react-router-dom';
import CartItemsList from '../components/CartItemsList';
import CartTotals from '../components/CartTotals';
import SectionTitle from '../components/SectionTitle';
import { useCartSelector } from '../features/hooks/app';

const Cart = () => {
  const user = null;
  const { numItemsInCart } = useCartSelector();

  if (numItemsInCart === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }
  return (
    <div className='page'>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8  lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Link to='/checkout' className='btn btn-info btn-block mt-8'>
              Proceed to checkout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-info btn-block mt-8'>
              please login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
