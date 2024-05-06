import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addProduct, fetchProducts } from '../api/api';
import ProductCard from './ProductCard';
import { Product } from '../types/Product.type';
import { useState } from 'react';

function Demo() {
  const [title, setTitle] = useState<string>('');

  // if we want to search products
  // const [search, setSearch] = useState<string>('');

  // Gets the query client from the context
  const queryClient = useQueryClient();

  // Fetch products
  const { data: products, isLoading } = useQuery({
    queryFn: fetchProducts,
    // queryFn: () => fetchProducts(search),
    queryKey: ['products'],
    // queryKey: ['products', { search }],
  });

  // Add products
  // Will not actually add to the database as it's a dummy endpoint
  // But it will invalidate the products and trigger a new fetch
  const { mutateAsync: addProductMutation } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleClickAddProduct = async () => {
    try {
      await addProductMutation({ title });
      setTitle('');
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        <input type="text" onChange={handleTitleChange} value={title} />
        <button onClick={handleClickAddProduct}>Add product</button>
      </div>
      <div className="product-list">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Demo;
