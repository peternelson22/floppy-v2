import { generateAmountOptions } from '..';
import { editItem, removeItem } from '../features/cartSlice';
import { useAppDispatch } from '../features/hooks/app';
import { formatPrice } from '../utils';

type Props = {
  cartItem: CartProduct;
};

const CartItem = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();

  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  return (
    <article
      key={cartID}
      className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className='h-56 w-full rounded-lg sm:h-32 sm:w-32 object-cover'
      />
      {/* INFO */}
      <div className='sm:ml-16 sm:w-48'>
        {/* TITLE */}
        <h3 className='capitalize font-medium'>{title}</h3>
        {/* COMPANY */}
        <h4 className='mt-2 capitalize text-sm text-info'>{company}</h4>
        {/* COLOR */}
        <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
          color :
          <span
            className='badge badge-sm'
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className='sm:ml-12'>
        {/* AMOUNT */}
        <div className='form-control max-w-xs'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text'>Amount</span>
          </label>
          <select
            name='amount'
            id='amount'
            className='mt-2 select select-base select-bordered select-xs'
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className='mt-2 link link-info link-hover text-sm capitalize'
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
