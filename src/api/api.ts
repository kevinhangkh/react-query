export const fetchProducts = async () => {
  const response = await fetch(`https://dummyjson.com/products?limit=5`);
  const json = await response.json();
  return json.products;
};

export const addProduct = async (product: { title: string }) => {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: product.title,
      brand: 'Some brand',
      description: 'Some description',
      price: 100,
    }),
  });
  const json = await response.json();
  return json;
};
