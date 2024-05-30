import react from 'react';

const Card = ({sendCardInfo}) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    sendCardInfo(formJson.cardnum, formJson.expiry, formJson.cvv, formJson.zipcode);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label for="cardnum">Enter Card Number:</label>
      <input type="text" id="cardnum" name="cardnum" required></input>
      <br></br>
      <label for="expiry">Enter Expiry Date:</label>
      <input type="text" id="expiry" name="expiry" required></input>
      <br></br>
      <label for="cvv">Enter CVV:</label>
      <input type="text" id="cvv" name="cvv" required></input>
      <br></br>
      <label for="zipcode">Enter Zip Code:</label>
      <input type="text" id="zipcode" name="zipcode" required></input>
      <br></br>
      <button type="submit">NEXT</button>
    </form>
  )
};

export default Card;