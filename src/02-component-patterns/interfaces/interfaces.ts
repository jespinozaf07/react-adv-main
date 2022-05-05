import { ReactElement } from 'react';

export interface ProductCardProps {
  product: Product;
  children: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increseBy: (value: number) => void;
  product: Product;
}
