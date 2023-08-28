import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartTotals from '../components/CartTotals';
import CheckoutForm from '../components/CheckoutForm';
import SectionTitle from '../components/SectionTitle';
import { useCartSelector } from '../features/hooks/app';

export const loader = (store: Store) => {
  const user = store.getState().user.user;
  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const { cartTotal } = useCartSelector();
  if (cartTotal === 0) {
    return (
      <div className='page'>
        <SectionTitle text='Your cart is empty' />
      </div>
    );
  }
  return (
    <div className='page'>
      <SectionTitle text='Place your order' />
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </div>
  );
};
export default Checkout;
