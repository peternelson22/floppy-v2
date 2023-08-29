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
import { action as registerAction } from './pages/register';
import { action as loginAction } from './pages/login';
import { store } from './store';
import { loader as checkoutLoader } from './pages/checkout';
import { action as checkoutAction } from './components/CheckoutForm';
import { loader as loaderAction } from './pages/orders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: landingLoader(queryClient) },
      { path: 'about', element: <About /> },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader(queryClient),
      },
      {
        path: 'products/:id',
        element: <Product />,
        loader: productLoader(queryClient),
      },
      { path: 'cart', element: <Cart /> },
      {
        path: 'checkout',
        element: <Checkout />,
        //@ts-ignore
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: loaderAction(store, queryClient),
      },
    ],
  },
  { path: 'login', element: <Login />, action: loginAction(store) },
  { path: 'register', element: <Register />, action: registerAction },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
