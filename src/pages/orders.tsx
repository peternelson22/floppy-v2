import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import SectionTitle from '../components/SectionTitle';
import OrderList from '../components/OrderList';
import ComplexPaginationContainer from '../components/ComplexPaginationContainer';
import { QueryClient } from '@tanstack/react-query';

//@ts-ignore
export const ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store: Store, queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const user = store.getState().user.user;

    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        //@ts-ignore
        error?.response?.data?.error?.message ||
        'there was an error accessing your orders';

      toast.error(errorMessage);
      //@ts-ignore
      if (error?.response?.status === 401 || 403) return redirect('/login');

      return null;
    }
  };

const Orders = () => {
  //@ts-ignore
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return (
      <div className='page'>
        <SectionTitle text='Please make an order' />
      </div>
    );
  }
  return (
    <div className='page'>
      <SectionTitle text='Your Orders' />
      <OrderList />
      <ComplexPaginationContainer />
    </div>
  );
};
export default Orders;
