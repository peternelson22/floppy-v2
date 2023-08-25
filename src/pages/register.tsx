import { Form, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import SubmitBtn from '../components/SubmitBtn';

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 hover:shadow-md'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>

        <FormInput name='username' type='text' label='username' />
        <FormInput name='email' type='email' label='email' />
        <FormInput name='password' type='password' label='password' />
        <div className='mt-4'>
          <SubmitBtn text='submit' />
        </div>
        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-info capitalize'
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
