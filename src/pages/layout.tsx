import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';

const Layout = () => {
  const navigate = useNavigation();
  const isPageLoading = navigate.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />

      {isPageLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-14'>
          <Outlet />
        </section>
      )}
      <Footer />
    </>
  );
};
export default Layout;
