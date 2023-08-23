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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <Product /> },
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
