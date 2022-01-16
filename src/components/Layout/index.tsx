import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartValue, onCartValueChange } from '../../redux/cartValueReducer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const cartValue = useSelector(getCartValue);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(onCartValueChange(cartValue || 0));
  }, [])

  return <div className="container mx-auto px-4 " >
    <header className="bg-primary ">
      <div className="flex justify-between">
        <Link href="/">
          <a className="text-white">Qogita</a>
        </Link>
        <nav className="navigation-buttons">
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <a className="navigation-button">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/products/[productPage]" as="/products/1">
                <a className="navigation-button">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/cart">
              <a className="navigation-button">Cart</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    {children}
  </div>
};

export default Layout;
