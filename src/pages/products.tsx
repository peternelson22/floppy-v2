import Filters from '../components/Filters';
import PaginationContainer from '../components/PaginationContainer';
import ProductsContainer from '../components/ProductsContainer';
import { customFetch } from '../utils';

const url = '/products';

export const loader = async ({ request }: any) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <div className='grid sm:grid-cols-[200px_1fr] gap-x-6 gap-y-8 mx-auto'>
        <Filters />
        <div>
          <ProductsContainer />
          <PaginationContainer />
        </div>
      </div>
    </>
  );
};
export default Products;
