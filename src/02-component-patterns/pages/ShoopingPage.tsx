import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components/index';

import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';

const products: Product[] = [
  { id: 1, title: 'Coffee Mug', img: './coffee-mug.png' },
  { id: 2, title: 'Sugar Bag', img: './sugar.jpg' },
  { id: 3, title: 'Rice Bag', img: './rice.jpeg' },
];

export const ShoopingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            style={{ backgroundColor: '#70D1F8' }}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
