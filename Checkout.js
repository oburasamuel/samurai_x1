import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="address">Shipping Address</label>
        <input type="text" id="address" name="address" required />
        
        <label htmlFor="payment">Payment Method</label>
        <select id="payment" name="payment" required>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
