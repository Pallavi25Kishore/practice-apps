import react from 'react';

const Purchase = ({purchaseButtonClick, showPurchase, purchaseInfo}) => {

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
      <div>Username: {purchaseInfo.name}</div>
      <div>Email: {purchaseInfo.email}</div>
      <h2>Shipping Address</h2>
      <div>Address: {purchaseInfo.address}</div>
      <h2>Payment Details</h2>
      <div>Card Number: {purchaseInfo.cardnum}</div>
      <div>Expiry: {purchaseInfo.expiry}</div>
      <div>CVV: {purchaseInfo.cvv}</div>
      <div>Zip Code: {purchaseInfo.zipcode}</div>
      <button onClick={handleClick}>Purchase</button>
      </>
      : null}
  </div>
  )

};

export default Purchase;