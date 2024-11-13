
import React from 'react';

function ProductDetailsModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="product-details-modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
