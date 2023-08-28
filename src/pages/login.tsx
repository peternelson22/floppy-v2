import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import SubmitBtn from '../components/SubmitBtn';
import { customFetch } from '../utils';
import { loginUser } from '../features/userSlice';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../features/hooks/app';

export const action =
  (store: Store) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post('/auth/local', data);

      store.dispatch(loginUser(response.data));
      toast.success('logged in successfully');
      return redirect('/');
    } catch (error) {
      const errorMessage =
        //@ts-ignore
        error?.response?.data?.error?.message ||
        'please double check your credentials';

      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error. please try later.');
    }
  };

  return (
    <section className='h-screen grid place-items-center '>
      <Form
        method='POST'
        className='card w-96 p-8 shadow-lg bg-base-100 gap-y-4 flex flex-col hover:shadow-md'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
          name='email'
          label='email'
          type='email'
          defaultValue='test@test.com'
        />
        <FormInput
          name='password'
          label='password'
          type='password'
          defaultValue='secret'
        />
        <div className='mt-4'>
          <SubmitBtn text='submit' />
        </div>
        <button
          type='button'
          className='btn btn-secondary btn-block'
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-info capitalize'
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
