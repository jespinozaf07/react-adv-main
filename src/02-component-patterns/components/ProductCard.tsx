import { createContext } from 'react';

import {
  ProductContextProps,
  ProductCardProps,
} from '../interfaces/interfaces';

import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  className,
  style,
  product,
  onChange,
  value
}: ProductCardProps) => {
  const { counter, increseBy } = useProduct({onChange, product, value});

  return (
    <Provider value={{ counter, increseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>{children}</div>
    </Provider>
  );
};
