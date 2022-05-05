import { useState } from 'react';
import { ProductInCart, onChangeArg } from '../interfaces/interfaces';

export const useShopingCart = () => {
  const [shoopingCart, setShoopingCart] = useState<{
    [key: number]: ProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: onChangeArg) => {
    setShoopingCart((oldShoopingCart) => {
      const productInCart: ProductInCart = oldShoopingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoopingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoopingCart;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = sc;
      //   return rest;
      // }
      // return {
      //   ...sc,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoopingCart,
    onProductCountChange,
  };
};
