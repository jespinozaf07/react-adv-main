import { CSSProperties, ReactElement } from 'react';

export interface ProductCardProps {
  children: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: onChangeArg) => void;
  value?: number;
}

export interface Product {
  id: number;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  increseBy: (value: number) => void;
  product: Product;
}

export interface onChangeArg {
  product: Product;
  count: number;
}

export interface useProductArgs {
  product: Product;
  onChange?: (arg: onChangeArg) => void;
  value?: number;
}

export interface ProductInCart extends Product {
  count: number;
}
