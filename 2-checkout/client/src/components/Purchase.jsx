import react from 'react';

const Purchase = ({purchaseButtonClick, showPurchase}) => {

  const handleClick = (event) => {
    event.preventDefault();
    purchaseButtonClick();
  };

  return (
   <div>
      {showPurchase ?
      <>
      <h1>Purchase Details</h1>
      <h2>Personal Information</h2>
      <div>Username: </div>
      <div>Email: </div>
      <h2>Shipping Address</h2>
      <div>Address: </div>
      <h2>Payment Details</h2>
      <div>Card Number: </div>
      <div>Expiry: </div>
      <div>CVV: </div>
      <div>Zip Code: </div>
      <button onClick={handleClick}>Purchase</button>
      </>
      : null}
  </div>
  )

};

export default Purchase;