import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsGrid = () => {
  const { products } = useLoaderData() as Products;

  const content = products.map((product) => {
    const { price, image, title } = product.attributes;
    return (
      <Link
        key={product.id}
        to={`/products/${product.id}`}
        className='card w-full shadow-xl hover:shadow-2xl transition duration-300 '
      >
        <figure className='px-4 pt-4'>
          <img
            src={image}
            alt={title}
            className='rounded-xl h-auto md:h-48 w-full object-cover'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h4 className='card-title capitalize tracking-wide whitespace-nowrap'>
            {title}
          </h4>
          <span className='text-info'>{formatPrice(price)}</span>
        </div>
      </Link>
    );
  });

  return (
    <div className='pt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {content}
    </div>
  );
};
export default ProductsGrid;
