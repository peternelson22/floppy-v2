import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className='align-element py-14'>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default Layout;
