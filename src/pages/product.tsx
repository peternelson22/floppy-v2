import { Link, useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';
import { useState } from 'react';

export const loader = async ({ params }: any) => {
  const res = await customFetch(`products/${params.id}`);

  const product = res.data.data;
  return product;
};

const Product = () => {
  const product = useLoaderData() as ProductsData;
  const { image, title, price, description, colors, company } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(parseInt(e.target.value));
  };
  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className='mt-4 grid gap-y-6 sm:grid-cols-2 items-center sm:gap-x-12'>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className='w-full h-56 sm:h-96 object-cover rounded-lg'
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-info font-bold mt-2'>{company}</h4>

          <p className='mt-3 text-xl'>{formatPrice(price)}</p>

          <p className='mt-4 leading-8'>{description}</p>

          {/* COLORS */}
          <div className='mt-4'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className={`badge  w-6 h-6 mr-2  ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              value={amount}
              onChange={handleAmount}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          {/* CART BUTTON */}
          <div className='mt-6 '>
            <button
              className='btn btn-info btn-md'
              onClick={() => console.log('add to bag')}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;
