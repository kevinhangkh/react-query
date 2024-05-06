import { Product } from '../types/Product.type';

interface Props {
  product: Product;
}

function ProductCard(props: Props) {
  const { product } = props;

  return (
    <div className="product">
      <h5>{product.title}</h5>
      <h6>{product.brand}</h6>
      <div>
        <span>{product.description}</span>
        <span>{product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
