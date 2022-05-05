import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components/index';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const ShoopingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
