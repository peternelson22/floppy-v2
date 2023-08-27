import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData() as any;

  const { search, company, category, shipping, order, price } = params;

  return (
    <div className='sm:sticky top-0'>
      <Form className='bg-base-100 my-4'>
        {/* SEARCH */}
        <FormInput
          type='search'
          name='search'
          size='input-sm'
          defaultValue={search}
          placeholder='Search...'
        />
        <FormSelect
          label='select category'
          name='category'
          list={meta.categories}
          defaultValue={category}
          size='select-sm'
        />
        <FormSelect
          label='select company'
          name='company'
          list={meta.companies}
          defaultValue={company}
          size='select-sm'
        />
        <FormSelect
          label='sort by'
          name='order'
          list={['a-z', 'z-a', 'high', 'low']}
          size='select-sm'
          defaultValue={order}
        />
        <FormRange
          label='select price'
          name='price'
          size='range-sm'
          price={price}
        />
        <FormCheckbox
          label='free shipping'
          name='shipping'
          size='checkbox-sm'
          defaultValue={shipping}
        />

        {/* BUTTONS */}
        <button type='submit' className='btn btn-primary btn-sm mt-4 mr-4'>
          search
        </button>
        <Link to='/products' className='btn btn-accent btn-sm mt-2'>
          reset
        </Link>
      </Form>
    </div>
  );
};
export default Filters;
