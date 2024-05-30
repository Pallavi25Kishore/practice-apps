import react from 'react';

const Card = ({sendCardInfo, showCardInfo}) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.cardnum, formJson.expiry, formJson.cvv, formJson.zipcode);
    sendCardInfo(formJson.cardnum, formJson.expiry, formJson.cvv, formJson.zipcode);
  };

  return (
    <div>
      {showCardInfo ?
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="cardnum">Enter Card Number:</label>
      <input type="text" id="cardnum" name="cardnum" required></input>
      <br></br>
      <label htmlFor="expiry">Enter Expiry Date:</label>
      <input type="text" id="expiry" name="expiry" required></input>
      <br></br>
      <label htmlFor="cvv">Enter CVV:</label>
      <input type="text" id="cvv" name="cvv" required></input>
      <br></br>
      <label htmlFor="zipcode">Enter Zip Code:</label>
      <input type="text" id="zipcode" name="zipcode" required></input>
      <br></br>
      <button type="submit">NEXT</button>
    </form> : null }
    </div>
  )
};

export default Card;