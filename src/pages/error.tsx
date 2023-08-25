import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as Error;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className='grid min-h-[100vh] place-items-center px-8'>
          <div className='text-center'>
            <p className='font-bold text-5xl md:text-8xl text-secondary'>404</p>
            <h1 className='text-2xl md:text-4xl tracking-widest font-serif mt-2'>
              Page not found
            </h1>
            <p className='tracking-wide font-serif text-gray-300 text-base mt-2'>
              Sorry, we can't find the page your are lookin for...
            </p>
            <div className='mt-4'>
              <Link to='/' className='btn btn-secondary'>
                Back Home
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className='min-h-[100vh] grid place-items-center px-8'>
      <div className='text-center'>
        <p className='text-3xl text-secondary tracking-wider font-serif'>
          Something went wrong
        </p>
        <div className='mt-4'>
          <Link to='/' className='btn btn-secondary'>
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
