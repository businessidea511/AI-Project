import React, { useState } from 'react';
    import './CreditPurchase.css';

    function CreditPurchase() {
      const [amount, setAmount] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle credit purchase logic here
        console.log('Purchase credits:', amount);
      };

      return (
        <div className="CreditPurchase">
          <h2>Purchase Credits</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Amount:
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </label>
            <button type="submit">Purchase</button>
          </form>
        </div>
      );
    }

    export default CreditPurchase;
