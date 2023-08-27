import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Cart,
  Checkout,
  ErrorPage,
  Home,
  Layout,
  Login,
  Orders,
  Product,
  Products,
  Register,
} from './pages';
import { loader as landingLoader } from './pages/home';
import { loader as productLoader } from './pages/product';
import { loader as productsLoader } from './pages/products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: landingLoader },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products />, loader: productsLoader },
      { path: 'products/:id', element: <Product />, loader: productLoader },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'register', element: <Register /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
