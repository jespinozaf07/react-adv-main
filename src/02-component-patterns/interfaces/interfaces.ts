import { CSSProperties, ReactElement } from 'react';

export interface ProductCardProps {
  children: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties
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
