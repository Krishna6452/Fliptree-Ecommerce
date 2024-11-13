import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ProductListing({ products }) {
  const { addToCart } = useContext(AppContext);

  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
