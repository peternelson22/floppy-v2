import { Form, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import SubmitBtn from '../components/SubmitBtn';

const Login = () => {
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
          defaultValue='******'
        />
        <div className='mt-4'>
          <SubmitBtn text='submit' />
        </div>
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
