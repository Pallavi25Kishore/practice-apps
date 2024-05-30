import react from 'react';

const Checkout = ({checkoutButtonClick, showCheckout}) => {

  const handleClick = (event) => {
    event.preventDefault();
    checkoutButtonClick();
  };

  return (
    <div>
  {showCheckout ?
    <button onClick={handleClick}>CHECKOUT</button> : null}
  </div>
  )

};

export default Checkout;