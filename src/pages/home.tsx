import { QueryClient } from '@tanstack/react-query';
import FeaturedProducts from '../components/FeaturedProducts';
import Hero from '../components/Hero';
import { customFetch } from '../utils';

const url = '/products?featured=true';

const fetchFeaturedProducts = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient: QueryClient) => async () => {
  const res = await queryClient.ensureQueryData(fetchFeaturedProducts);
  const products = res.data.data;

  return { products };
};

const Home = () => {
  return (
    <div className='page'>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
export default Home;
