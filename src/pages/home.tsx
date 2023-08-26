import FeaturedProducts from '../components/FeaturedProducts';
import Hero from '../components/Hero';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
  const res = await customFetch(url);
  const products = res.data.data;

  return { products };
};

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Home;
