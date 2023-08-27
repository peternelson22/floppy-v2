import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import Navlinks from './NavLinks';
import { useAppDispatch, useCartSelector } from '../features/hooks/app';
import { toggleTheme } from '../features/userSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { numItemsInCart } = useCartSelector();

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          <NavLink
            to='/'
            className='hidden md:flex text-2xl btn btn-info items-center'
          >
            FP
          </NavLink>
          <div className='dropdown'>
            <label tabIndex={0} className='md:hidden btn btn-ghost '>
              <FaBarsStaggered className='text-lg' />
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-200 rounded-box w-52 mt-3'
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal'>
            <Navlinks />
          </ul>
        </div>
        <div className='navbar-end'>
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={() => dispatch(toggleTheme())} />
            <BsMoonFill className='swap-on h-4 w-4' />
            <BsSunFill className='swap-off h-4 w-4' />
          </label>
          <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-2'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-info badge-sm indicator-item'>
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
