import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components/index';

import { products } from '../data/products';
import { useShopingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const ShoopingPage = () => {
  const { shoopingCart, onProductCountChange } = useShopingCart();

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
            onChange={onProductCountChange}
            value={shoopingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shooping-cart">
        {Object.entries(shoopingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
