import React from 'react';

function CartScreen({ cartItems, updateQuantity, removeItem }) {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-screen">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => updateQuantity(item.id, e.target.value)} 
              min="1" 
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default CartScreen;
